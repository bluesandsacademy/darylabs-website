"use client";

import StatCards from "@/components/Dashboard/StatCards";
import FilterButton from "@/services/FilterButton";
import { useState } from "react";
import { FaFilter, FaPlus } from "react-icons/fa";

const statsConfig = [
  { title: "Paid This Month", value: "0", icon: "/images/icon/admin/green-paid.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Pending", value: "0", icon: "/images/icon/admin/blue-pending.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Overdue", value: "0", icon: "/images/icon/admin/red-cancel.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Total Payments", value: "0", icon: "/images/icon/total_payments.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
];

const AdminSchoolManagementPage = () => {
  const filters = ["Schools", "Users", "Payments"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-3 lg:gap-5">
      <FilterButton filters={filters} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <div className={`flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-end md:items-center p-4 rounded-md bg-white ${activeFilter === "Payments" && "hidden"}`}>
        <div className="flex text-xs md:text-sm gap-4 items-center">
          <input type="search" placeholder={activeFilter === "Schools" ? "Search School..." : "Search User..."} className="text-sm rounded-md p-2 border border-gray-300" />
          <div className="flex items-center text-gray-500 rounded-md p-2 border border-gray-200">
            <FaFilter />
            <select><option value="">Filter</option></select>
          </div>
        </div>
        <button className="flex gap-1 items-center text-white bg-[#006fcc] rounded-md text-xs lg:text-sm p-2">
          <FaPlus /> Add {activeFilter === "Schools" ? "School" : "User"}
        </button>
      </div>
      {activeFilter === "Payments" && <StatCards stats={statsConfig} />}
      <div className="bg-white rounded-md p-4">
        <p className="text-sm text-gray-500 text-center">No {activeFilter} data available</p>
      </div>
    </div>
  );
};

export default AdminSchoolManagementPage;
