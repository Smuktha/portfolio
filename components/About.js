"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BiCodeCurly } from "react-icons/bi";
import Link from "next/link";

const experience = [
  {
    icon: <FaCode size={24} />,
    title: "FREELANCE PROJECTS",
    description: "Developed responsive, SEO-optimized websites for clients.",
    valueIcon: "💼",
    links: [
      { name: "Morton Dental", url: "https://www.mortondental.com.au" },
      { name: "DC Dental Medical", url: "https://dcdentalmedical.com.au" },
    ],
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: "INTERNSHIPS",
    description: "2025: Internship @ Prodigy InfoTech – Full stack internship building websites with Next.js & MongoDB.",
    valueIcon: "🛠",
    links: [
      { name: "Prodigy InfoTech Internship (Jan 2025 – Mar 2025)", url: "https://prodigyinfotech.dev/" },
      { name: "Full-Stack Auth App", url: "https://github.com/Smuktha/PRODIGY_FS_01" },
      { name: "Employee Management System", url: "https://github.com/Smuktha/PRODIGY_FS_02" },
      { name: "Local Store E-commerce Platform", url: "https://github.com/Smuktha/PRODIGY_FS_03" },
      { name: "Real-time Chat Application", url: "https://github.com/Smuktha/PRODIGY_FS_04" },
    ],
  }
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
          I have worked on real-world freelance projects and completed internships that strengthened my development skills and industry knowledge.
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

        {/* Experience Section */}
        <motion.h3
          className="text-2xl sm:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40 animate-pulse-fast"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/20 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer backdrop-blur"
              onClick={() =>
                setActiveCard(activeCard === index ? null : index)
              }
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white border border-white/20">
                  {exp.icon}
                </div>
                <div>
                  <p className="text-sm tracking-wider text-white/70">{exp.title}</p>
                  <motion.div
                    className="text-3xl sm:text-4xl mt-1 text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {exp.valueIcon}
                  </motion.div>
                </div>
              </div>
              <p className="text-white/60 mt-3 text-sm">{exp.description}</p>

              {activeCard === index && (
                <div className="mt-2">
                  {exp.links?.map((link, i) => (
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
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
