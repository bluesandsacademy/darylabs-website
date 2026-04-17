import StatCards from "@/components/Dashboard/StatCards";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TeacherReportAttendance = () => {
  const data = [
    { month: "Jan", late: 0, present: 0, absent: 0 },
    { month: "Feb", late: 0, present: 0, absent: 0 },
    { month: "Mar", late: 0, present: 0, absent: 0 },
    { month: "Apr", late: 0, present: 0, absent: 0 },
    { month: "May", late: 0, present: 0, absent: 0 },
    { month: "Jun", late: 0, present: 0, absent: 0 },
    { month: "Jul", late: 0, present: 0, absent: 0 },
    { month: "Aug", late: 0, present: 0, absent: 0 },
    { month: "Sep", late: 0, present: 0, absent: 0 },
    { month: "Oct", late: 0, present: 0, absent: 0 },
    { month: "Nov", late: 0, present: 0, absent: 0 },
    { month: "Dec", late: 0, present: 0, absent: 0 },
  ];

  const statsConfig = [
    {
      title: "Present Today",
      value: "29/32",
      icon: "/images/icon/teacher/person-in-bar.svg",
    },
    {
      title: "Absent Today",
      value: "3",
      icon: "/images/icon/teacher/purple-exc.svg",
    },
    {
      title: "Late Today",
      value: "0",
      icon: "/images/icon/teacher/red-clock.svg",
    },
    {
      title: "Monthly Average",
      value: "0",
      icon: "/images/icon/teacher/monthly-avg.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <StatCards stats={statsConfig} />

      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-gray-600">Attendance Overview</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="late" stackId="a" fill="#006FCC">
            </Bar>
            <Bar dataKey="present" stackId="a" fill="#00B69B">
            </Bar>
            <Bar dataKey="absent" stackId="a" fill="#CC0000">
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeacherReportAttendance;
