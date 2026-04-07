"use client";

import { format } from "date-fns";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SchoolWideTrend() {
  const [quizData] = useState([]);

  const monthlyScores = {};
  quizData.forEach(({ date, score }) => {
    const month = format(new Date(date), "MMM");
    if (!monthlyScores[month]) monthlyScores[month] = [];
    monthlyScores[month].push(score);
  });

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const chartData = months.map((month) => {
    const scores = monthlyScores[month] || [];
    const avg = scores.length ? Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length) : 0;
    return { name: month, value: avg };
  });

  return (
    <div className="w-full h-[280px] md:h-[320px] lg:h-[300px] col-span-1 md:col-span-2 xl:col-span-3 bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-sm lg:text-base font-semibold text-blue-950 mb-1">School-wide Performance Trends</h2>
        <span className="text-sm text-green-500 font-medium">(+5) more in 2021</span>
      </div>
      <div className="h-[200px] md:h-[240px] lg:h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
            <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
            <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", fontSize: "14px" }} />
            <Legend wrapperStyle={{ paddingTop: "10px", fontSize: 12 }} />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
