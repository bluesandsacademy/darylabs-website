"use client";
import TeacherWelcomeBanner from "@/components/Teacher/TeacherWelcomeBanner";
import { useUser } from "@/services/UserContext";

export default function TeacherReportsPage() {
  const { user } = useUser();
  const firstName = user?.fullName?.split(" ")[0];
  return (
    <div className="p-4 space-y-4">
      <TeacherWelcomeBanner firstName={firstName || ""} />
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold">Reports</h2>
        <p className="text-gray-500 text-sm mt-2">Content coming soon.</p>
      </div>
    </div>
  );
}
