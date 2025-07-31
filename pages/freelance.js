"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react"; // ✅ Fix this line
import Image from "next/image";
import Header from "../components/Header";
import emailjs from '@emailjs/browser';

export default function Freelance() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [sending, setSending] = useState(false);
const [statusMessage, setStatusMessage] = useState('');

const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage('');

   emailjs.sendForm(
  'service_4o5jila', // service ID
  'template_62aeg48', // template ID
  formRef.current,    // form element (ref)
  'J2oHJjNtfAaPL6rFm' // public key
)

      .then(
        () => {
          setSending(false);
          setFormData({ name: '', email: '', message: '' });
          setStatusMessage('✅ Message sent successfully!');
        },
        () => {
          setSending(false);
          setStatusMessage('❌ Something went wrong. Please try again.');
        }
      );
  };
 

  const projects = [
    {
      title: "Morton Dental Website",
      description: "A modern, SEO-focused dental site built with Next.js and Tailwind CSS.",
      link: "https://www.mortondental.com.au",
      image: "/images/projects/morton.png",
    },
    {
      title: "DC Dental Medical",
      description: "Medical landing page with responsive design and chatbot integration.",
      link: "https://dcdentalmedical.com.au",
      image: "/images/projects/dcdental.png",
    },
  ];

  const feedback = [
    {
      name: "Shubha Suvarana",
      comment:
        "Working with Mukhtha on our dental surgery website was a fantastic experience. She brought a perfect balance of professionalism, creativity, and attention to detail. From understanding the unique needs of a dental website to delivering a clean, modern, and user-friendly design—Mukhtha exceeded all our expectations.She was incredibly responsive, patient with revisions, and always one step ahead in offering practical and aesthetic solutions. The final result is not only visually impressive but also easy for our patients to navigate and trust.I would highly recommend Mukhtha to anyone looking for a skilled, reliable, and thoughtful web designer—especially in the healthcare space.",location: "Morton Dental, Queensland, Australia",
    },
    {
      name: "Jenny Wyatt",
      comment:
        "We recently asked Muktha to help us update our dental and medical practice website. It really needed an overhaul and she truly delivered. We were very happy with the changes. Since then, we have had a few minor updates to be reflected in the information on the website. I must say that Muktha was extremely prompt in executing these changes. Her work has been of a very high standard with great communication and on ongoing offer to help at any time.  Muktha is both professional and courteous and we can confidently recommend her to anybody needing website design. ",
      location: "Discovery Coast Dental, Agnes Water, QLD",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#0e1a2f] text-white pt-20">
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
              Let’s Build Something <span className="text-[#3fc1c9]">Exceptional</span>
            </motion.h1>

            <motion.p
              className="text-white/70 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I specialize in fast, reliable, and beautiful web experiences tailored for small businesses.
            </motion.p>

            <motion.div
              className="flex justify-center gap-4 flex-wrap mt-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="#work" className="bg-[#3fc1c9] hover:bg-[#38b0b9] px-6 py-3 rounded-lg font-semibold transition">
                Portfolio
              </a>
              <a href="#contact" className="border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
                Let's Talk
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
            Services Tailored to You
          </motion.h2>

          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I offer complete website creation using modern technologies with full hosting, SEO, and support included.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Frontend Magic", "Pixel-perfect UIs using Tailwind and React", "🎨"],
              ["Search Visibility", "Google-friendly SEO optimization", "📈"],
              ["Backend Support", "APIs, CMS, and custom logic", "🧠"],
              ["Hosting Setup", "Domain + hosting configurations", "🌍"],
              ["Weebly Launches", "Quick deploys for small businesses", "🚀"],
              ["Site Maintenance", "Updates, edits, fixes, and care", "🔧"],
            ].map(([title, description, icon], i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-xl font-bold text-[#3fc1c9]">{title}</h3>
                <p className="text-white/70 mt-1">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="px-6 py-24 sm:px-16 lg:px-32 space-y-24">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Work
          </motion.h2>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 ? "lg:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="lg:w-1/2 w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="rounded-xl object-cover w-full hover:scale-105 transition-transform"
                />
              </div>

              <div className="lg:w-1/2 w-full space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3fc1c9]">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener" className="text-[#3fc1c9] underline">
                  Visit →
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* FEEDBACK SECTION */}
        <section id="feedback" className="px-6 py-24 sm:px-16 lg:px-32">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Client Voices
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {feedback.map((fb, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#1f2e4d]/60 to-[#0f1b33]/80 p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <p className="text-white/80 italic mb-6">“{fb.comment}”</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-[#3fc1c9]">{fb.name}</p>
                  <p className="text-sm text-white/50">{fb.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
      <section id="contact" className="px-6 py-24 sm:px-16 lg:px-32">
        <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
        <form
          ref={formRef}
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
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
          ></textarea>

          <button
            type="submit"
            className="bg-[#3fc1c9] hover:bg-[#35aeb7] px-6 py-3 rounded-lg font-medium text-white w-full flex justify-center items-center gap-2"
          >
            {sending ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              'Send Message'
            )}
          </button>

          {statusMessage && (
            <p
              className={`text-sm mt-4 text-center ${
                statusMessage.includes('✅') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </section>
      </main>
    </>
  );
}
