"use client";
import { useState } from "react";
import ProjectsTabContent from "./ProjectsTabContent";
import CertificatesTabContent from "./CertificatesTabContent";
import TechStackTabContent from "./TechStackTabContent";

const tabs = ["Projects", "Certificates", "Tech Stack"];

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex justify-center mb-10 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
              activeTab === tab
                ? "bg-white text-black"
                : "bg-[#1A1A1D] text-white hover:bg-neutral-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Projects" && <ProjectsTabContent />}
        {activeTab === "Certificates" && <CertificatesTabContent />}
        {activeTab === "Tech Stack" && <TechStackTabContent />}
      </div>
    </div>
  );
}
