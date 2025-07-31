import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const blogs = [
  {
    title: "How I Built a Dental Website with No Backend",
    description:
      "A full walk-through of building a static healthcare website using Next.js and Tailwind.",
    date: "June 2025",
    link: "https://medium.com/@mukthas701/dental-website-build",
  },
  {
    title: "My Final Year BCA Project: Movie Recommender",
    description:
      "A breakdown of my collaborative ML-based movie recommender system.",
    date: "May 2025",
    link: "https://medium.com/@mukthas701/movie-recommender",
  },
  {
    title: "How I Made My Portfolio Dynamic With Framer Motion",
    description:
      "Using animation libraries to make my personal site feel alive.",
    date: "April 2025",
    link: "https://medium.com/@mukthas701/framer-portfolio",
  },
  {
    title: "Deploying a Next.js Project on HostingBay with cPanel",
    description:
      "Step-by-step deployment of a static project using HostingBay&rsquo;s cPanel setup.",
    date: "March 2025",
    link: "https://medium.com/@mukthas701/deploy-nextjs",
  },
];

export default function AllBlogsPage() {
  return (
    <>
      <NextSeo
        title="All Blogs | Muktha's Portfolio"
        description="Explore blog posts written by Muktha on frontend, deployment, animation, and final year projects."
        canonical="https://portfolio-mukthas-projects-7e55e4c8.vercel.app/#blog"
        openGraph={{
          url: "https://portfolio-mukthas-projects-7e55e4c8.vercel.app/#blog",
          title: "All Blogs | Muktha's Portfolio",
          description:
            "Explore blog posts written by Muktha on frontend, deployment, animation, and final year projects.",
          site_name: "Muktha's Portfolio",
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-[#0a0a0a] text-white px-6 py-24 font-body"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 font-heading">
            ✍️ All Blog Posts
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog, i) => (
              <motion.a
                key={i}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="block bg-[#13133b] p-6 rounded-xl border border-neutral-800 hover:border-linearStart transition-all shadow hover:shadow-[0_0_15px_rgba(142,45,226,0.2)]"
              >
                <h3 className="text-xl font-semibold text-white font-heading mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-subtleText mb-2">{blog.date}</p>
                <p className="text-subtleText text-sm leading-relaxed font-body mb-3">
                  {blog.description}
                </p>
                <span className="text-linearStart text-sm font-medium hover:underline">
                  Read on Medium →
                </span>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-20">
            <p className="text-subtleText text-sm mb-4">
              Don&apos;t miss out on updates!
            </p>
            <a
              href="https://medium.com/@mukthas701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-linearStart to-linearEnd text-white hover:opacity-90 transition font-heading shadow-md"
            >
              Visit My Medium →
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
