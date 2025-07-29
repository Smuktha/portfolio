"use client";
import { useState } from "react";
import ProjectsTabContent from "./ProjectsTabContent";
import CertificatesTabContent from "./CertificatesTabContent";
import TechStackTabContent from "./TechStackTabContent";

const tabs = ["Projects", "Certificates", "Tech Stack"];

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex justify-center mb-10 gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none ${
              activeTab === tab
                ? "bg-white text-black shadow-md"
                : "bg-[#1A1A1D] text-white hover:bg-neutral-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {activeTab === "Projects" && <ProjectsTabContent />}
        {activeTab === "Certificates" && <CertificatesTabContent />}
        {activeTab === "Tech Stack" && <TechStackTabContent />}
      </div>
    </div>
  );
}
