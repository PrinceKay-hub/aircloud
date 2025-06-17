"use client";

import React from "react";
import { VscAccount } from "react-icons/vsc";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
      <div className="bg-white shadow-md   mb-2 ">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <VscAccount className="cursor-pointer w-[25px] h-[25px] text-gray-900" />
              <span className="hidden sm:block text-gray-900 font-bold">
                Welcome {user.name}
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
