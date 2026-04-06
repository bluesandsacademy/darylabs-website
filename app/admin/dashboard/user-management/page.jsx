"use client";

import FilterButton from "@/services/FilterButton";
import { useState } from "react";
import { FaFilter, FaPlus } from "react-icons/fa";

const AdminUserManagementPage = () => {
  const filters = ["All Users", "Students", "Teachers", "School Admins"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-3 lg:gap-5">
      <FilterButton filters={filters} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-end md:items-center p-4 rounded-md bg-white">
        <div className="flex text-xs md:text-sm gap-4 items-center">
          <input type="search" placeholder="Search users..." className="text-sm rounded-md p-2 border border-gray-300" />
          <div className="flex items-center text-gray-500 rounded-md p-2 border border-gray-200">
            <FaFilter />
            <select><option value="">Filter</option></select>
          </div>
        </div>
        <button className="flex gap-1 items-center text-white bg-[#006fcc] rounded-md text-xs lg:text-sm p-2">
          <FaPlus /> Add User
        </button>
      </div>
      <div className="bg-white rounded-md p-4">
        <p className="text-sm text-gray-500 text-center">No user data available</p>
      </div>
    </div>
  );
};

export default AdminUserManagementPage;
