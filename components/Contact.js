'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null); // ✅ Removed TypeScript generic
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_4o5jila', // ✅ your actual service ID
        'template_62aeg48', // ✅ your actual template ID
        formRef.current,
        'J2oHJjNtfAaPL6rFm' // ✅ your public key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0a2540] to-[#04233b] flex flex-col items-center justify-center px-6 py-24 text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto w-full"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          👋 Get In Touch
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10">
          I'm currently open to new opportunities and collaborations. Whether
          you have a project in mind, a question, or just want to say hi, my
          inbox is always open.
        </p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 text-left">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-3 rounded bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-3 rounded bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-5 py-3 rounded bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-full text-lg font-medium bg-white/10 hover:bg-white/20 transition border border-white/20 text-white backdrop-blur"
          >
            ✉️ Send Message
          </button>

          {success && (
            <p className="text-green-400 mt-4">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-400 mt-4">Something went wrong. Try again!</p>
          )}
        </form>

        {/* Social Links */}
        <div className="flex justify-center mt-10 space-x-6 text-3xl text-white/80">
          <a
            href="https://www.linkedin.com/in/muktha-suvarna12/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Smuktha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:mukthas701@gmail.com"
            className="hover:text-white transition hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
