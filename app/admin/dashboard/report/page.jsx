"use client";

import FilterButton from "@/services/FilterButton";
import { useState } from "react";

const AdminReportPage = () => {
  const filters = ["Overview", "Detailed", "Export"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-3 lg:gap-5">
      <FilterButton filters={filters} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <div className="bg-white rounded-md p-4">
        <p className="text-sm text-gray-500 text-center">Report data coming soon</p>
      </div>
    </div>
  );
};

export default AdminReportPage;
