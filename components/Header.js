"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

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
          setActive(sectionId);
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
      className={`fixed w-full top-0 z-40 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0f0f1c]/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 font-body">
        {/* Logo */}
        <Link
          href={isFreelance ? "/" : "/"}
          className="text-xl font-bold font-heading bg-gradient-to-r from-[#e6e6e6] to-[#b3b3b3] text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
        >
          {isFreelance ? "Portfolio" : "Muktha"}
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                className={`relative transition duration-200 px-1 
                  ${
                    active === id
                      ? "text-[#e6e6e6] font-semibold after:scale-100"
                      : "text-subtleText hover:text-[#e6e6e6]"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-0 after:bg-[#e6e6e6] after:transition-transform after:duration-300 after:origin-left hover:after:scale-100
                `}
              >
                {label}
              </a>
            </li>
          ))}
          {!isFreelance && (
            <li>
              <Link
                href="/freelance"
                className="relative transition duration-200 px-1 text-subtleText hover:text-[#e6e6e6] hover:underline underline-offset-4"
              >
                Freelance
              </Link>
            </li>
          )}
        </ul>

        {/* Theme Toggle */}
        <div className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition duration-300">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
