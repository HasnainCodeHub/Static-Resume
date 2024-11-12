// components/Sidebar.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { profileData } from "../data/data"; // Ensure profileData has details like name, photo, etc.
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icon for menu toggle

const Sidebar: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 right-4 md:hidden z-50"
        onClick={toggleSidebar}
      >
        <FaBars size={30} />
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-primary text-white p-6 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out md:relative md:w-1/4 md:h-auto md:top-auto md:transform-none ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Close button on mobile */}
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={toggleSidebar}
        >
          <FaTimes size={30} />
        </button>

        <div className="text-center mb-6">
          {/* Profile Picture */}
          <div className="mb-4">
            <Image
              src={profileData.photo}
              alt="Profile Photo"
              width={120}
              height={120}
              className="rounded-full border-4 border-accent mx-auto"
            />
          </div>

          {/* Name and Title */}
          <h2 className="text-2xl font-bold">{profileData.name}</h2>
          <p className="text-lg text-gray-200">{profileData.title}</p>

          {/* Short Intro */}
          <p className="text-gray-300 mt-4">{profileData.summary}</p>
        </div>

        {/* Links */}
        <ul className="space-y-4">
          {["education", "experience", "skills", "projects", "contact"].map(
            (section, index) => (
              <li key={index} className="link-item">
                <Link
                  href={`#${section}`}
                  className="text-xl font-semibold hover:text-accent transition-all duration-500 ease-in-out"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <style jsx>{`
        .link-item {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
          animation-delay: 0.2s;
        }

        .link-item:nth-child(2) {
          animation-delay: 0.4s;
        }

        .link-item:nth-child(3) {
          animation-delay: 0.6s;
        }

        .link-item:nth-child(4) {
          animation-delay: 0.8s;
        }

        .link-item:nth-child(5) {
          animation-delay: 1s;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Menu Transitions */
        .mobile-menu-button {
          transition: transform 0.3s ease-in-out;
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
