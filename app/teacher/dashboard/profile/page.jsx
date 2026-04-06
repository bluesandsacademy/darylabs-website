"use client";
import { useUser } from "@/services/UserContext";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

export default function TeacherProfilePage() {
  const { user } = useUser();
  return (
    <div className="p-4 space-y-4">
      <Link href="/teacher/dashboard" className="flex items-center gap-1 text-sm font-bold">
        <FaAngleLeft className="text-[#303C48]" /> Profile
      </Link>
      <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
        <div className="flex flex-col gap-3 text-sm">
          {[["Full Name", user?.fullName], ["Email", user?.email], ["Phone", user?.phone || "—"], ["Country", user?.country || "—"], ["Role", user?.role || "—"]].map(([label, val]) => (
            <div key={label} className="flex justify-between border-b pb-2">
              <span className="text-gray-500">{label}</span>
              <span className="font-medium capitalize">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
