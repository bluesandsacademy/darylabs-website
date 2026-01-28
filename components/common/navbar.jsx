"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Simulations", href: "/simulations" },
  { name: "Pricing", href: "/pricing" },
  { name: "Partnership", href: "/partnerships" },

  // {
  //   name: "Insights",
  //   dropdown: [
  //     { name: "Blog", href: "/blog" },
  //     // Future: { name: "Case Studies", href: "/case-studies" },
  //   ],
  // },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDropdown = (name) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  // Measure header height
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Handle outside click and ESC
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };
    const handleEscape = (e) => e.key === "Escape" && closeMenu();

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  return (
    <>
      {/* ======= HEADER ======= */}
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 flex flex-col bg-white"
      >
        {/* --- Top Banner --- */}
        <div className="bg-secondary flex items-center justify-center gap-1.5 py-2 px-3 text-center text-xs sm:text-sm">
          <Link href="/auth/login" className="flex items-center gap-1">
            <p className="text-white font-medium">Sign up to get started now</p>
            <GoArrowRight className="text-white text-sm sm:text-base" />
          </Link>
        </div>

        {/* --- Main Navigation --- */}
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 sm:py-4 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={140}
              height={48}
              alt="DaryLabs Logo"
              className="h-7 sm:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.dropdown ? setOpenDropdown(link.name) : null
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 px-2.5 py-1.5 rounded-md hover:bg-primary/5 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary px-2.5 py-1.5 rounded-md hover:bg-primary/5 transition-all"
                    >
                      {link.name}
                      <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Animated Dropdown */}
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-0 mt-2 bg-white border border-gray-100 rounded-lg shadow-lg w-40 py-2 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link
              href="/auth/login"
              className="px-5 py-2 border-primary text-primary text-sm font-medium rounded-lg  transition-all  hover:shadow-lg"
            >
              Sign in
            </Link>
            <Link
              href="/auth/register"
              className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-1.5 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? (
              <IoClose className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </nav>
      </header>

      {/* ======= MOBILE OVERLAY ======= */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* ======= MOBILE MENU ======= */}
      <div
        ref={mobileMenuRef}
        style={{ top: `${headerHeight}px` }}
        className={`fixed right-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <nav className="flex-1 p-5 space-y-1">
            {navLinks.map((link) =>
              !link.dropdown ? (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <div key={link.name} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="flex justify-between items-center w-full px-4 py-3 text-base font-medium text-foreground hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                  >
                    {link.name}
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-6">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}
          </nav>

          <div className="border-t border-gray-100 p-5 space-y-3">
            <Link
              href="/auth/login"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-3 text-sm font-medium text-foreground border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/auth/register"
              onClick={closeMenu}
              className="block w-full text-center px-5 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
