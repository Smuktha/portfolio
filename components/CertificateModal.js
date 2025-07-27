"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function CertificateModal({ src, onClose }) {
  if (!src) return null;

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
          className="bg-white dark:bg-[#1a1a1a] p-4 rounded-xl shadow-lg max-w-4xl w-full relative"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
            onClick={onClose}
          >
            <X />
          </button>
          <img
            src={src}
            alt="Certificate"
            className="w-full h-auto max-h-[80vh] object-contain rounded"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
