"use client";

import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import { useUser } from "@/services/UserContext";

export default function DashboardSupportPage() {
  const { user } = useUser();
  const firstName = user?.fullName?.split(" ")[0];

  return (
    <div className="p-3 md:p-5">
      <WelcomeBanner firstName={firstName || ""} />
      <div className="mt-4 bg-white rounded-xl p-6 shadow-sm max-w-2xl">
        <h2 className="text-lg font-semibold mb-2">Contact Support</h2>
        <p className="text-gray-500 text-sm mb-6">Have an issue? Reach out to the Darylabs team.</p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Subject</label>
            <input type="text" className="border border-gray-200 rounded-md p-2 text-sm" placeholder="Describe your issue briefly" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Message</label>
            <textarea rows={5} className="border border-gray-200 rounded-md p-2 text-sm" placeholder="Provide more details..." />
          </div>
          <button type="submit" className="bg-[#006fcc] text-white rounded-md p-2 text-sm hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
