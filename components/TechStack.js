// components/ShowcaseTechStack.js
import { motion } from "framer-motion";

const skills = {
  "Front-End": [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  ],
  "Back-End": [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
  ],
  "Programming": [
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "R", icon: "devicon-r-original colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  ],
  "Tech & Tools": [
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "Vercel", icon: "devicon-vercel-original colored" },
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "Socket.IO", icon: "devicon-socketio-original colored" },
    { name: "Netlify", icon: "devicon-netlify-plain colored" },
    { name: "VentraIP", icon: "devicon-digitalocean-plain colored" },
    { name: "HostingBay", icon: "devicon-docker-plain colored" },
  ],
};

const tileClass = `bg-[#13133b] border border-[#2a2a40] text-center rounded-xl p-4 
text-sm font-medium text-white hover:scale-105 transition-all shadow-md 
hover:shadow-[0_0_10px_rgba(99,102,241,0.4)] flex flex-col items-center gap-2`;

export default function ShowcaseTechStack() {
  return (
    <div className="grid md:grid-cols-2 gap-12 text-left">
      {Object.entries(skills).map(([category, items], idx) => (
        <div key={idx}>
          <h3 className="text-xl font-semibold mb-4 text-[#B2B2FF]">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={i} className={tileClass}>
                <i className={`${item.icon} text-3xl`} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
