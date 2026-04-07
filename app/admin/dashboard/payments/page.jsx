"use client";

import FilterButton from "@/services/FilterButton";
import { useState } from "react";

const AdminPaymentsPage = () => {
  const filters = ["Overview", "Transactions", "Invoices"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-3 lg:gap-5">
      <FilterButton filters={filters} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <div className="bg-white rounded-md p-4">
        <p className="text-sm text-gray-500 text-center">No payment data available</p>
      </div>
    </div>
  );
};

export default AdminPaymentsPage;
