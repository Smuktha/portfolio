import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function AllProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0a0a0a] text-white px-6 py-24 font-body"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center font-heading text-white">
          📂 All Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
