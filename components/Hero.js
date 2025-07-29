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
  }, [titles.length]); // ✅ Dependency added here

  const skills = [
    "React.js", "Next.js", "Tailwind CSS", "Node.js",
    "TypeScript", "MongoDB", "Socket.IO", "GitHub",
    "Express.js", "CSS", "HTML", "JavaScript"
  ];

  const positions = [
    { top: "20%", left: "15%", delay: 0 },
    { top: "35%", right: "20%", delay: 1 },
    { bottom: "25%", left: "20%", delay: 2 },
    { bottom: "20%", right: "15%", delay: 3 },
    { top: "50%", left: "10%", delay: 4 },
    { top: "55%", right: "10%", delay: 5 },
    { top: "30%", left: "25%", delay: 2.5 },
    { bottom: "30%", right: "25%", delay: 3.5 },
    { top: "40%", right: "15%", delay: 1.5 },
    { bottom: "40%", left: "15%", delay: 4.5 }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      <Image src={avatar} alt="Hero Background" fill className="object-cover object-center z-0" priority />

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
          className="px-5 py-2 rounded-md border border-white/40 text-sm md:text-base flex items-center justify-center font-medium shadow-xl z-10 bg-white/20 backdrop-blur-md"
        >
          <span className="text-white font-semibold whitespace-nowrap">
            {skills[index % skills.length]}
          </span>
        </motion.div>
      ))}

      <div className="absolute z-10 text-center flex flex-col items-center justify-center inset-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 font-heading">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/50 animate-pulse-fast">
            {titles[currentIndex]}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
          Building elegant, responsive, and high-performance websites using React, Next.js, Tailwind & more.
        </p>
        <div className="flex justify-center gap-4">
          {[
            { href: "https://github.com/Smuktha", icon: <Github /> },
            { href: "https://linkedin.com/in/muktha-suvarna12", icon: <Linkedin /> },
            { href: "https://medium.com/@mukthas701", icon: <BookOpen /> },
            { href: "mailto:mukthas701@gmail.com", icon: <Mail /> }
          ].map(({ href, icon }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              className="p-3 rounded-full border border-white/20 hover:border-white transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
