"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaFlask } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BiCodeCurly } from "react-icons/bi";
import Link from "next/link";

const stats = [
  {
    icon: <FaCode size={24} />,
    title: "FREELANCE WORK",
    description: "View portfolio and freelance work",
    valueIcon: "📂",
    onClick: () => (window.location.href = "/freelance"),
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: "RECENT WORKS",
    description: "Click to see live sites",
    valueIcon: "🌐",
    links: [
      { name: "Morton Dental", url: "https://www.mortondental.com.au" },
      { name: "DC Dental Medical", url: "https://dcdentalmedical.com.au" },
    ],
  },
  {
    icon: <FaFlask size={24} />,
    title: "CURRENTLY WORKING",
    description: "Click to view current learning",
    valueIcon: "⚡",
    extraText: "Learning more in Next.js & real-world projects",
  },
];

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="about"
      className="relative z-10 bg-[#0a2540] text-white px-4 sm:px-6 md:px-16 lg:px-32 py-16 sm:py-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40 animate-pulse-fast"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I&rsquo;m <span className="font-semibold text-white">Muktha</span>, a full-stack web
          developer passionate about creating dynamic, accessible UI/UX experiences using tools
          like React, Next.js, and Tailwind CSS.
          <br />
          <br />
          I recently built a full-featured website for{" "}
          <strong className="text-white">Morton Dental</strong> using the Next.js App Router,
          focused on SEO and performance.
          <br />
          I&rsquo;ve also integrated a custom chatbot, used Framer Motion for smooth animations,
          and optimized for both mobile and desktop.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* 📄 Show Resume */}
          <a
            href="/resume_muktha.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 transition px-6 py-3 text-white rounded-lg font-medium flex items-center gap-2 border border-white/20 backdrop-blur text-sm sm:text-base"
          >
            <FiDownload /> Show Resume
          </a>

          {/* 💼 Freelance Work */}
          <Link
            href="/freelance"
            className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 rounded-lg font-medium text-white/80 flex items-center gap-2 backdrop-blur text-sm sm:text-base"
          >
            <BiCodeCurly /> My Freelance Work
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/20 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer backdrop-blur"
              onClick={() =>
                stat.onClick ? stat.onClick() : setActiveCard(activeCard === index ? null : index)
              }
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white border border-white/20">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm tracking-wider text-white/70">{stat.title}</p>
                  <motion.div
                    className="text-3xl sm:text-4xl mt-1 text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {stat.valueIcon}
                  </motion.div>
                </div>
              </div>
              <p className="text-white/60 mt-3 text-sm">{stat.description}</p>

              {/* Expandable content */}
              {activeCard === index && (
                <div className="mt-2">
                  {stat.links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-sm text-cyan-300 underline hover:text-cyan-100"
                    >
                      → {link.name}
                    </a>
                  ))}
                  {stat.extraText && (
                    <p className="text-cyan-300 text-sm mt-2">{stat.extraText}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
