"use client";

import StatCards from "@/components/Dashboard/StatCards";
import PerformanceByStemCourses from "@/components/Dashboard/Performance";
import UpcomingStemCourses from "@/components/Dashboard/UpcomingStemCourses";
import QuizPerformance from "@/components/Dashboard/Performance/Quiz";
import TimeSpent from "@/components/Dashboard/Performance/TimeSpent";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { getStudentOverview } from "@/services/dashboard-service";

const statsConfig = [
  { title: "Lab Time", value: "0", icon: "/images/icon/calendar.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last week" },
  { title: "Completed Experiments", value: "0", icon: "/images/icon/beaker_01.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Quiz Average", value: "0", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Ranking", value: "0", icon: "/images/icon/microscope.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
];

export default function DashboardHome() {
  const { user, token } = useUser();
  const firstName = user?.fullName?.split(" ")[0];
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const [overviewData, setOverviewData] = useState(null);

  useEffect(() => {
    if (!user || !token) return;

    async function fetchStats() {
      setIsLoading(true);
      try {
        const data = await getStudentOverview(token);
        const statsData = [
          { ...statsConfig[0], value: `${data.minutesInLab7d}` },
          { ...statsConfig[1], value: `${data.completedExperiments}` },
          { ...statsConfig[2], value: `${data.avgQuizScorePercent}` },
          { ...statsConfig[3], value: `${data.rankSchool}` },
        ];
        setStats(statsData);
        setOverviewData(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setStats(statsConfig.map((s) => ({ ...s, value: "0" })));
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, [user, token]);

  return (
    <div className="p-3 md:p-5 space-y-6 md:space-y-10">
      {/* Welcome Section */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/images/bg/welcome_cover.png"
          alt="welcome-background"
          className="w-full h-32 md:h-28 lg:h-20 object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 text-white left-4 md:left-10 w-[90%]">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full justify-between items-center md:items-baseline">
            <div>
              <h3 className="font-medium leading-tight md:leading-none my-0 text-lg md:text-2xl lg:text-3xl">
                Welcome Back, {firstName}
              </h3>
              <p className="my-0 text-sm md:text-md leading-normal md:leading-none">
                Ready for your next STEM adventure?
              </p>
            </div>
            <button className="bg-[#006fcc] text-white text-xs md:text-sm p-2 rounded-md">
              Join Our Community
            </button>
          </div>
        </div>
      </div>

      <StatCards stats={stats} isLoading={isLoading} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-5">
        <div className="xl:col-span-2">
          <TimeSpent />
        </div>
        <div className="xl:col-span-3">
          <QuizPerformance />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-5">
        <div className="xl:col-span-3">
          <PerformanceByStemCourses />
        </div>
        <div className="xl:col-span-2">
          <UpcomingStemCourses
            recommendations={overviewData?.recommendations ?? []}
          />
        </div>
      </div>

      <p className="text-gray-500 text-sm md:text-base">
        Let&apos;s dive into your next STEM adventure!
      </p>
    </div>
  );
}
