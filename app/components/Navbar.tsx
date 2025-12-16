"use client";

import { FiMenu, FiSearch } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const openSidebar = () => {
    setShowNavbar(false);   // hide navbar immediately
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setShowNavbar(true);
    
    // ⏳ wait for sidebar animation (300ms) before showing navbar
    setTimeout(() => {
      // setShowNavbar(true);
    }, 200);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      {/* Navbar */}

      <div className={`fixed sm:top-3 left-2 sm:left-7 z-[5000] scale-110 ${sidebarOpen ? "opacity-0 duration-200" : "opacity-100 duration-300"} transition-all ease-in-out`}>
        <div className="flex items-center gap-4 px-4 py-3">
          {/* Burger Menu */}
          <button
            onClick={openSidebar}
            className="bg-white text-gray-500 rounded-full p-2 hover:bg-gray-100 hover:scale-120 transition-all duration-100 ease-in-out border border-gray-300 shadow-[0_6px_18px_rgba(0,0,0,0.22)]"
            aria-label="Menu"
          >
            <FiMenu size={19} />
          </button>

          {/* Search Box */}
          <div className="relative h-9 w-[22vw] sm:max-w-[30vw] bg-white rounded-full border border-gray-300 flex items-center hover:scale-105 transition-all duration-100 ease-in-out">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={19}
            />
            <input
              type="text"
              placeholder="Enter kilometer…"
              className="w-full text-black rounded-full py-2 pl-10 pr-4 text-sm outline-none shadow-[0_6px_18px_rgba(0,0,0,0.22)]"
            />
          </div>
        </div>
      </div>

    </>
  );
}
