"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4 sm:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white max-w-xl w-full rounded-lg p-6 relative shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 transition"
            onClick={onClose}
          >
            <X size={22} />
          </button>

          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="rounded-lg mb-4 object-cover"
          />

          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          {project.tech && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <FaGithub />
                View Code
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
