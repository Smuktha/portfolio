"use client";

import Header from "../components/Header";
import MobileSidebar from "../components/MobileSidebar";
import Hero from "../components/Hero";
import AboutSection from "../components/About";
import Showcase from "../components/showcase";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      {/* Sticky Header + Mobile Sidebar */}
      <Header />
      <MobileSidebar />

      {/* 🌑 Main Content with Clean Background & Scroll Anchors */}
      <main className="pt-20 bg-black text-white scroll-smooth">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="showcase">
          <Showcase />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>

        {/* Footer + Utility */}
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
