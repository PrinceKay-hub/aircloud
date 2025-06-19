"use client";

import React from "react";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import useProjects from "@/app/hooks/useProjects";
import { FaRegTrashAlt } from "react-icons/fa";

const ProjectPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { projects, loading, error } = useProjects();

  const navigateToCreate = () => {
    router.push("/pages/projects/add");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Please log in to view your projects</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p>Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto py-4 px-4 sm:px-6 justify-between sticky top-0 bg-white p-5 text-gray-900 text-2xl font-bold flex gap-3 items-center">
        Project Management
      </div>

      <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
        <div className=" mx-auto py-4 px-4 sm:px-6">
          <div className=" flex items-center justify-between">
            <h1 className="text-gray-900 text-lg font-bold">My Projects</h1>

            <button
              className="bg-blue-600 hover:bg-blue-500 w-[130px] p-2 rounded-lg flex justify-center items-center cursor-pointer"
              title="New project"
              onClick={navigateToCreate}
            >
              <FiPlus className="w-[20px] h-[20px]" />
              Create
            </button>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium text-gray-700">
                No projects found
              </h2>
              <p className="mt-2 text-gray-500">
                Get started by creating your first project
              </p>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-700 mt-6">
              <thead>
                <tr>
                  {[
                    "Project name",
                    "Package",
                    "Price",
                    "Duration",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-3 md:px-6 md:py-3 text-left text-xs font-semibold  bg-gray-100
                              text-gray-700 uppercase tracking-wider hidden md:table-cell border-2 border-gray-200"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-700">
                {projects.map((project) => (
                  <tr
                    key={project._id}
                    className={`flex flex-col md:table-row mb-4 md:mb-0 border-b 
                         border-gray-200 p-2 md:p-0 cursor-pointer hover:bg-gray-200`}
                  >
                    {/*Mobile display of products */}
                    <td className="md:hidden px-3 py-2">
                      <div className="flex items-center justify-between">
                        <div className="mt-2 text-xs text-gray-300">
                          <div className="text-sm font-medium text-gray-100">
                            Name: {project.projectName}
                          </div>
                          <div className="text-sm font-medium text-gray-100">
                            Package: {project.projectName}
                          </div>
                          <div className="text-sm font-medium text-gray-100">
                            Price: {project.projectName}
                          </div>
                          <div className="text-sm font-medium text-gray-100">
                            Duration: {project.projectName}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/*Tablet to Desktop display of products */}
                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      <div className="flex items-center">
                        <div className="ml-4">{project.projectName}</div>
                      </div>
                    </td>

                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {project.package.title}
                    </td>

                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      ${project.package.price.toLocaleString()}
                    </td>

                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {project.package.duration}
                    </td>

                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex space-x-1 ml-2">
                        <button
                          className="text-red-500 hover:text-red-300 cursor-pointer"
                          title="delete"
                        >
                          <FaRegTrashAlt className="w-[18px] h-[18px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
