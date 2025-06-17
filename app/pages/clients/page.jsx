import React from "react";
import StatCard from "@/app/components/StatCard";
import { LuUsers } from "react-icons/lu";
import { FiUserPlus, FiUser, FiRotateCcw } from "react-icons/fi";
import ClientsT from "@/app/components/ClientsT";

const ClientsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <StatCard name="Total Clients" icon={LuUsers} value="1,536" />
          <StatCard name="New Users" icon={FiUserPlus} value="36" />
          <StatCard name="Active Clients" icon={FiUser} value="836" />
          <StatCard name="Lost Clients" icon={FiRotateCcw} value="6" />
        </div>

        <ClientsT/>
        
      </main>
    </div>
  );
};

export default ClientsPage;
