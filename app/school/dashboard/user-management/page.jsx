"use client";

import StatCards from "@/components/Dashboard/StatCards";
import SchoolFilterButton from "@/components/School/Dashboard/SchoolFilterButton";
import SchoolClassTable from "@/components/School/Dashboard/UserMgt/ClassTable";
import SchoolRolesContainer from "@/components/School/Dashboard/UserMgt/SchoolRolesContainer";
import { AddClassModal, AddRoleModal, AddStudentModal, AddTeacherModal, BulkUploadModal } from "@/components/School/Dashboard/UserMgt/SchoolUserManagementModals";
import SchoolStudentTable from "@/components/School/Dashboard/UserMgt/StudentTable";
import SchoolTeacherTable from "@/components/School/Dashboard/UserMgt/TeacherTable";
import { getSchoolAdminDashboard } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const statsConfig = [
  { title: "Active Students", value: "0", icon: "/images/icon/student_dark.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "Active Teachers", value: "0", icon: "/images/icon/active_teacher.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "New Registrations", value: "0", icon: "/images/icon/clipboard.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
  { title: "New Teachers", value: "0", icon: "/images/icon/card_teacher.svg", trendIcon: "/images/icon/trend_up.svg", percentageChange: "0%", timeFrame: "from last month" },
];

const SchoolUserManagementPage = () => {
  const filters = ["Teachers", "Students", "Classes", "Roles & Permissions"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const { user, token } = useUser();
  const [isBulkUploadOpen, setIsBulkUploadOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    if (!user || !token) return;
    async function fetchStats() {
      setIsLoading(true);
      try {
        const data = await getSchoolAdminDashboard(token);
        setStats([
          { ...statsConfig[0], value: `${data.activity7d.activeUsers}` },
          { ...statsConfig[1], value: `${data.counts.teachers}` },
          { ...statsConfig[2], value: "0" },
          { ...statsConfig[3], value: "0" },
        ]);
      } catch (err) {
        setStats(statsConfig.map((stat) => ({ ...stat, value: "0" })));
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, [user, token]);

  const handleAddClick = () => { setModalType(activeFilter); setIsAddModalOpen(true); };
  const handleCloseModal = () => { setIsAddModalOpen(false); setModalType(""); };

  return (
    <div className="flex flex-col gap-6 mt-4 lg:mt-6 p-2 lg:p-4">
      <StatCards stats={stats} isLoading={isLoading} />
      <SchoolFilterButton filters={filters} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <div className={`p-2 flex rounded-md lg:rounded-lg bg-white ${activeFilter === "Roles & Permissions" ? "justify-end" : "justify-between"}`}>
        <div className={`flex gap-2 items-center bg-gray-100 border border-gray-200 text-xs md:text-sm px-3 rounded-md ${activeFilter === "Roles & Permissions" && "hidden"}`}>
          <IoSearch className="text-gray-400 text-lg" />
          <input type="text" className="bg-gray-100 p-2 outline-none" placeholder={activeFilter === "Teachers" ? "Search Teachers" : activeFilter === "Students" ? "Search Students" : activeFilter === "Classes" ? "Search Classes" : ""} />
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <button onClick={() => setIsBulkUploadOpen(true)} className={`flex gap-1 items-center bg-gray-200 text-blue-950 p-2 rounded-md text-xs lg:text-sm ${activeFilter === "Roles & Permissions" && "hidden"}`}>
            <FiUpload /> bulk upload
          </button>
          <button onClick={handleAddClick} className="flex gap-1 items-center bg-blue-950 text-white p-2 rounded-md text-xs lg:text-sm">
            <FaPlus />
            {activeFilter === "Teachers" ? "Add Teacher" : activeFilter === "Students" ? "Add Student" : activeFilter === "Classes" ? "Add Class" : "Create Role"}
          </button>
        </div>
      </div>

      {activeFilter === "Teachers" ? <SchoolTeacherTable /> : activeFilter === "Students" ? <SchoolStudentTable /> : activeFilter === "Classes" ? <SchoolClassTable /> : activeFilter === "Roles & Permissions" ? <SchoolRolesContainer /> : ""}

      <BulkUploadModal isOpen={isBulkUploadOpen} onClose={() => setIsBulkUploadOpen(false)} userType={activeFilter} />
      {modalType === "Teachers" && <AddTeacherModal isOpen={isAddModalOpen} onClose={handleCloseModal} />}
      {modalType === "Students" && <AddStudentModal isOpen={isAddModalOpen} onClose={handleCloseModal} />}
      {modalType === "Classes" && <AddClassModal isOpen={isAddModalOpen} onClose={handleCloseModal} />}
      {modalType === "Roles & Permissions" && <AddRoleModal isOpen={isAddModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default SchoolUserManagementPage;
