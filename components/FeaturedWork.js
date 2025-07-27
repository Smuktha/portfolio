export default function FeaturedWork() {
  return (
    <section className="py-20 px-6 bg-black text-white font-body">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 font-heading text-white text-center">
          🌟 Featured Project
        </h2>

        <div className="bg-[#101014] p-8 rounded-2xl border border-[#2A2A2A] shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all">
          <h3 className="text-2xl sm:text-3xl font-semibold font-heading mb-3 text-white">
            Discovery Dental
          </h3>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4">
            A clean, accessible, real-world dental clinic website — designed to
            build trust and communicate services clearly. Crafted using{" "}
            <span className="text-white font-medium">Next.js</span> &{" "}
            <span className="text-white font-medium">Tailwind CSS</span>, with
            mobile responsiveness, performance optimizations, and SEO in mind.
          </p>

          <a
            href="https://dcdentalandmedical.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 text-sm rounded-full font-heading text-white border border-white/20 hover:bg-white/10 transition duration-300"
          >
            Visit Live Site →
          </a>
        </div>
      </div>
    </section>
  );
}
