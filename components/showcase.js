'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShowcaseTechStack from '@/components/TechStack';
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesTabContent from "@/components/CertificatesTabContent";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('Projects');
  const showcaseRef = useRef(null);

  const tabs = [
    { label: 'Projects', icon: '💻' },
    { label: 'Certificates', icon: '📜' },
    { label: 'Tech Stack', icon: '🧠' },
  ];

  useEffect(() => {
    const handleTabSwitch = (e) => {
      const keyMap = {
        certificates: 'Certificates',
        techstack: 'Tech Stack',
        projects: 'Projects',
      };

      const tabKey = e.detail?.toLowerCase();
      const mappedTab = keyMap[tabKey];

      if (mappedTab) {
        setActiveTab(mappedTab);
        showcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('switchShowcaseTab', handleTabSwitch);
    return () => window.removeEventListener('switchShowcaseTab', handleTabSwitch);
  }, []);

  return (
    <section
      id="showcase"
      ref={showcaseRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#030b17] via-[#041c2f] to-[#03111e] px-4 sm:px-6 py-20 sm:py-24 text-white flex flex-col items-center justify-start"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Portfolio Showcase
      </motion.h2>

      {/* 🔥 Responsive Scrollable Tabs Bar */}
      <div className="flex gap-4 sm:gap-6 mb-14 sm:mb-16 overflow-x-auto w-full justify-center px-2 sm:px-0 no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.label;
          return (
            <motion.button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative min-w-[120px] px-4 py-3 sm:px-6 sm:py-4 rounded-xl border text-center text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap
                ${
                  isActive
                    ? 'border-cyan-400 bg-cyan-950/30 text-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.2)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:border-cyan-500 hover:text-cyan-300'
                }`}
            >
              <div className="text-xl sm:text-2xl mb-1">{tab.icon}</div>
              {tab.label}

              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 z-[-1] rounded-xl bg-cyan-500/10 backdrop-blur-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* 🔄 Animated Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'Projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ProjectsSection />
          </motion.div>
        )}

        {activeTab === 'Certificates' && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <CertificatesTabContent />
          </motion.div>
        )}

        {activeTab === 'Tech Stack' && (
          <motion.div
            key="techstack"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl px-2 sm:px-4"
          >
            <ShowcaseTechStack />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;
