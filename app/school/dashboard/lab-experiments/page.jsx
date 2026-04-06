"use client";

import StatCards from "@/components/Dashboard/StatCards";
import { getSchoolAdminExperiments } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const statsConfig = [
  { title: "Total Experiment", value: "0", icon: "/images/icon/beaker_01.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Average Completion Rate", value: "0%", icon: "/images/icon/chart.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Resource Usage", value: "0%", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Active Users", value: "1", icon: "/images/icon/calendar.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
];

const COLORS = ["#003A6C", "#00B69B"];
const lineChartData = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => ({ month: m, loginCount: 0 }));
const pieChartData = [{ name: "remaining", value: 0 }, { name: "completed", value: 0 }];

const SchoolLabPage = () => {
  const [stats, setStats] = useState([]);
  const [experimentData, setExperimentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, token } = useUser();

  useEffect(() => {
    if (!user || !token) return;
    async function fetchStats() {
      setIsLoading(true);
      try {
        const data = await getSchoolAdminExperiments(token);
        setStats([
          { ...statsConfig[0], value: `${data.experimentsTotal}` },
          { ...statsConfig[1], value: `${data.completionRates?.completionPercent || "0"}` },
          { ...statsConfig[2], value: `${data.resourceUsagePercent}` },
          { ...statsConfig[3], value: `${data.completionRates?.participants || "0"}` },
        ]);
        setExperimentData(data);
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
      <div className="flex-1 bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-semibold mb-4">Course / Module Popularity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={experimentData?.coursePopularity}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="courseOrModule" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="loginCount" stroke="#003A6C" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold mb-4">Experiments Completion Rate</h3>
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
    </div>
  );
};

export default SchoolLabPage;
