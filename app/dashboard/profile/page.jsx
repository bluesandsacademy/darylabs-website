"use client";

import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import { useUser } from "@/services/UserContext";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

export default function DashboardProfilePage() {
  const { user } = useUser();
  const firstName = user?.fullName?.split(" ")[0];

  return (
    <div className="p-3 md:p-5 space-y-6">
      <WelcomeBanner firstName={firstName || ""} />
      <Link href="/dashboard" className="flex flex-row">
        <p className="font-bold ml-5 flex items-center gap-1 lg:gap-2">
          <FaAngleLeft className="text-[#006fcc]" /> Profile
        </p>
      </Link>
      <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Full Name</span>
            <span className="font-medium">{user?.fullName}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">{user?.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Phone</span>
            <span className="font-medium">{user?.phone || "—"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Country</span>
            <span className="font-medium">{user?.country || "—"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Role</span>
            <span className="font-medium capitalize">{user?.role || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Verified</span>
            <span className={`font-medium ${user?.isVerified ? "text-green-600" : "text-red-500"}`}>
              {user?.isVerified ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
