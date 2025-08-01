"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function CertificateModal({ src, onClose }) {
  if (!src) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-[#1a1a1a] p-4 rounded-xl shadow-lg w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
        >
          {/* Close Button */}
          <div
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer z-50"
            onClick={onClose}
          >
            <X size={24} />
          </div>

          {/* Image Viewer */}
          <div className="relative w-full h-[70vh] sm:h-[60vh]">
            <Image
              src={src}
              alt="Certificate"
              fill
              className="object-contain rounded"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
