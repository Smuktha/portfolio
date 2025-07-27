'use client';

import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A sleek portfolio using Next.js, TailwindCSS, and Framer Motion.',
    techStack: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/images/portfolio.png',
    link: 'https://yourportfolio.com',
  },
  {
    title: 'E-Commerce App',
    description: 'A full-stack MERN e-commerce site with admin panel.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/images/ecommerce.png',
    link: 'https://yourshop.com',
  },
  // Add more...
];

export default function ProjectsTabContent() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedProject(project)}
          className="cursor-pointer border rounded-xl p-4 bg-neutral-900 hover:bg-neutral-800 transition shadow"
        >
          <img src={project.image} alt={project.title} className="rounded-md mb-3" />
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
        </div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
