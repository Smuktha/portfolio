import { useRouter } from "next/router";
import projects from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const { query } = useRouter();
  const { slug } = query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-24 flex items-center justify-center">
        <p className="text-gray-500 text-xl font-body">🚫 Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0a0a0a] text-white px-6 py-24 font-body"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 font-heading text-white">
          {project.title}
        </h1>
        <p className="text-subtleText mb-8 text-lg leading-relaxed">
          {project.description}
        </p>

        {project.tech?.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-3 font-heading text-white">
              🛠 Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#1c1c1f] text-subtleText border border-neutral-800 px-4 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.screenshots?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3 font-heading text-white">
              🖼 Screenshots
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.screenshots.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-neutral-800 shadow hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition"
                >
                  <Image
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    width={600}
                    height={350}
                    className="object-cover w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 space-y-4 text-base">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-linearStart hover:underline font-medium"
            >
              🔗 GitHub Repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-400 hover:text-green-300 transition font-medium"
            >
              🚀 Live Website
            </a>
          )}
          {project.blog && (
            <a
              href={project.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-purple-400 hover:text-purple-300 transition font-medium"
            >
              ✍️ Blog Post
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
