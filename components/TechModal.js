"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function SkillModal({ skill, onClose }) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#1a1a1a] text-white p-6 rounded-xl shadow-xl max-w-md w-full relative"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>
          <div className="flex flex-col items-center gap-3 text-center">
            <i className={`${skill.icon} text-4xl`} />
            <h2 className="text-2xl font-bold">{skill.name}</h2>
            <p className="text-gray-400 text-sm">
              More details about <span className="font-semibold">{skill.name}</span> could go here — such as experience, projects used in, or learning journey.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
