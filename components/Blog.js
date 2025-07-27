'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    title: "Coding & Me? Here's How That Happened",
    url: "https://medium.com/@mukthas701/coding-me-heres-how-that-happened-776150438b0b",
    date: "May 26, 2025",
    image: "/images/blog/shutterstock_1612044622.jpg",
    buttonText: "Read more ›"
  },
  {
    title: "MERN Stack Series — Introduction to Express.js",
    url: "https://medium.com/@mukthas701/mern-stack-series-introduction-to-express-js-03f901cfbe43",
    date: "Feb 23, 2025",
    image: "/images/blog/mern.webp",
    buttonText: "Read more ›"
  },
  {
    title: "Podcast: Your New Best Friend",
    url: "https://mukthapodcastinfo.weebly.com/",
    date: "Jun 11, 2024",
    image: "/images/blog/poadcast.jpg",
    buttonText: "Read more ›"
  }
];

export default function Blog() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#090e22] to-[#011627] text-white px-6 py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto z-10 relative"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-blue-200 drop-shadow-glow">
          Learning, building,<br />and documenting
        </h1>
        <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
          Insights and experiences from my journey as a developer exploring ideas, overcoming challenges, and learning lessons along the way.
        </p>
        <div className="mt-10">
          <Link href="https://medium.com/@mukthas701" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition">
            View More Blogs
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto relative z-10"
      >
        {posts.map((post, idx) => (
          <Link key={idx} href={post.url} target="_blank" className="bg-white/5 rounded-2xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
            <div className="relative h-48 w-full">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm text-white/60 mb-1">{post.date}</p>
              <h3 className="text-white font-semibold text-lg mb-3">{post.title}</h3>
              <span className="text-cyan-300 text-sm hover:underline">
                {post.buttonText}
              </span>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
