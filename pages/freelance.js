"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";

export default function Freelance() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Thank you.");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "Morton Dental Website",
      description: "A modern, SEO-focused dental site built with Next.js and Tailwind CSS.",
      link: "https://www.mortondental.com.au",
      image: "/images/projects/morton.png", // replace with actual image name
    },
    {
      title: "DC Dental Medical",
      description: "Medical landing page with responsive design and chatbot integration.",
      link: "https://dcdentalmedical.com.au",
      image: "/images/projects/dcdental.png", // replace with actual image name
    },
  ];

  const feedback = [
     {
      name: "Shubha Suvarana, Morton dental Shop 5/1 lanyana way Noosa Heads Queensland 4567 Australia",
      comment:
        

"Working with Mukhtha on our dental surgery website was a fantastic experience. She brought a perfect balance of professionalism, creativity, and attention to detail. From understanding the unique needs of a dental website to delivering a clean, modern, and user-friendly design,Mukhtha exceeded all our expectations.She was incredibly responsive, patient with revisions, and always one step ahead in offering practical and aesthetic solutions. The final result is not only visually impressive but also easy for our patients to navigate and trust.I would highly recommend Mukhtha to anyone looking for a skilled, reliable, and thoughtful web designer especially in the healthcare space.",
},
    {
      name: "Jenny Wyatt, Discovery Coast Dental and Medical Centre – Agnes Water, Queensland, Australia",
      comment:
        "We recently asked Muktha to help us update our dental and medical practice website, which was in need of a complete overhaul. She truly delivered beyond our expectations. We were very pleased with the results. Since then, Muktha has continued to assist us with minor updates, always responding promptly and professionally. Her work is of a very high standard, with excellent communication and an ongoing willingness to help. Muktha is both professional and courteous, and we confidently recommend her to anyone in need of website design services.",
    },
   
  ];

  return (
    <>
      <Header />

      <main className="bg-[#0e1a2f] text-white scroll-smooth pt-20">
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden">
          <Image
            src="/images/bg-freelance.png"
            alt="Freelance Hero"
            fill
            unoptimized
            priority
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-[#061222]/80 backdrop-blur-sm z-10" />

          <motion.div
            className="relative z-20 text-center max-w-3xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let’s Build Something <span className="text-[#3fc1c9]">Digital & Impactful</span>
            </motion.h1>

            <motion.p
              className="text-white/70 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I create scalable, SEO-optimized, and responsive websites with full performance management.
            </motion.p>

            <motion.div
              className="flex justify-center gap-4 flex-wrap mt-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="#work"
                className="bg-[#3fc1c9]/80 hover:bg-[#3fc1c9]/100 px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-white/30 px-6 py-3 rounded-lg font-semibold text-white/80 hover:bg-white/10 backdrop-blur-sm transition"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
       <section id="services" className="px-6 py-24 sm:px-16 lg:px-32 text-center">
  <motion.h2
    className="text-4xl sm:text-5xl font-extrabold mb-12"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
     What I Offer
  </motion.h2>

  <motion.p
  className="text-white/60 text-lg max-w-2xl mx-auto mb-16"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  I specialize in full-stack web development using modern tools like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. I also offer complete hosting setup through <strong>HostingBay</strong> and <strong>VentraIP</strong>, with domain linking, SEO optimization, and performance monitoring. For small businesses, I build and manage sites using <strong>Weebly</strong> for fast and accessible launches.
</motion.p>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Modern Frontend",
      description: "Responsive UIs using Next.js, Tailwind CSS, and Framer Motion.",
      icon: "💻",
    },
    {
      title: "SEO Optimization",
      description: "Performance and accessibility-first builds with search visibility in mind.",
      icon: "🔍",
    },
    {
      title: "Backend Integration",
      description: "API & CMS integration for scalable, dynamic web apps.",
      icon: "⚙️",
    },
    {
      title: "Web Hosting & Domains",
      description: "Complete deployment, HostingBay & VentraIP setup, and domain mapping.",
      icon: "🌐",
    },
    {
      title: "Weebly Websites",
      description: "Simple, effective websites for small businesses using Weebly.",
      icon: "🧱",
    },
    {
      title: "Ongoing Support",
      description: "Quick turnaround on updates and fixes, with long-term support.",
      icon: "💬",
    },
  ].map((service, index) => (
    <motion.div
      key={index}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#3fc1c9]">{service.title}</h3>
      <p className="text-white/70">{service.description}</p>
    </motion.div>
  ))}
</div>
</section>


        {/* WORK SECTION */}
        {/* WORK SECTION - Modern Franulovic Style */}
<section id="work" className="px-6 py-24 sm:px-16 lg:px-32 space-y-24">
  <motion.h2
    className="text-4xl sm:text-5xl font-extrabold text-center mb-20"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    🛠️ Freelance Highlights
  </motion.h2>

  {projects.map((project, index) => (
    <motion.div
      key={index}
      className={`flex flex-col lg:flex-row items-center gap-10 ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* IMAGE */}
      <div className="lg:w-1/2 w-full overflow-hidden rounded-xl border border-white/10 shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={600}
          className="rounded-xl object-cover w-full h-auto hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* TEXT */}
      <div className="lg:w-1/2 w-full space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#3fc1c9]">{project.title}</h3>
        <p className="text-white/70 leading-relaxed">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#3fc1c9] hover:text-white mt-4 underline underline-offset-4"
        >
          Visit Project →
        </a>
      </div>
    </motion.div>
  ))}
</section>


       <section id="feedback" className="px-6 py-24 sm:px-16 lg:px-32">
  <motion.h2
    className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    💬 Client Feedback
  </motion.h2>

  <div className="grid sm:grid-cols-2 gap-8">
    {feedback.map((fb, i) => (
      <motion.div
        key={i}
        className="bg-gradient-to-br from-[#1f2e4d]/60 to-[#0f1b33]/80 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
      >
        <p className="text-white/80 italic mb-6 leading-relaxed">“{fb.comment}”</p>
        <div className="border-t border-white/10 pt-4">
          <p className="font-semibold text-[#3fc1c9]">{fb.name.split(",")[0]}</p>
          <p className="text-sm text-white/50">{fb.name.split(",").slice(1).join(",").trim()}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-6 py-24 sm:px-16 lg:px-32">
          <h2 className="text-3xl font-bold mb-6 text-center">🚀 Want Me to Work With You?</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 p-6 rounded-xl max-w-xl mx-auto border border-white/20 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
            ></textarea>
            <button
              type="submit"
              className="bg-[#3fc1c9] hover:bg-[#35aeb7] transition px-6 py-3 rounded-lg font-medium text-white w-full"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
