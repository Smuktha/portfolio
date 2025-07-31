"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import certificates from "../data/certificates";
import CertificateModal from "./CertificateModal";

export default function CertificatesTabContent() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalSrc, setModalSrc] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    setModalSrc(certificates[index]);
  };

  return (
    <section className="relative px-2 md:px-4 py-10 w-full max-w-7xl mx-auto">
      {/* Arrows - hidden on small devices */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 z-30">
        <button
          onClick={() => scroll("left")}
          className="bg-neutral-800 hover:bg-neutral-700 text-white p-3 rounded-full shadow-md"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-neutral-800 hover:bg-neutral-700 text-white p-3 rounded-full shadow-md"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Scrollable certificates */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2 relative z-10"
      >
        {certificates.map((src, i) => (
          <motion.div
            key={i}
            onClick={() => handleClick(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`
              min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px]
              h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px]
              snap-center rounded-xl overflow-hidden border cursor-pointer px-1
              flex-shrink-0 transition-all duration-300 ease-in-out
              ${
                activeIndex === i
                  ? "scale-105 z-30 shadow-xl border-cyan-400 bg-[#1A1A2E]"
                  : "z-10 border-neutral-700 bg-[#0F0F1C] hover:scale-105 hover:z-20"
              }
            `}
            style={{ touchAction: "pan-x" }}
          >
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`Certificate ${i + 1}`}
                fill
                className="object-contain p-4 pointer-events-none"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <CertificateModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </section>
  );
}
