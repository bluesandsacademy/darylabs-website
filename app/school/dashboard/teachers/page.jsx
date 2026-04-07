"use client";

import StatCards from "@/components/Dashboard/StatCards";
import { getSchoolAdminTeacherActivity } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const statsConfig = [
  { title: "Total Assignments", value: "0", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Average Feedback Time", value: "0", icon: "/images/icon/stopwatch.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Average Engagement Score", value: "0", icon: "/images/icon/total_payments.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Active Teachers", value: "0", icon: "/images/icon/active_teacher.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
];

const COLORS = ["#10B981", "#3B82F6", "#F59E0B"];
const pieChartData = [{ name: "Excellent", value: 231 }, { name: "Good", value: 175 }, { name: "Needs Attention", value: 175 }];

const SchoolTeacherActivityPage = () => {
  const [stats, setStats] = useState([]);
  const [activityData, setActivityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, token } = useUser();

  useEffect(() => {
    if (!user || !token) return;
    async function fetchStats() {
      setIsLoading(true);
      try {
        const data = await getSchoolAdminTeacherActivity(token);
        setStats([
          { ...statsConfig[0], value: `${data.assignmentsCreated?.assignments || "0"}` },
          { ...statsConfig[1], value: `${data.avgFeedbackTurnaround || "0"}` },
          { ...statsConfig[2], value: `${data.engagementScores?.score || "0"}` },
          { ...statsConfig[3], value: `${data.engagementScores?.length || "0"}` },
        ]);
        setActivityData(data);
      } catch (err) {
        setStats(statsConfig.map((stat) => ({ ...stat, value: "0" })));
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, [user, token]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <StatCards stats={stats} isLoading={isLoading} />
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold mb-4">Assignment Created By Teachers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData?.assignmentsCreated}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="teacherName" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="assignments" fill="#003A6C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold mb-4">Engagement Score Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={activityData?.engagementScores} cx="50%" cy="50%" labelLine={false} label={({ teacherName, percent }) => `${teacherName} ${(percent * 100).toFixed(0)}%`} outerRadius={80} innerRadius={50} dataKey="score">
                {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="text-sm font-semibold">Individual Teacher Performance</p>
      <table className="bg-white rounded-md">
        <thead>
          <tr className="border-b border-b-gray-200 text-xs text-gray-500">
            <td className="p-2">Teacher</td>
            <td className="p-2">Subject</td>
            <td className="p-2">Assignments Created</td>
            <td className="p-2">AVG Feedback Time</td>
            <td className="p-2">Engagement Score</td>
            <td className="p-2">Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xs border-b border-b-gray-200">
            <td className="p-2">Mary</td>
            <td className="p-2">Mathematics</td>
            <td className="p-2">18</td>
            <td className="p-2">1 day(s)</td>
            <td className="p-2">9.1/10</td>
            <td className="p-2"><p className="flex w-max p-0.5 px-2 bg-green-200 text-green-600 items-center justify-center rounded-md">Excellent</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SchoolTeacherActivityPage;
