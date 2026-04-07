"use client";

import StatCards from "@/components/Dashboard/StatCards";
import SchoolWelcomeBanner from "@/components/School/Dashboard/SchoolWelcomeBanner";
import SchoolWideTrend from "@/components/School/Dashboard/SchoolWideTrend";
import { getSchoolAdminDashboard, getSchoolAdminOverview } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";

const statsConfig = [
  { title: "Total Students", value: "0", icon: "/images/icon/student_blue.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Total Teachers", value: "0", icon: "/images/icon/card_teacher.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Experiments Conducted", value: "0", icon: "/images/icon/microscope.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Average Quiz Score", value: "0", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Active Students", value: "0", icon: "/images/icon/student_dark.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Active Teachers", value: "0", icon: "/images/icon/active_teacher.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
];

const SchoolDashboardPage = () => {
  const [stats, setStats] = useState([]);
  const [overviewData, setOverviewData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, token } = useUser();
  const firstName = user?.fullName?.split(" ")[0];

  useEffect(() => {
    if (!user || !token) return;
    async function fetchStats() {
      setIsLoading(true);
      try {
        const data = await getSchoolAdminDashboard(token);
        const data2 = await getSchoolAdminOverview(token);
        setStats([
          { ...statsConfig[0], value: `${data.counts.students}` },
          { ...statsConfig[1], value: `${data.counts.teachers}` },
          { ...statsConfig[2], value: `${data.activity7d.experiments}` },
          { ...statsConfig[3], value: `${data.activity7d.quizzes}` },
          { ...statsConfig[4], value: `${data2.totals.activeStudents}` },
          { ...statsConfig[5], value: `${data2.totals.activeTeachers}` },
        ]);
        setOverviewData(data2);
      } catch (err) {
        setStats(statsConfig.map((stat) => ({ ...stat, value: "0" })));
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, [user, token]);

  return (
    <div className="p-4 space-y-4">
      <SchoolWelcomeBanner firstName={firstName || ""} />
      <StatCards stats={stats} isLoading={isLoading} />
      <div className="flex flex-col md:flex-row items-center gap-6">
        <SchoolWideTrend />
        <div className="flex flex-col p-4 gap-4 w-full md:w-96 rounded-lg bg-white lg:py-14">
          <strong className="text-sm md:text-base text-gray-500">Subscription</strong>
          <div className="flex flex-col gap-2">
            <p className="text-sm">{overviewData?.subscription?.tier || "Plan Type"}</p>
            {overviewData?.subscription?.isActive ? (
              <p className="text-green-400 text-xs md:text-sm">Active (Renews in {overviewData.subscription.daysRemaining} days)</p>
            ) : (
              <p className="text-red-400 text-xs md:text-sm">Subscription not active</p>
            )}
            <p className="text-xs md:text-sm">Payment: cardtype ***num</p>
          </div>
          <button className="text-white bg-blue-950 rounded-md p-2 text-sm">Manage subscription</button>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-md p-3">
        <p className="text-blue-950 text-sm lg:text-base font-semibold">Recent Activities</p>
      </div>
    </div>
  );
};

export default SchoolDashboardPage;
