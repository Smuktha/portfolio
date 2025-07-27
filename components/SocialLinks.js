import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <section className="py-20 bg-darkBg text-white text-center">
      <h2 className="text-3xl font-bold mb-6 font-heading text-white">
        🌐 Connect with Me
      </h2>

      <div className="flex flex-wrap justify-center gap-6 text-base font-body">
        {[
          {
            label: "GitHub",
            href: "https://github.com/smuktha",
            icon: <Github className="text-linearStart" size={20} />,
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/muktha-suvarna12",
            icon: <Linkedin className="text-linearStart" size={20} />,
          },
          {
            label: "Email",
            href: "mailto:mukthas701@gmail.com",
            icon: <Mail className="text-linearStart" size={20} />,
          },
        ].map(({ label, href, icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 bg-[#13133b] hover:bg-[#1e1e2e] hover:shadow-[0_0_20px_rgba(142,45,226,0.4)] transition-all duration-300"
          >
            {icon}
            <span className="text-white">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
