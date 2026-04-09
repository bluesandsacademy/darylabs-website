"use client";

import StatCards from "@/components/Dashboard/StatCards";
import { getStudentRewards } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";
import { RiStairsFill } from "react-icons/ri";

const DashboardRewardsPage = () => {
  const [filter, setFilter] = useState("badges");
  const [rewardsData, setRewardsData] = useState([]);
  const { user, token } = useUser();
  const completedExp = 0;
  const currentStreak = 0;

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getStudentRewards(token);
        setRewardsData(data);
      } catch (err) {
        console.error("Error fetching rewards:", err);
      }
    }
    fetchStats();
  }, [user, token]);

  const rewardStats = [
    { title: "Total Points", value: "0", icon: "/images/icon/kudos.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Experiments", value: "0", icon: "/images/icon/beaker_01.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Day Streak", value: "0", icon: "/images/icon/calendar.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "High Score", value: "0%", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  ];

  return (
    <div className="mr-2 ml-2 lg:ml-5 lg:mr-5 flex flex-col gap-4 lg:gap-6">
      <div className="bg-purple-700 p-2 lg:p-4 text-white rounded-md mt-4 lg:mt-8">
        <p className="lg:text-lg font-semibold">Badges &amp; Rewards</p>
        <p className="text-xs lg:text-sm">Track your progress and achievements</p>
      </div>
      <StatCards stats={rewardStats} />
      <div className="flex gap-2">
        {["badges", "achievements"].map((f) => (
          <button
            key={f}
            className={`p-1 lg:p-2 px-4 lg:px-6 text-xs lg:text-sm rounded-md transition-colors capitalize ${filter === f ? "bg-[#006fcc] text-white" : "bg-blue-50 text-blue-600 hover:bg-blue-100"}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filter === "badges" && (
        <div className="m-3 flex flex-wrap gap-4 md:gap-6 bg-white p-2 lg:p-6 rounded-md">
          {rewardsData.length === 0 ? (
            <p className="text-gray-500 text-sm">No badges earned yet. Complete experiments to earn badges!</p>
          ) : (
            rewardsData.map((reward, index) => (
              <div key={index} className="p-4 px-8 relative bg-violet-800 w-max rounded-md flex flex-col gap-2 items-center justify-center text-center">
                <div className="absolute rounded-full bg-linear-to-b from-purple-700 to-purple-950 text-white text-xs p-2 top-2 left-2">
                  <p>Common</p>
                </div>
                <div className="flex items-center justify-center p-2 bg-violet-600 rounded-md text-white text-xl">
                  <RiStairsFill />
                </div>
                <p className="text-white lg:text-lg">{reward.name}</p>
                <p className="text-white text-xs lg:text-sm">{reward.description}</p>
                <p className="text-yellow-500 text-xs lg:text-sm">{reward.awardedAt}</p>
              </div>
            ))
          )}
        </div>
      )}

      {filter === "achievements" && (
        <div className="m-3 flex flex-col gap-4 bg-white p-2 lg:p-6 rounded-md text-gray-600">
          {[
            { label: "Complete 10 Experiments", pts: "300 pts", goal: 10, current: completedExp, factor: 10 },
            { label: "Complete 20 Experiments", pts: "250 pts", goal: 20, current: completedExp, factor: 5 },
          ].map((a, i) => (
            <div key={i} className="flex flex-col md:flex-row bg-blue-50 rounded-md justify-between p-2 md:p-3 text-xs md:text-sm">
              <div className="flex gap-2 md:gap-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-full text-white bg-blue-700"><FaStar /></div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="font-semibold">{a.label}</p>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-300 h-2 rounded-full w-40 overflow-hidden">
                      <div className="h-full bg-[#006fcc]" style={{ width: `${Math.min(a.current * a.factor, 100)}%` }}></div>
                    </div>
                    <p>{a.current}/{a.goal}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-yellow-500">{a.pts}</p>
                {a.current >= a.goal && <div className="flex items-center gap-2 text-green-600"><ImCheckmark2 /><p>Completed</p></div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardRewardsPage;
