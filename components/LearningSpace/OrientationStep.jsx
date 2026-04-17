"use client";

import { useState } from "react";
import { FiArrowRight, FiMic, FiCheckCircle } from "react-icons/fi";

export default function OrientationStep({ data, onContinue }) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-800 to-indigo-500 p-7 text-white">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-indigo-200">
          Step {data.stepNumber} of {data.totalSteps}
        </span>
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="mt-1 text-sm text-indigo-200">{data.subtitle}</p>
        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/10" />
      </div>

      <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Guiding Question
        </span>
        <p className="text-base font-semibold text-gray-800">&ldquo;{data.engagementQuestion}&rdquo;</p>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-800">What do you think?</p>
            <p className="text-xs text-gray-400">{data?.poll?.subtext}</p>
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 transition hover:border-indigo-300 hover:text-indigo-500">
            <FiMic size={12} /> Voice
          </button>
        </div>

        <textarea
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={data.inputPlaceholder}
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-indigo-400 focus:bg-white"
        />

        {submitted ? (
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600">
            <FiCheckCircle /> Your answer is submitted!
          </div>
        ) : (
          <button
            disabled={!text.trim()}
            onClick={() => setSubmitted(true)}
            className="mt-3 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Submit Answer
          </button>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onContinue}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Continue <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
