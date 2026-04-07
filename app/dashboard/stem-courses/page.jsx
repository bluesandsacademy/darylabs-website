"use client";

import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import { useUser } from "@/services/UserContext";

export default function StemCoursesPage() {
  const { user } = useUser();
  const firstName = user?.fullName?.split(" ")[0];

  return (
    <div className="p-3 md:p-5 space-y-6">
      <WelcomeBanner firstName={firstName || ""} />
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Learning Space</h2>
        <p className="text-gray-500 text-sm">Your enrolled STEM courses will appear here.</p>
      </div>
    </div>
  );
}
