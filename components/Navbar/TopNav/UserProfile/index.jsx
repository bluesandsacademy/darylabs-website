"use client";

import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { profileDropdown, schoolProfileDropdown, teacherProfileDropdown } from "@/lib/data";
import { useUser } from "@/services/UserContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NProgress from "nprogress";
import Image from "next/image";

export default function UserProfile() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { user, logout } = useUser();
  const router = useRouter();

  function handleLogout() {
    NProgress.start();
    logout();
    setOpenDropdown(false);
    router.push("/auth/login");
    NProgress.done();
  }

  const dropdownLinks =
    user?.role === "teacher" || user?.role === "Teacher"
      ? teacherProfileDropdown
      : user?.role === "schoolAdmin" || user?.role === "SchoolAdmin"
      ? schoolProfileDropdown
      : profileDropdown;

  return (
    <div className="relative">
      {openDropdown && (
        <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(false)} />
      )}
      <button
        className="flex items-center gap-x-2 lg:gap-x-5"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {user?.avatarUrl ? (
          <Image
            src={user.avatarUrl}
            alt="avatar"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
        ) : (
          <Image
            src="/images/avatar/user01.png"
            alt="avatar"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
        )}
        <div className="hidden text-left lg:block">
          <h4 className="truncate text-sm lg:text-base">{user?.fullName}</h4>
          <p className="text-gray-400 font-medium text-xs lg:text-sm">
            Account: {user?.role}
          </p>
        </div>
        <RxCaretDown
          size={15}
          className="hidden md:block rounded-full border h-6 w-6 object-contain"
        />
      </button>

      {openDropdown && (
        <div className="absolute top-16 right-0 bg-white rounded-lg w-52 text-left space-y-3 shadow-md border py-3 z-50">
          {dropdownLinks.map((link, index) => (
            <Link href={link.url} key={index} onClick={() => setOpenDropdown(false)}>
              <span className="px-3 flex items-center gap-x-3">
                <img src={link.imgSrc} alt="" />
                {link.title}
              </span>
              <div className="border-t border-gray-200 my-2"></div>
            </Link>
          ))}
          <div className="w-full hover:cursor-pointer" onClick={handleLogout}>
            <span className="px-3 flex items-center gap-x-3">
              <img src="/images/icon/logout_red.svg" alt="" />
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
