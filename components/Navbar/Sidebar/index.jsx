"use client";

import Link from "next/link";
import {
  adminSideNavLinks,
  sidebarLinks,
  sideNavLinks,
  teacherSideNavLinks,
} from "@/lib/data";
import { usePathname } from "next/navigation";
import { HiX } from "react-icons/hi";
import { useUser } from "@/services/UserContext";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { useEffect, useState } from "react";

export default function Sidebar({ isOpen = true, onClose }) {
  const pathname = usePathname();
  const { user, logout } = useUser();
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  function handleLogout() {
    NProgress.start();
    logout();
    router.push("/auth/login");
    NProgress.done();
  }

  if (!loaded) return null;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden min-h-screen fixed inset-0 bg-black/20 backdrop-blur-md z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed inset-y-0 left-0 z-40 md:z-auto
          w-64 h-screen overflow-y-auto max-w-xs md:max-w-5xl
          py-6 md:py-10 px-4 md:px-5
          bg-white shadow-md
          flex flex-col justify-start items-center gap-y-6 md:gap-y-10
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-md"
          onClick={onClose}
        >
          <HiX size={24} />
        </button>

        <div className="w-32 md:w-auto">
          <img src="/logo.png" alt="Darylabs" className="w-full h-auto" />
        </div>

        <div className="flex flex-col gap-y-3 w-full">
          {user?.role === "schoolAdmin" || user?.role === "SchoolAdmin"
            ? sideNavLinks.map((link, index) =>
                link.disabled ? (
                  <span
                    key={index}
                    title="Coming soon"
                    className="flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full opacity-40 cursor-not-allowed text-gray-500 select-none"
                  >
                    <img src={link.icon} alt={link.title} className="w-5 h-5" />
                    {link.title}
                  </span>
                ) : (
                  <Link
                    key={index}
                    href={link.url}
                    className={`flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full ${
                      pathname === link.url ? "bg-blue-950 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={onClose}
                  >
                    <img
                      src={link.icon}
                      alt={link.title}
                      className={`w-5 h-5 ${pathname === link.url ? "filter brightness-0 invert" : ""}`}
                    />
                    {link.title}
                  </Link>
                )
              )
            : user?.role === "globalAdmin" || user?.role === "GlobalAdmin"
            ? adminSideNavLinks.map((link, index) =>
                link.disabled ? (
                  <span
                    key={index}
                    title="Coming soon"
                    className="flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full opacity-40 cursor-not-allowed text-gray-500 select-none"
                  >
                    <img src={link.icon} alt={link.title} className="w-5 h-5" />
                    {link.title}
                  </span>
                ) : (
                  <Link
                    key={index}
                    href={link.url}
                    className={`flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full ${
                      pathname === link.url ? "bg-[#006fcc] text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={onClose}
                  >
                    <img
                      src={link.icon}
                      alt={link.title}
                      className={`w-5 h-5 ${
                        pathname === link.url
                          ? "filter brightness-0 invert"
                          : index === 0
                          ? "filter brightness-0"
                          : ""
                      }`}
                    />
                    {link.title}
                  </Link>
                )
              )
            : user?.role === "teacher" || user?.role === "Teacher"
            ? teacherSideNavLinks.map((link, index) =>
                link.disabled ? (
                  <span
                    key={index}
                    title="Coming soon"
                    className="flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full opacity-40 cursor-not-allowed text-gray-500 select-none"
                  >
                    <img src={link.icon} alt={link.title} className="w-5 h-5" />
                    {link.title}
                  </span>
                ) : (
                  <Link
                    key={index}
                    href={link.url}
                    className={`flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full ${
                      pathname === link.url ? "bg-[#303C48] text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={onClose}
                  >
                    <img
                      src={link.icon}
                      alt={link.title}
                      className={`w-5 h-5 ${
                        pathname === link.url
                          ? "filter brightness-0 invert"
                          : index === 0
                          ? "filter brightness-0"
                          : ""
                      }`}
                    />
                    {link.title}
                  </Link>
                )
              )
            : sidebarLinks.map((link, index) =>
                link.disabled ? (
                  <span
                    key={index}
                    title="Coming soon"
                    className="flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full opacity-40 cursor-not-allowed text-gray-500 select-none"
                  >
                    <img src={link.icon} alt={link.title} className="w-5 h-5" />
                    {link.title}
                  </span>
                ) : (
                  <Link
                    key={index}
                    href={link.url}
                    className={`flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full ${
                      pathname === link.url ? "bg-[#006fcc] text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={onClose}
                  >
                    <img
                      src={link.icon}
                      alt={link.title}
                      className={`w-5 h-5 ${pathname === link.url ? "filter brightness-0 invert" : index === 0 ? "filter brightness-0" : ""}`}
                    />
                    {link.title}
                  </Link>
                )
              )}

          <hr className="my-2" />

          {user?.role === "schoolAdmin" || user?.role === "SchoolAdmin" || user?.role === "globalAdmin" || user?.role === "GlobalAdmin" ? (
            <Link
              href={
                user?.role === "schoolAdmin" || user?.role === "SchoolAdmin"
                  ? "/school/dashboard/contact-support"
                  : "/admin/dashboard/customer-support"
              }
              className={`flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full ${
                pathname === "/school/dashboard/contact-support" ? "bg-blue-950 text-white"
                : pathname === "/admin/dashboard/customer-support" ? "bg-[#006fcc] text-white"
                : ""
              }`}
            >
              <img
                src="/images/icon/ic_sharp-support-agent.svg"
                alt="support-agent"
                className={`w-5 h-5 ${
                  pathname === "/school/dashboard/contact-support" ||
                  pathname === "/admin/dashboard/customer-support"
                    ? "filter brightness-0 invert"
                    : ""
                }`}
              />
              <p>
                {user?.role === "schoolAdmin" || user?.role === "SchoolAdmin"
                  ? "Contact Support"
                  : "Customer Support"}
              </p>
            </Link>
          ) : (
            <span
              title="Coming soon"
              className="flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-2 rounded-md w-full opacity-40 cursor-not-allowed text-gray-500 select-none"
            >
              <img
                src="/images/icon/ic_sharp-support-agent.svg"
                alt="support-agent"
                className="w-5 h-5"
              />
              <p>Admin Support</p>
            </span>
          )}

          <button
            className="flex items-center text-sm md:text-[0.85rem] gap-x-3 px-3 py-3 rounded-md w-full"
            onClick={handleLogout}
          >
            <img src="/images/icon/logout.svg" alt="Logout" className="w-5 h-5" />
            <p>Logout</p>
          </button>
        </div>

        <div className="mt-6 md:mt-10">
          <Link href="#">
            <img src="/images/bg/amai.svg" alt="" className="w-24 md:w-auto h-auto" />
          </Link>
        </div>
      </nav>
    </>
  );
}
