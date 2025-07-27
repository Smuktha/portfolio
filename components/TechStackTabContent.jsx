"use client";

import { useState } from "react";
import TechModal from "./TechModal";

const tech = [
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "Tailwind", "MongoDB", "Node.js", "Git", "Vercel"
];

export default function TechStackTabContent() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4 justify-center">
        {tech.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelectedTech(t)}
            className="px-4 py-2 bg-[#101014] border border-[#2A2A2A] rounded-full text-sm text-subtleText hover:scale-105 transition"
          >
            {t}
          </button>
        ))}
      </div>

      <TechModal techName={selectedTech} onClose={() => setSelectedTech(null)} />
    </div>
  );
}
