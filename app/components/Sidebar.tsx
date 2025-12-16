"use client";

import { FiX, FiMap, FiSearch, FiSettings } from "react-icons/fi";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[40000]"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-[50000]
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-lg text-gray-800">Menu</h2>
          <button onClick={onClose}>
            <FiX className="text-black" size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4 flex flex-col gap-3 text-gray-700">

          <button className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
            <FiSettings /> Settings
          </button>
        </div>
      </div>
    </>
  );
}
