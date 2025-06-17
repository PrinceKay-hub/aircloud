"use client";

import React from "react";
import DashboardLayout from "@/app/pages/layout";
import { redirect } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default  function Dashboard() {
    const router = useRouter();

    const navigateToCreate = () => {
      router.push("/pages/projects/add");
    };

  return (
      <div>
        <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 ">
          <div 
          className="w-[250px] h-[200px] bg-blue-200 rounded-lg flex justify-center items-center cursor-pointer"
          title="New project"
          onClick={navigateToCreate}
          >
            <div className="w-[80px] h-[80px] bg-blue-600 rounded-full flex justify-center items-center">
              <FiPlus className="w-[40px] h-[40px]" />
            </div>
          </div>
          <h1 className="text-gray-900">
            Create a project
          </h1>
        </div>
      </div>
      </div>
    );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
