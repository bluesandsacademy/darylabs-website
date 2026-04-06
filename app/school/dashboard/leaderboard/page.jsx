"use client";

import ReportTable from "@/components/Dashboard/ReportTable";
import { getSchoolAdminLeaderboard } from "@/services/dashboard-service";
import FilterButton from "@/services/FilterButton";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const SchoolLeaderboardPage = () => {
  const filters = ["Students", "Teachers", "Schools"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const { user, token } = useUser();

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getSchoolAdminLeaderboard(token);
        setLeaderboardData(data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      }
    }
    fetchStats();
  }, [user, token]);

  const tableConfig = {
    Students: { headings: ["#", "Student Name", "Score"], data: leaderboardData?.topStudents },
    Teachers: { headings: ["#", "Teacher Name", "Activities"], data: leaderboardData?.topTeachers },
    Schools: { headings: ["#", "School Name", "Score"], data: leaderboardData?.regionalCompare },
  };

  const currentData = tableConfig[activeFilter];

  return (
    <div className="flex flex-col gap-4 p-2 lg:p-4">
      <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between p-2 md:p-3 bg-white rounded-md">
        <div>
          <p className="font-semibold text-blue-950 lg:text-lg">Leaderboard</p>
          <p className="text-xs text-slate-500">Track top performers and achievements</p>
        </div>
        <div>
          <button className="flex items-center gap-1 rounded-md p-2 px-3 text-xs md:text-sm text-white bg-blue-950">
            <FaDownload /> Export
          </button>
        </div>
      </div>
      <FilterButton filters={filters} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <div className="mt-4">
        <ReportTable headings={currentData?.headings || []} data={currentData?.data || []} totalItems={currentData?.data?.length || 0} />
      </div>
    </div>
  );
};

export default SchoolLeaderboardPage;
