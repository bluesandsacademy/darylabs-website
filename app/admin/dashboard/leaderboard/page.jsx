"use client";

import ReportTable from "@/components/Dashboard/ReportTable";
import FilterButton from "@/services/FilterButton";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const AdminLeaderboardPage = () => {
  const filters = ["Students", "Teachers", "Schools"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const tableConfig = {
    Students: { headings: ["#", "Student Name", "Score", "School"], data: [] },
    Teachers: { headings: ["#", "Teacher Name", "Activities", "School"], data: [] },
    Schools: { headings: ["#", "School Name", "Score", "Country"], data: [] },
  };

  const currentData = tableConfig[activeFilter];

  return (
    <div className="flex flex-col gap-4 p-2 lg:p-4">
      <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between p-2 md:p-3 bg-white rounded-md">
        <div>
          <p className="font-semibold text-blue-950 lg:text-lg">Global Leaderboard</p>
          <p className="text-xs text-slate-500">Track top performers across all schools</p>
        </div>
        <button className="flex items-center gap-1 rounded-md p-2 px-3 text-xs md:text-sm text-white bg-blue-950">
          <FaDownload /> Export
        </button>
      </div>
      <FilterButton filters={filters} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <ReportTable headings={currentData.headings} data={currentData.data} totalItems={0} />
    </div>
  );
};

export default AdminLeaderboardPage;
