"use client";

import { Suspense, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import PhETSimulation from "@/components/Dashboard/PhET/PhETDemoSimulation";

function LaunchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionEndedRef = useRef(false);

  const simUrl = searchParams.get("simulationUrl") ?? "";
  const title = searchParams.get("title") ?? "";

  const endExperiment = () => {
    if (sessionEndedRef.current) return;
    sessionEndedRef.current = true;
    console.log("Session ended");
  };

  useEffect(() => {
    return () => endExperiment();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => endExperiment();
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") endExperiment();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 p-2 lg:p-4">
      <button
        onClick={() => { endExperiment(); router.back(); }}
        className="w-max rounded-full border border-[#006fcc] text-[#006fcc] p-2 text-sm lg:text-base"
      >
        <FaArrowLeft />
      </button>
      <PhETSimulation simulationUrl={simUrl} title={title} />
    </div>
  );
}

export default function LaunchPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <LaunchContent />
    </Suspense>
  );
}
