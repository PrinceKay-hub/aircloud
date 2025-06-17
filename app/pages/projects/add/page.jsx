"use client";

import React, { useState, useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/navigation";
import { packages } from "@/app/data/package";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "@/app/context/AuthContext";

const NewProject = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const [projectName, setProjectName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();


  const navigateBack = () => {
    router.push("/pages/projects");
  };

  {/**
     const handleSubmit  = async () => {
    if (!selectedOption) {
      toast.error("Please select a package");
      return;
    }

    if (!projectName.trim()) {
      toast.error("Please enter a project name");
      return;
    }

    if (!user) {
      toast.error("User not authenticated");
      return;
    }

    setIsSubmitting(true);

    try {
      // Find the selected package
      const selectedPackage = packages.find(
        (pkg) => pkg.title === selectedOption
      );

      if (!selectedPackage) {
        throw new Error("Selected package not found");
      }

      // Create project data
      const projectData = {
        userId: user._id,
        projectName: projectName.trim(),
        package: {
          title: selectedPackage.title,
          description: selectedPackage.description,
          price: selectedPackage.price,
          duration: selectedPackage.duration,
        },
        createdAt: new Date(),
      };

      const response = await fetch(`/api/users/${user.id}/packages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const data = await response.json();

      toast.success("Project created successfully!");

      setTimeout(() => {
        router.push("/pages/projects");
      }, 3000);
    } catch (err) {
      console.error("Purchase error:", err);
      toast.error(err.message || "Failed to create project");
    } finally {
      setIsSubmitting(false);
    }
  };
    
    */}
 

  const handleSubmit = async () => {
    if (!selectedOption) {
      toast.error("Please select a package");
      return;
    }
    
    if (!projectName.trim()) {
      toast.error("Please enter a project name");
      return;
    }
    
    if (!user.id) {
      toast.error("User not authenticated");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Find the selected package
      const selectedPackage = packages.find(pkg => pkg.title === selectedOption);
      
      if (!selectedPackage) {
        throw new Error("Selected package not found");
      }
      
      // Create project data
      const projectData = {
        userId: user.id,
        projectName: projectName.trim(),
        package: {
          title: selectedPackage.title,
          description: selectedPackage.description,
          price: selectedPackage.price,
          duration: selectedPackage.duration
        },
        createdAt: new Date(),
      };
      
      // Send to API route
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to create project");
      }
      
      const data = await response.json();
      
      toast.success("Project created successfully!");
      
      // Redirect to projects page after a short delay
      setTimeout(() => {
        router.push("/pages/projects");
      }, 1500);
      
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error(error.message || "Failed to create project");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="sticky top-0 bg-white p-5 text-gray-900 text-2xl font-bold flex gap-3 items-center">
        <button
          className="hover:bg-gray-200 p-1 rounded-md cursor-pointer"
          onClick={navigateBack}
        >
          <MdKeyboardBackspace />
        </button>
        Project Configuraton
      </div>

      <h1 className="text-gray-900 text-2xl mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2">
        Create your app project
      </h1>

      <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6">
          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] bg-blue-600 rounded-full flex justify-center items-center text-xl font-bold">
              1
            </div>
            <h1 className="text-blue-600 text-2xl">
              Select a use case for your app
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((item) => (
              <div
                className={`h-full border-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer p-3 mt-2 ${
                    selectedOption === item.title
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                key={item.id}
              >
                 {/* Custom selection indicator */}
                  <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="package-option"
                              value={item.title}
                              checked={selectedOption === item.title}
                              onChange={(e) => setSelectedOption(e.target.value)}
                              className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
                            />
                            {item.title}
                          </label>
                        </h3>
                      </div>

                <div className={`h-[170px] w-full relative rounded-lg mt-2`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={170}
                    priority
                  />
                </div>

                <div className="text-gray-900 text-sm mt-3">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-lg mb-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6">
          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] bg-blue-600 rounded-full flex justify-center items-center text-xl font-bold">
              2
            </div>
            <h1 className="text-blue-600 text-2xl">Add a project name</h1>
          </div>

          <div>
            <h1 className="text-gray-900 font-black text-sm mt-4 mb-2">
              Project name
            </h1>
            <form onSubmit={handleSubmit}>
              <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Name your app project here"
              className="bg-gray-100 text-gray-900 placeholder-gray-400 rounded-md px-4 pr-4 py-2 w-full md:w-64
                            focus:outline-none ring-1 ring-gray-300 focus:ring-1 focus:ring-blue-500 transition duration-200 text-sm"
            />
            </form>
          </div>

          <div className="flex justify-center mt-8 mb-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white w-full max-w-xs ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Creating Project..." : "Create Project"}
                
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
