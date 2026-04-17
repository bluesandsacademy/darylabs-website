"use client";

import { useState, useEffect, useCallback } from "react";
import { FiArrowLeft, FiCheckCircle, FiX } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { BsLightbulb, BsChatSquareText, BsGlobe, BsTrophy } from "react-icons/bs";
import { FaFlask } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import OrientationStep from "./OrientationStep";
import HypothesisStep from "./HypothesisStep";
import ExperimentStep from "./ExperimentStep";
import DiscussionStep from "./DiscussionStep";
import RealWorldStep from "./RealworldStep";
import AssessmentStep from "./AssessmentStep";
import { QuizSessionEmbedded } from "./QuizCore";
import { getLearningSpaceById } from "@/services/learningSpaceService";
import { useUser } from "@/services/UserContext";

function mapApiToSteps(api) {
  const steps = [];

  if (
    api.preSimAssessment?.quizTitle?.trim() !== "" &&
    api.preSimAssessment?.questions?.some((q) => q.question.trim() !== "")
  ) {
    steps.push({ id: "pre-quiz", type: "pre-quiz", label: "Pre-Quiz", quiz: api.preSimAssessment });
  }

  if (api.introductionMessage || api.engagementQuestion || api.objective) {
    steps.push({
      id: "orientation",
      type: "orientation",
      label: "Introduction",
      introductionMessage: api.introductionMessage,
      engagementQuestion: api.engagementQuestion,
      objective: api.objective,
    });
  }

  if (api.hypothesisQuestion) {
    steps.push({ id: "hypothesis", type: "hypothesis", label: "Hypothesis", hypothesisQuestion: api.hypothesisQuestion });
  }

  if (api.simulationId || api.experimentProcedures?.length > 0) {
    steps.push({
      id: "experiment",
      type: "experiment",
      label: "Experiment",
      simulationId: api.simulationId,
      experimentProcedures: api.experimentProcedures ?? [],
      discussionPrompt: api.discussionPrompt,
      postSimAssessment: api.postSimAssessment,
    });
  }

  if (api.discussionPrompt) {
    steps.push({ id: "discussion", type: "discussion", label: "Discussion", discussionPrompt: api.discussionPrompt });
  }

  if (api.realWorldApplications?.length > 0 || api.relatedCareers?.length > 0 || api.realWorldTask) {
    steps.push({
      id: "real-world",
      type: "real-world",
      label: "Real World",
      realWorldApplications: api.realWorldApplications ?? [],
      relatedCareers: api.relatedCareers ?? [],
      realWorldTask: api.realWorldTask,
    });
  }

  if (api.postSimAssessment?.questions?.length > 0) {
    steps.push({ id: "assessment", type: "assessment", label: "Assessment", quiz: api.postSimAssessment });
  }

  return steps;
}

function PreQuizWrapper({ data, onContinue, onStepComplete }) {
  const handleQuizComplete = (results) => {
    onStepComplete({ stepId: data.id, quizResults: results });
    onContinue();
  };
  return <QuizSessionEmbedded quiz={data.quiz} onComplete={handleQuizComplete} />;
}

const STEP_COMPONENTS = {
  "pre-quiz": PreQuizWrapper,
  orientation: OrientationStep,
  hypothesis: HypothesisStep,
  experiment: ExperimentStep,
  discussion: DiscussionStep,
  "real-world": RealWorldStep,
  assessment: AssessmentStep,
};

const STEP_ICONS = {
  "pre-quiz": <HiOutlineClipboardCheck size={15} />,
  orientation: <MdOutlineExplore size={15} />,
  hypothesis: <BsLightbulb size={15} />,
  experiment: <FaFlask size={15} />,
  discussion: <BsChatSquareText size={15} />,
  "real-world": <BsGlobe size={15} />,
  assessment: <BsTrophy size={15} />,
};

function Header({ title, subtitle, onBack, onClose }) {
  return (
    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-100 bg-white px-5 py-4">
      <button onClick={onBack} className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100">
        <FiArrowLeft size={18} />
      </button>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100">
          <FiX size={18} />
        </button>
      )}
    </div>
  );
}

