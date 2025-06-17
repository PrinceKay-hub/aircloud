"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { GiCheckMark } from "react-icons/gi";

const page = () => {
  const router = useRouter();
  const navigateToCreate = () => {
    router.push("/pages/projects/add");
  };

  return (
    <div>
      <div className="sticky top-0 bg-white p-5 text-gray-900 text-2xl font-bold flex gap-3 items-center">
        All Packages
      </div>

      <div className=" mx-4 sm:mx-6 lg:mx-8 mt-4 mb-10 rounded-lg">
        <div>
          <h1 className="text-gray-600 text-md mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2">
            Choose from a pricing plan or custom package suited for professional
            broadcasting and video hosting
          </h1>

          {/*Live Streaming */}
          <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6">
              <div>
                <h1 className="text-gray-900 text-2xl font-bold mb-5">
                  Live Streaming
                </h1>
                <div className="grid grid-cols-3 gap-4">
                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">
                        Basic
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        Business & organizational video Billed Annually
                      </p>
                    </div>

                    {/* Features List */}
                    <div className=" px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />6 hours per
                          day
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          RTMP Streaming
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Live Stream analytics & monitoring
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Live Stream analytics & monitoring
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Full 1080p HD Broadcasting
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Live transcoding channels
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Browser based
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          $850
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Plan
                      </button>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">Core</h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        One time or occasional events Billed Annually
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          12 hours per day
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Browser based
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Unlimited Concurrent viewers
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          RTMP Streaming
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Live Stream analytics & monitoring
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Live transcoding channels
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Video Hosting (VOD)
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Full 1080p HD Broadcasting
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          $1,050
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Plan
                      </button>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">
                        Enterprise
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        Business & organizational video Billed Annually
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          24/7 Streaming
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Browser based
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Mobile app streaming
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Unlimited Concurrent viewers
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          RTMP and HLS channels
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Live Stream analytics & monitoring
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Video Hosting (VOD)
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Full 1080p HD Broadcasting
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Added Support
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          $1,499
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*Video call*/}
          <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6">
              <div>
                <h1 className="text-gray-900 text-2xl font-bold mb-5">
                  Video Call
                </h1>

                <div className="grid grid-cols-3 gap-4">

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">Trial</h1>
                      <p className="mt-2 text-gray-600 font-bold text-xl">
                        14 days trial
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Direct Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Group Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Call Invitation
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Multi-device
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Screen sharing
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          FREE
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Trial
                      </button>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">
                        Enterprise
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        Business & organizational video Billed Annually
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Direct Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Group Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Call Invitation
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Multi-device
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Screen sharing
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          $1,980
                        </span>
                        <p className="text-gray-400">$165/month</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*Voice call*/}
          <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6">
              <div>
                <h1 className="text-gray-900 text-2xl font-bold mb-5">
                  Voice Call
                </h1>

                <div className="grid grid-cols-3 gap-4">

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">Trial</h1>
                      <p className="mt-2 text-gray-600 font-bold text-xl">
                        14 days trial
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Direct Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Group Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Call Invitation
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Multi-device
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Screen sharing
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          FREE
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Trial
                      </button>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">
                        Enterprise
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        Business & organizational video Billed Annually
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Direct Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Group Call
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Call Invitation
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Multi-device
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Screen sharing
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          $1,020
                        </span>
                        <p className="text-gray-400">$85/month</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


            {/*In-app Chat*/}
          <div className="bg-white shadow-md  mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6">
              <div>
                <h1 className="text-gray-900 text-2xl font-bold mb-5">
                  In-app Chat
                </h1>

                <div className="grid grid-cols-3 gap-4">

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">Trial</h1>
                      <p className="mt-2 text-gray-600 font-bold text-xl">
                        14 days trial
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Read receipt
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Push notification
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Offline message
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          User invitation
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Rich media attachment
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Message history
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Unread message count
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Group chat
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          FREE
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Trial
                      </button>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold text-gray-800">
                        Enterprise
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        Business & organizational video Billed Annually
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="px-6 py-4 border-t border-b border-gray-200">
                      <ul className="text-gray-600 mb-7">
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Read receipt
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Push notification
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Offline message
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          User invitation
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Rich media attachment
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Message history
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Unread message count
                        </li>
                        <li className="flex gap-2 items-center m-3">
                          <GiCheckMark className="text-blue-600" />
                          Group chat
                        </li>
                      </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="p-3 text-center">
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          $1,380
                        </span>
                        <p className="text-gray-400">$115/month</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
                        Start Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
