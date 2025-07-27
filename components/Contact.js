'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-gradient-to-b from-[#0a2540] to-[#04233b] flex flex-col items-center justify-center px-6 py-24 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">👋 Get In Touch</h2>
        <p className="text-white/80 text-lg md:text-xl mb-10">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi , my inbox is always open. I’ll try my best to get back to you!
        </p>
        <a
          href="mailto:mukthas701@gmail.com"
          className="inline-block px-8 py-3 rounded-full text-lg font-medium bg-white/10 hover:bg-white/20 transition border border-white/20 text-white backdrop-blur"
        >
          ✉️ Say Hello
        </a>
        <div className="flex justify-center mt-10 space-x-6 text-3xl text-white/80">
          <a href="https://www.linkedin.com/in/muktha-suvarna12/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Smuktha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition hover:scale-110">
            <FaGithub />
          </a>
          <a href="mailto:mukthas701@gmail.com" className="hover:text-white transition hover:scale-110">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}