function StepBar({ steps, currentIndex }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto border-b border-gray-100 bg-white px-5 py-3">
      {steps.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        return (
          <div key={step.id} className="flex items-center gap-1">
            <div className="flex flex-col items-center gap-1">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                done ? "bg-emerald-500 text-white" : active ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-400"
              }`}>
                {done ? <FiCheckCircle size={14} /> : STEP_ICONS[step.type]}
              </div>
              <span className={`whitespace-nowrap text-[10px] font-medium ${
                active ? "text-indigo-600" : done ? "text-emerald-500" : "text-gray-400"
              }`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mb-4 h-px w-8 flex-shrink-0 ${done ? "bg-emerald-400" : "bg-gray-200"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

async function submitLearningSpace(lessonId, formData) {
  const response = await fetch("/api/learning-space/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lessonId, submittedAt: new Date().toISOString(), steps: formData }),
  });
  if (!response.ok) throw new Error(`Submission failed: ${response.statusText}`);
}

function LessonContent({ lessonId, onClose }) {
  const { token } = useUser();
  const [lesson, setLesson] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLesson = useCallback(async () => {
    if (!lessonId) return;
    setFetchError(null);
    setLoading(true);
    try {
      const data = await getLearningSpaceById(lessonId, token);
      const steps = mapApiToSteps(data);
      setLesson({ id: data.id, title: data.title, subtitle: data.objective ?? "", steps });
    } catch (err) {
      console.error("Failed to load learning space:", err);
      setFetchError("Failed to load this learning space. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [lessonId, token]);

  useEffect(() => {
    setLesson(null);
    setCurrentStep(0);
    setFormData({});
    fetchLesson();
  }, [lessonId]);

  const activeSteps = lesson?.steps ?? [];

  const handleStepComplete = useCallback((payload) => {
    setFormData((prev) => ({ ...prev, [String(payload.stepId ?? currentStep)]: payload }));
  }, [currentStep]);

  const handleContinue = useCallback(() => {
    if (!lesson) return;
    const isLastStep = currentStep === activeSteps.length - 1;
    if (isLastStep) {
      setIsSubmitting(true);
      setSubmitError(null);
      submitLearningSpace(lessonId ?? lesson.id, formData)
        .catch((err) => setSubmitError(err.message))
        .finally(() => setIsSubmitting(false));
    } else {
      setCurrentStep((s) => s + 1);
    }
  }, [lesson, activeSteps.length, currentStep, lessonId, formData]);

  const handleBack = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-gray-400">
        Loading lesson…
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-3 text-sm text-rose-500">
        <p>{fetchError}</p>
        <button className="rounded-md bg-rose-50 px-4 py-2 text-rose-600 hover:bg-rose-100" onClick={fetchLesson}>
          Retry
        </button>
      </div>
    );
  }

  if (!lesson) return null;

  if (activeSteps.length === 0) {
    return (
      <div className="flex h-full flex-col bg-gray-50">
        <Header title={lesson.title} subtitle={lesson.subtitle} onBack={handleBack} onClose={onClose} />
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-sm text-gray-400">
          <p className="font-medium text-gray-600">{lesson.title}</p>
          <p>{lesson.subtitle}</p>
          <p className="mt-4 text-xs">No content has been configured for this space yet.</p>
        </div>
      </div>
    );
  }

  const stepData = activeSteps[currentStep];
  const enrichedStepData = { ...stepData, stepNumber: currentStep + 1, totalSteps: activeSteps.length };
  const StepView = STEP_COMPONENTS[stepData.type];

  return (
    <div className="flex h-full flex-col bg-gray-50">
      <Header title={lesson.title} subtitle={lesson.subtitle} onBack={handleBack} onClose={onClose} />
      <StepBar steps={activeSteps} currentIndex={currentStep} />

      <div className="flex-1 overflow-y-auto">
        <StepView
          data={{ ...enrichedStepData, title: lesson.title, subtitle: lesson.subtitle }}
          onContinue={handleContinue}
          onStepComplete={handleStepComplete}
        />
      </div>

      {isSubmitting && (
        <div className="border-t border-gray-100 bg-white px-5 py-3 text-center text-sm text-indigo-500">
          Submitting your work…
        </div>
      )}
      {submitError && (
        <div className="border-t border-rose-100 bg-rose-50 px-5 py-3 text-center text-sm text-rose-600">
          {submitError} —{" "}
          <button className="underline" onClick={() => submitLearningSpace(lessonId ?? lesson.id, formData)}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

function LearningSpacePopup({ lessonId, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl shadow-2xl">
        <LessonContent lessonId={lessonId} onClose={onClose} />
      </div>
    </div>
  );
}

export default function LearningSpace({ lessonId, popup = false, onClose }) {
  if (popup) {
    if (!onClose) throw new Error("LearningSpace: `onClose` is required when using `popup` mode.");
    return <LearningSpacePopup lessonId={lessonId} onClose={onClose} />;
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col">
      <LessonContent lessonId={lessonId} />
    </div>
  );
}
