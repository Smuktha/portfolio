'use client';

import { Github, Linkedin, BookOpen, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../public/images/new_hero_clean.png";

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "MCA Student",
    "Open Source Contributor",
    "Problem Solver",
    "Freelancer"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    "React.js", "Next.js", "Tailwind CSS", "Node.js",
    "TypeScript", "MongoDB", "Socket.IO", "GitHub",
    "Express.js", "CSS", "HTML", "JavaScript"
  ];

  const positions = [
    { top: "20%", left: "10%", delay: 0 },
    { top: "30%", right: "10%", delay: 1 },
    { bottom: "25%", left: "15%", delay: 2 },
    { bottom: "15%", right: "10%", delay: 3 },
    { top: "50%", left: "5%", delay: 4 },
    { top: "55%", right: "5%", delay: 5 },
    { top: "25%", left: "20%", delay: 2.5 },
    { bottom: "30%", right: "15%", delay: 3.5 },
    { top: "40%", right: "10%", delay: 1.5 },
    { bottom: "40%", left: "10%", delay: 4.5 }
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden px-4 sm:px-8"
    >
      {/* 📸 Background Image */}
      <Image
        src={avatar}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* 💫 Floating Skills — now visible on all screens */}
      <div className="block">
        {positions.map((pos, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.95, 1.15, 0.95], y: [0, -6, 0] }}
            transition={{
              delay: pos.delay,
              duration: 6,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
            style={{ position: "absolute", ...pos }}
            className="px-3 py-1 rounded-md border border-white/30 text-xs sm:text-sm flex items-center justify-center font-medium shadow-md z-10 bg-white/20 backdrop-blur-md max-w-[40vw]"
          >
            <span className="text-white font-semibold whitespace-nowrap">
              {skills[index % skills.length]}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 🎯 Hero Content */}
      <div className="absolute z-10 text-center flex flex-col items-center justify-center inset-0 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 font-heading">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/50 animate-pulse-fast">
            {titles[currentIndex]}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-md sm:max-w-xl mx-auto">
          Building elegant, responsive, and high-performance websites using React, Next.js, Tailwind & more.
        </p>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          {[
            { href: "https://github.com/Smuktha", icon: <Github size={20} /> },
            { href: "https://linkedin.com/in/muktha-suvarna12", icon: <Linkedin size={20} /> },
            { href: "https://medium.com/@mukthas701", icon: <BookOpen size={20} /> },
            { href: "mailto:mukthas701@gmail.com", icon: <Mail size={20} /> }
          ].map(({ href, icon }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              className="p-2 sm:p-3 rounded-full border border-white/20 hover:border-white transition-all duration-300 bg-white/10 backdrop-blur-sm"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
