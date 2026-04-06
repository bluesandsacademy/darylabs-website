"use client";

import StatCards from "@/components/Dashboard/StatCards";
import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import { quizStats } from "@/lib/data";
import { useUser } from "@/services/UserContext";

export default function StemQuizzesPage() {
  const { user } = useUser();
  const firstName = user?.fullName?.split(" ")[0];

  return (
    <div className="p-3 md:p-5 space-y-6">
      <WelcomeBanner firstName={firstName || ""} />
      <StatCards stats={quizStats} />
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">STEM Assessments</h2>
        <p className="text-gray-500 text-sm">Your quiz history will appear here.</p>
      </div>
    </div>
  );
}
