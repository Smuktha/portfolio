"use client";
import Image from "next/image";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
