"use client";

import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";
import { getStudentLeaderboard } from "@/services/dashboard-service";
import FilterButton from "@/services/FilterButton";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { TableRowsSkeleton } from "@/components/ui/Skeleton";

export default function DashboardLeaderboardPage() {
  const { user, token } = useUser();
  const firstName = user?.fullName?.split(" ")[0];
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Students");
  const filters = ["Students", "Teachers", "Schools"];

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const data = await getStudentLeaderboard(token);
        setLeaderboardData(data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      }
    }
    fetchLeaderboard();
  }, [token]);

  return (
    <div className="p-3 md:p-5">
      <WelcomeBanner firstName={firstName || ""} />
      <FilterButton filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Leaderboard — {activeFilter}</h2>
        {leaderboardData ? (
          <p className="text-gray-500 text-sm">No leaderboard data yet.</p>
        ) : (
          <TableRowsSkeleton rows={6} />
        )}
      </div>
    </div>
  );
}
