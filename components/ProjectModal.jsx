"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white max-w-xl w-full rounded-lg p-6 relative"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500"
            onClick={onClose}
          >
            <X />
          </button>

          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm mb-4">{project.description}</p>

          {project.tech && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Project ↗
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
