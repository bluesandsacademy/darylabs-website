"use client";

import StatCards from "@/components/Dashboard/StatCards";
import TeacherWelcomeBanner from "@/components/Teacher/TeacherWelcomeBanner";
import { useUser } from "@/services/UserContext";
import {
  ResponsiveContainer, LineChart, CartesianGrid,
  XAxis, YAxis, Tooltip, Legend, Line,
} from "recharts";

const statsConfig = [
  { title: "Total Students", value: "0", icon: "/images/icon/teacher/students.svg", percentageChange: " ", timeFrame: "across all classes" },
  { title: "Average Score", value: "0", icon: "/images/icon/teacher/avg-score.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Lab Completion", value: "0", icon: "/images/icon/teacher/purple-lab.svg", percentageChange: " ", timeFrame: "average rate" },
  { title: "Quiz Average", value: "0", icon: "/images/icon/teacher/orange-quiz.svg", percentageChange: " ", timeFrame: "All classes" },
  { title: "Active Students", value: "0", icon: "/images/icon/teacher/active-students.svg", percentageChange: " ", timeFrame: "out of total enrolled" },
  { title: "Most Attempted Lab", value: "Lab", icon: "/images/icon/teacher/physics.svg", percentageChange: " ", timeFrame: "0 attempts" },
];

const lineChartData = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
].map((month) => ({ month, average: 0 }));

function getTeacherFirstName(fullName) {
  if (!fullName) return "";
  if (fullName.startsWith("Mr") || fullName.startsWith("Ms") || fullName.startsWith("Mrs") || fullName.startsWith("Miss")) {
    return fullName.split(" ")[1];
  }
  return fullName.split(" ")[0];
}

export default function TeacherDashboardOverviewPage() {
  const { user } = useUser();
  const firstName = getTeacherFirstName(user?.fullName);

  return (
    <div className="p-4 space-y-4">
      <TeacherWelcomeBanner firstName={firstName || ""} />
      <StatCards stats={statsConfig} />

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="average" stroke="#003A6C" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:justify-between">
        <div className="flex flex-col gap-3 bg-white rounded-md p-3 w-full md:w-96">
          <p className="text-blue-950 text-sm lg:text-base font-semibold">Recent Activities</p>
        </div>
        <div className="flex flex-col p-2 gap-4 w-full md:w-96 rounded-lg bg-white">
          <strong className="text-sm md:text-base text-gray-500">Top Performing Students</strong>
        </div>
        <div className="flex flex-col p-2 gap-4 w-full md:w-96 rounded-lg bg-white">
          <strong className="text-sm md:text-base text-gray-500">Struggling Students</strong>
        </div>
      </div>
    </div>
  );
}
