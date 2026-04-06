"use client";

import StatCards from "@/components/Dashboard/StatCards";
import { getSchoolAdminPerformance } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const COLORS = ["#00B69B", "#CC0000"];
const pieChartData = [{ name: "pass", value: 231 }, { name: "fail", value: 175 }];

const SchoolPerformanceAnalyticsPage = () => {
  const [stats, setStats] = useState([]);
  const [performanceData, setPerformanceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, token } = useUser();

  const statsConfig = [
    { title: "Overall Average Score", value: "0", icon: "/images/icon/active_teacher.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Total Students", value: "0", icon: "/images/icon/student_dark.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Pass Rates", value: "0%", icon: "/images/icon/total_payments.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
    { title: "Subjects Tracked", value: "0", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  ];

  useEffect(() => {
    if (!user || !token) return;
    async function fetchStats() {
      setIsLoading(true);
      try {
        const data = await getSchoolAdminPerformance(token);
        setStats([
          { ...statsConfig[0], value: `${data.overallAverageScore}` },
          { ...statsConfig[1] },
          { ...statsConfig[2], value: `${data.passRatePercent}` },
          { ...statsConfig[3] },
        ]);
        setPerformanceData(data);
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
          <h3 className="text-sm font-semibold mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData?.subjectTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="average" stroke="#0483E2" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="samples" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold mb-4">Pass vs Fail Rates</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieChartData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} innerRadius={50} dataKey="value">
                {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="text-sm font-semibold">School-wide Performance Analysis</p>
      <table className="bg-white rounded-md">
        <thead>
          <tr className="border-b border-b-gray-200 text-xs text-gray-500">
            <td className="p-2">Subject</td><td className="p-2">Average Score</td><td className="p-2">Pass Rate</td><td className="p-2">Student</td><td className="p-2">Trend</td><td className="p-2">Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xs border-b border-b-gray-200">
            <td className="p-2">Biology</td><td className="p-2">85.2%</td><td className="p-2">89%</td><td className="p-2">243</td><td className="p-2 text-green-600">Improving</td>
            <td className="p-2"><p className="flex w-max p-0.5 px-2 bg-green-200 text-green-600 items-center justify-center rounded-md">Excellent</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SchoolPerformanceAnalyticsPage;
