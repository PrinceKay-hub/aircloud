"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "../data/menu";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";
import Image from "next/image";
import LogoutConfirmation from "./LogoutConfirmation";

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);


   const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
  };

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out 
        flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
    >
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md px-4 flex flex-col border-r border-[#2f2f2f]">
        <ul>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Image
            src={"/images/aircloud.png"}
            alt={"aircloud"}
            width={100}
            height={100}
            className="mt-6"
          />
          <nav className="mt-8 flex-grow">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.id}>
                  <Link href={item.href}>
                    <div
                      className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 
                        ${pathname === item.href ? "bg-[#2f2f2f]" : ""}`}
                    >
                      <Icon
                        className={`${item.className} ${
                          isActive ? "scale-110" : ""
                        }`}
                        size={20}
                        style={{ minWidth: "20px" }}
                      />
                      {isSidebarOpen && (
                        <span className="ml-4 whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </nav>
        </ul>

        <button
          onClick={handleLogoutClick}
          className="flex px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors cursor-pointer"
        >
          <LogOut size={20} style={{ minWidth: "20px" }} />
          {isSidebarOpen && (
            <span className="ml-4 whitespace-nowrap">Logout</span>
          )}
        </button>
      </div>
      <LogoutConfirmation 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
};

export default Sidebar;
