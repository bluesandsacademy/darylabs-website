"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Users,
  School,
  FlaskConical,
  Wallet,
  GraduationCap,
  Clock,
  ClipboardList,
  TestTube,
  UserCircle2,
  UserX,
  User,
  Home,
  Building2,
  Settings,
  LifeBuoy,
  BarChart3,
  CreditCard,
  FileText,
  TrendingUp,
  Search,
  Globe,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

// ==========================================
// LOADING SCREEN COMPONENT
// ==========================================
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <FlaskConical className="w-12 h-12 text-blue-600" />
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-white mb-2"
        >
          DARY LABS
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-blue-200 text-lg"
        >
          Loading Dashboard...
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.7 }}
          className="h-1 bg-white/30 rounded-full mx-auto mt-8 overflow-hidden"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ==========================================
// METRIC CARD COMPONENT
// ==========================================
const MetricCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconBg,
  trend = "up",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-500 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{value}</h3>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-medium">
              {change}
            </span>
          </div>
        </div>
        <div
          className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// SIDEBAR COMPONENT
// ==========================================
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  const menuItems = [
    { icon: Home, label: "Overview", active: true },
    { icon: Building2, label: "School Management" },
    { icon: Users, label: "User Management" },
    { icon: FlaskConical, label: "Experiment & Content" },
    { icon: CreditCard, label: "Payment & Finance" },
    { icon: FileText, label: "Reports & Analytics" },
    { icon: BarChart3, label: "Leaderboard (Global)" },
  ];

  const bottomItems = [
    { icon: Settings, label: "System Settings" },
    { icon: LifeBuoy, label: "Customer Support" },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Dary Labs Logo"
            width={180}
            height={180}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeItem === item.label
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-gray-200 p-3 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Live Chat Button */}
      <div className="p-3">
        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-1">
            <LifeBuoy className="w-5 h-5" />
            <span className="font-semibold">Live Chat</span>
          </div>
          <p className="text-xs text-blue-100">Please check our AI/MA!</p>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// CHART DATA
// ==========================================
const userGrowthData = [
  { month: "Jan", totalUsers: 50, totalSchools: 30 },
  { month: "Feb", totalUsers: 48, totalSchools: 35 },
  { month: "Mar", totalUsers: 52, totalSchools: 38 },
  { month: "Apr", totalUsers: 60, totalSchools: 42 },
  { month: "May", totalUsers: 68, totalSchools: 45 },
  { month: "Jun", totalUsers: 65, totalSchools: 50 },
];

const revenueData = [
  { month: "Jan", revenue: 13000000 },
  { month: "Feb", revenue: 10000000 },
  { month: "Mar", revenue: 9000000 },
  { month: "Apr", revenue: 12000000 },
  { month: "May", revenue: 9500000 },
  { month: "June", revenue: 11000000 },
  { month: "July", revenue: 10500000 },
  { month: "Aug", revenue: 10000000 },
  { month: "Sep", revenue: 9800000 },
  { month: "Oct", revenue: 11500000 },
  { month: "Nov", revenue: 11000000 },
  { month: "Dec", revenue: 12000000 },
];

const demographicsData = [
  { name: "Male Students", value: 35, color: "#5B8FF9" },
  { name: "Female Students", value: 35, color: "#00C48C" },
  { name: "Others", value: 30, color: "#FFA940" },
];

// ==========================================
// MAIN DASHBOARD COMPONENT
// ==========================================
const DashboardPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Dashboard"
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>

              {/* Language Selector */}
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  English
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">KO</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    Kingsley Okon
                  </p>
                  <p className="text-xs text-gray-500">Account: Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* General Metrics */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              General Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Total Platform Users"
                value="7,200"
                change="8.5% Up from yesterday"
                icon={Users}
                iconBg="bg-gray-900"
              />
              <MetricCard
                title="Total Schools Registered"
                value="320"
                change="8.5% Up from yesterday"
                icon={School}
                iconBg="bg-orange-500"
              />
              <MetricCard
                title="Total Virtual Lab Experiments"
                value="356"
                change="8.5% Up from last month"
                icon={FlaskConical}
                iconBg="bg-blue-600"
              />
              <MetricCard
                title="Total Payment"
                value="₦50M"
                change="8.5% Up from last month"
                icon={Wallet}
                iconBg="bg-purple-600"
              />
            </div>
          </section>

          {/* Learning Metrics */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Learning Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Total STEM Courses"
                value="100"
                change="8.5% Up from yesterday"
                icon={GraduationCap}
                iconBg="bg-teal-400"
              />
              <MetricCard
                title="Total Lab Practice Time"
                value="10,000 hours"
                change="8.5% Up from last month"
                icon={Clock}
                iconBg="bg-purple-600"
              />
              <MetricCard
                title="Total Quiz Scores"
                value="2,500"
                change="8.5% Up from yesterday"
                icon={ClipboardList}
                iconBg="bg-red-600"
              />
              <MetricCard
                title="Total Experiment Attempts"
                value="3,000"
                change="8.5% Up from yesterday"
                icon={TestTube}
                iconBg="bg-pink-500"
              />
            </div>
          </section>

          {/* User Status Overview */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              User Status Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Subscribed Users"
                value="7,200"
                change="8.5% Up from yesterday"
                icon={UserCircle2}
                iconBg="bg-yellow-500"
              />
              <MetricCard
                title="Offline Users"
                value="1,100"
                change="8.5% Up from yesterday"
                icon={UserX}
                iconBg="bg-gray-500"
              />
              <MetricCard
                title="Male Students"
                value="3,600"
                change="8.5% Up from yesterday"
                icon={User}
                iconBg="bg-blue-600"
              />
              <MetricCard
                title="Female Students"
                value="3,600"
                change="8.5% Up from yesterday"
                icon={User}
                iconBg="bg-pink-500"
              />
            </div>
          </section>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* User Growth Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                User Growth
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="totalUsers"
                    stroke="#5B8FF9"
                    strokeWidth={2}
                    dot={{ fill: "#5B8FF9", r: 4 }}
                    name="Total Users"
                  />
                  <Line
                    type="monotone"
                    dataKey="totalSchools"
                    stroke="#2c3e50"
                    strokeWidth={2}
                    dot={{ fill: "#2c3e50", r: 4 }}
                    name="Total Schools"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Demographics Donut Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  User Demographics & Activity
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={demographicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {demographicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-4 mt-4">
                {demographicsData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Revenue Growth
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip
                    formatter={(value) => `₦${(value / 1000000).toFixed(1)}M`}
                  />
                  <Bar dataKey="revenue" fill="#5B8FF9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Country Statistics */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  User Demographics & Activity
                </h3>
                <button className="text-sm text-gray-500 flex items-center gap-1">
                  By Country
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Nigeria</p>
                    <p className="text-lg font-bold text-gray-900">5,400</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ghana</p>
                    <p className="text-lg font-bold text-gray-900">950</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Kenya</p>
                    <p className="text-lg font-bold text-gray-900">520</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">South Africa</p>
                    <p className="text-lg font-bold text-gray-900">5,400</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Nigeria</p>
                    <p className="text-lg font-bold text-gray-900">5,400</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Nigeria</p>
                    <p className="text-lg font-bold text-gray-900">5,400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
