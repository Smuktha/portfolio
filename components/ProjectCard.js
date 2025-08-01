"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform relative group"
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

        {/* Links (Prevent modal trigger on click) */}
        <div
          className="flex gap-4 mt-3"
          onClick={(e) => e.stopPropagation()} // stops modal from opening
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-green-500 hover:underline"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
