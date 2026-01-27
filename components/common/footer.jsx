import React from "react";
import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Partnership", href: "/partnership" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },

    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "https://www.instagram.com/bluesandstemlabs" },
    { name: "Twitter", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Tiktok", href: "#" },
  ];

  const legalLinks = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Licenses", href: "/licenses" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Security Policy", href: "#" },
  ];

  return (
    <footer className="bg-[#1D2939] text-white">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Image
              src="/logo-white.png"
              width={140}
              height={50}
              alt="DaryLabs Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              DaryLabs gives students access to realistic, hands-on Physics,
              Chemistry, and Biology experiments anytime, anywhere,  even
              without internet.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {link.badge && (
                    <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Social</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <h3 className="font-semibold text-base mb-3">Location</h3>
            <div className="flex flex-col gap-2 items-center justify-center">
              {/* LAGOS STATE */}
              <div>
                <h4 className="font-semibold text-sm ">UGANDA</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Plot 29 Hancock Road Ntinda Kampala , Uganda
                </p>
              </div>
              {/* <div>
                <h4 className="font-semibold text-sm ">GHANA</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Greenland Estate, House 10 Ogombo Rd, Subuola Abu St, Lagos
                  Island, Sangotedo 105102, Lagos.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#101828] border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            ©2025 DaryLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
