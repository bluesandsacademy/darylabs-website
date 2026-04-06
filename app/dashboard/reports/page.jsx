"use client";

import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import FilterButton from "@/services/FilterButton";
import { useUser } from "@/services/UserContext";
import { useState } from "react";

export default function DashboardReportsPage() {
  const { user } = useUser();
  const firstName = user?.fullName?.split(" ")[0];
  const filters = ["Experiments", "Quizzes", "Courses"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="p-3 md:p-5">
      <WelcomeBanner firstName={firstName || ""} />
      <FilterButton filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Reports — {activeFilter}</h2>
        <p className="text-gray-500 text-sm">No report data available yet.</p>
      </div>
    </div>
  );
}
