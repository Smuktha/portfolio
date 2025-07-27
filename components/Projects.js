'use client';

import { useState, useCallback } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projects from '@/data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.5, spacing: 24 },
      },
    },
  });

  const featuredProjects = projects.slice(0, 5);

  const handleCardClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-6 py-32 bg-[#030b17] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold font-heading mb-12 leading-tight">
          Accuracy at its core
        </h2>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="keen-slider__slide"
              onClick={() => handleCardClick(project)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
}
