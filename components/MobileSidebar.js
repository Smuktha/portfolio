"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  const navLinks = [
    ["#hero", "Home"],
    ["#about", "About"],
    ["#skills", "Skills"],
    ["#projects", "Projects"],
    ["#blog", "Blog"],
    ["#contact", "Contact"],
  ];

  return (
    <>
      {/* 📱 Toggle Button */}
      <button
        className="fixed top-5 right-5 z-[100] md:hidden bg-[#121212] text-white p-3 rounded-md border border-neutral-800 shadow-md hover:shadow-[0_0_15px_rgba(142,45,226,0.3)] transition"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {open ? (
          <FaTimes size={20} className="text-white" />
        ) : (
          <div className="space-y-1">
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-6 h-[2px] bg-white" />
          </div>
        )}
      </button>

      {/* 📋 Sidebar Overlay */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[270px] bg-darkBg text-white z-50 shadow-lg flex flex-col p-6"
          >
            <nav className="flex flex-col space-y-6 text-lg mt-20 font-body text-subtleText">
              {navLinks.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={toggleSidebar}
                  className="hover:text-linearStart transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* 🧠 Footer Tagline */}
            <div className="mt-auto text-center text-xs text-neutral-500 pt-10">
              Made with <span className="text-red-400">♥</span> by Muktha
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
