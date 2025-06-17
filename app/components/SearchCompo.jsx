"use client";

import { Search } from "lucide-react";
import React from "react";

const SearchCompo = ({onChange}) => {

  return (
    <div className="relative  w-full md:w-auto">
      <input
        type="text"
        placeholder="Search name, email or country"
        onChange={onChange}
        className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full md:w-64
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
    </div>
  );
};

export default SearchCompo;
