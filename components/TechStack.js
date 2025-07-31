import { motion } from "framer-motion";

const skills = {
  "Front-End": [
    { name: "HTML", icon: "devicon-html5-plain colored", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "devicon-css3-plain colored", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", link: "https://www.typescriptlang.org/" },
    { name: "React.js", icon: "devicon-react-original colored", link: "https://react.dev/" },
    { name: "Next.js", icon: "devicon-nextjs-original colored", link: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", link: "https://tailwindcss.com/" },
  ],
  "Back-End": [
    { name: "Node.js", icon: "devicon-nodejs-plain colored", link: "https://nodejs.org/" },
    { name: "Express.js", icon: "devicon-express-original colored", link: "https://expressjs.com/" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", link: "https://www.mongodb.com/" },
    { name: "MySQL", icon: "devicon-mysql-plain colored", link: "https://www.mysql.com/" },
    { name: "PHP", icon: "devicon-php-plain colored", link: "https://www.php.net/" },
  ],
  "Programming": [
    { name: "TypeScript", icon: "devicon-typescript-plain colored", link: "https://www.typescriptlang.org/" },
    { name: "Python", icon: "devicon-python-plain colored", link: "https://www.python.org/" },
    { name: "Java", icon: "devicon-java-plain colored", link: "https://www.oracle.com/java/" },
    { name: "R", icon: "devicon-r-original colored", link: "https://www.r-project.org/" },
    { name: "C#", icon: "devicon-csharp-plain colored", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  ],
  "Tech & Tools": [
    { name: "GitHub", icon: "devicon-github-original colored", link: "https://github.com/" },
    { name: "Vercel", icon: "devicon-vercel-original colored", link: "https://vercel.com/" },
    { name: "VS Code", icon: "devicon-vscode-plain colored", link: "https://code.visualstudio.com/" },
    { name: "Socket.IO", icon: "devicon-socketio-original colored", link: "https://socket.io/" },
    { name: "Netlify", icon: "devicon-netlify-plain colored", link: "https://www.netlify.com/" },
    { name: "VentraIP", icon: "devicon-digitalocean-plain colored", link: "https://ventraip.com.au/" },
    { name: "HostingBay", icon: "devicon-docker-plain colored", link: "https://hostingbay.com.au/" },
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
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={tileClass}
              >
                <i className={`${item.icon} text-3xl`} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
