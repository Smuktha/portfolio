"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Download } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isFreelance = pathname === "/freelance";

  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = isFreelance
    ? [
        { id: "", label: "Home", href: "#" },
        { id: "services", label: "Services", href: "#services" },
        { id: "work", label: "My Work", href: "#work" },
        { id: "feedback", label: "Client Feedback", href: "#feedback" },
        { id: "contact", label: "Contact", href: "#contact" },
      ]
    : [
        { id: "hero", label: "Home", href: "#hero" },
        { id: "about", label: "About", href: "#about" },
        { id: "showcase", label: "Showcase", href: "#showcase" },
        { id: "blog", label: "Blog", href: "#blog" },
        { id: "contact", label: "Contact", href: "#contact" },
      ];

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a19]/90 text-white shadow-md"
          : "bg-transparent text-white"
      } backdrop-blur-md`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 font-body">
        {/* 🧠 Logo */}
       <Link
  href={isFreelance ? "/" : "/"}
  className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-md 
  text-2xl sm:text-xl md:text-xl lg:text-2xl"
>
  <span className="block md:hidden text-3xl">
    {isFreelance ? "Portfolio" : "Muktha"}
  </span>
  <span className="hidden md:block">
    {isFreelance ? "Portfolio" : "Muktha"}
  </span>
</Link>


        {/* 📺 Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                className={`relative transition duration-200 px-1 ${
                  active === id
                    ? "text-white font-semibold after:scale-100"
                    : "text-white/70 hover:text-white"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-0 after:bg-white after:transition-transform after:duration-300 after:origin-left hover:after:scale-100`}
              >
                {label}
              </a>
            </li>
          ))}
          {!isFreelance && (
            <li>
              <Link
                href="/freelance"
                className="transition duration-200 text-white/70 hover:text-white"
              >
                Freelance
              </Link>
            </li>
          )}
        
        </ul>

        {/* 🌙 Theme Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
