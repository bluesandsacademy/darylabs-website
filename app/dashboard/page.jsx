"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/providers/auth-provider";
import { useLogout } from "@/hooks/use-logout";

// ==========================================
// SHIMMER SKELETON COMPONENTS
// ==========================================
const Shimmer = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
);

const MetricCardSkeleton = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex-1 space-y-3">
        <Shimmer className="h-4 w-2/3" />
        <Shimmer className="h-7 w-1/2" />
        <Shimmer className="h-3 w-3/4" />
      </div>
      <Shimmer className="w-12 h-12 rounded-xl flex-shrink-0" />
    </div>
  </div>
);

const ChartSkeleton = ({ className = "" }) => (
  <div className={`bg-white rounded-xl p-6 shadow-sm ${className}`}>
    <Shimmer className="h-5 w-40 mb-6" />
    <Shimmer className="h-[300px] w-full rounded-xl" />
  </div>
);

const DashboardSkeleton = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="hidden lg:flex w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 flex-col">
      <div className="p-6 border-b border-gray-200">
        <Shimmer className="h-8 w-36" />
      </div>
      <div className="flex-1 py-4 px-3 space-y-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Shimmer key={i} className="h-11 w-full rounded-lg" />
        ))}
      </div>
      <div className="p-3 border-t border-gray-200 space-y-2">
        <Shimmer className="h-11 w-full rounded-lg" />
        <Shimmer className="h-11 w-full rounded-lg" />
      </div>
      <div className="p-3">
        <Shimmer className="h-20 w-full rounded-xl" />
      </div>
    </div>
    <div className="lg:ml-64">
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shimmer className="h-8 w-8 rounded-lg lg:hidden" />
          <Shimmer className="h-7 w-40 md:w-52" />
        </div>
        <div className="flex items-center gap-3">
          <Shimmer className="hidden md:block h-9 w-48 lg:w-64 rounded-lg" />
          <Shimmer className="hidden lg:block h-9 w-28 rounded-lg" />
          <Shimmer className="w-10 h-10 rounded-full" />
        </div>
      </div>
      <main className="p-4 md:p-8 space-y-8">
        {Array.from({ length: 3 }).map((_, s) => (
          <section key={s}>
            <Shimmer className="h-5 w-40 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <MetricCardSkeleton key={i} />
              ))}
            </div>
          </section>
        ))}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <ChartSkeleton className="lg:col-span-2" />
          <ChartSkeleton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <ChartSkeleton className="lg:col-span-2" />
          <ChartSkeleton />
        </div>
      </main>
    </div>
  </div>
);

// ==========================================
// METRIC CARD COMPONENT
// ==========================================
const MetricCard = ({ title, value, change, icon: Icon, iconBg }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-start justify-between">
      <div className="flex-1 min-w-0">
        <p className="text-gray-500 text-xs md:text-sm font-medium mb-2 truncate">{title}</p>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{value}</h3>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <span className="text-emerald-500 text-xs md:text-sm font-medium">{change}</span>
        </div>
      </div>
      <div className={`w-10 h-10 md:w-12 md:h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0 ml-3`}>
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
    </div>
  </motion.div>
);

// ==========================================
// SIDEBAR COMPONENT
// ==========================================
const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("Overview");

  const menuItems = [
    { icon: Home, label: "Overview" },
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
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-30 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo + mobile close */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          <Image src="/logo.png" alt="Dary Labs Logo" width={140} height={40} className="rounded-lg" priority />
          <button onClick={onClose} className="lg:hidden p-1 text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { setActiveItem(item.label); onClose(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeItem === item.label
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
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
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Live Chat */}
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
    </>
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
  const { user, isLoading } = useAuth();
  const { logout } = useLogout();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const initials = user?.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Left: hamburger + title */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition flex-shrink-0"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900 truncate">
                Dashboard Overview
              </h1>
            </div>

            {/* Right: search + lang + user */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
              {/* Search — hidden on mobile */}
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Dashboard"
                  className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-44 lg:w-64"
                />
              </div>

              {/* Language — hidden on tablet and below */}
              <button className="hidden lg:flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-700">English</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {/* User profile */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xs md:text-sm">{initials}</span>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {user?.fullName || "User"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Account: {user?.role || "—"}
                  </p>
                </div>
                <button
                  onClick={logout}
                  title="Logout"
                  className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-8">
          {/* General Metrics */}
          <section className="mb-6 md:mb-8">
            <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              General Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <MetricCard title="Total Platform Users" value="7,200" change="8.5% Up from yesterday" icon={Users} iconBg="bg-gray-900" />
              <MetricCard title="Total Schools Registered" value="320" change="8.5% Up from yesterday" icon={School} iconBg="bg-orange-500" />
              <MetricCard title="Total Virtual Lab Experiments" value="356" change="8.5% Up from last month" icon={FlaskConical} iconBg="bg-blue-600" />
              <MetricCard title="Total Payment" value="₦50M" change="8.5% Up from last month" icon={Wallet} iconBg="bg-purple-600" />
            </div>
          </section>

          {/* Learning Metrics */}
          <section className="mb-6 md:mb-8">
            <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Learning Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <MetricCard title="Total STEM Courses" value="100" change="8.5% Up from yesterday" icon={GraduationCap} iconBg="bg-teal-400" />
              <MetricCard title="Total Lab Practice Time" value="10,000 hours" change="8.5% Up from last month" icon={Clock} iconBg="bg-purple-600" />
              <MetricCard title="Total Quiz Scores" value="2,500" change="8.5% Up from yesterday" icon={ClipboardList} iconBg="bg-red-600" />
              <MetricCard title="Total Experiment Attempts" value="3,000" change="8.5% Up from yesterday" icon={TestTube} iconBg="bg-pink-500" />
            </div>
          </section>

          {/* User Status Overview */}
          <section className="mb-6 md:mb-8">
            <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              User Status Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <MetricCard title="Subscribed Users" value="7,200" change="8.5% Up from yesterday" icon={UserCircle2} iconBg="bg-yellow-500" />
              <MetricCard title="Offline Users" value="1,100" change="8.5% Up from yesterday" icon={UserX} iconBg="bg-gray-500" />
              <MetricCard title="Male Students" value="3,600" change="8.5% Up from yesterday" icon={User} iconBg="bg-blue-600" />
              <MetricCard title="Female Students" value="3,600" change="8.5% Up from yesterday" icon={User} iconBg="bg-pink-500" />
            </div>
          </section>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">User Growth</h3>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#999" tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="totalUsers" stroke="#5B8FF9" strokeWidth={2} dot={{ fill: "#5B8FF9", r: 4 }} name="Total Users" />
                  <Line type="monotone" dataKey="totalSchools" stroke="#2c3e50" strokeWidth={2} dot={{ fill: "#2c3e50", r: 4 }} name="Total Schools" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">User Demographics</h3>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={demographicsData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={2} dataKey="value">
                    {demographicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-3">
                {demographicsData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Revenue Growth</h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#999" tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(value) => `₦${(value / 1000000).toFixed(1)}M`} />
                  <Bar dataKey="revenue" fill="#5B8FF9" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">By Country</h3>
                <button className="text-sm text-gray-500 flex items-center gap-1">
                  Filter <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { country: "Nigeria", value: "5,400" },
                  { country: "Ghana", value: "950" },
                  { country: "Kenya", value: "520" },
                  { country: "South Africa", value: "5,400" },
                  { country: "Ethiopia", value: "330" },
                  { country: "Tanzania", value: "210" },
                ].map(({ country, value }) => (
                  <div key={country} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">{country}</p>
                    <p className="text-sm font-bold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
