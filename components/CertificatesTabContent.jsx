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
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setModalSrc(certificates[index]);
    }
  };

  return (
    <section className="relative px-4 py-12 w-full max-w-7xl mx-auto">
      {/* Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-30">
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
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2 relative z-10"
      >
        {certificates.map((src, i) => (
          <motion.div
            key={i}
            onClick={() => handleClick(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`min-w-[320px] md:min-w-[360px] lg:min-w-[400px] h-[480px] snap-center rounded-xl overflow-hidden border cursor-pointer px-1
              relative transition-all duration-300 ease-in-out flex-shrink-0
              ${
                activeIndex === i
                  ? "scale-110 z-40 shadow-2xl border-cyan-400 bg-[#1A1A2E]"
                  : "z-10 border-neutral-700 bg-[#0F0F1C] hover:scale-105 hover:z-20 shadow-md hover:shadow-2xl"
              }
            `}
            style={{ touchAction: "pan-x" }}
          >
            <Image
              src={src}
              alt={`Certificate ${i + 1}`}
              width={400}
              height={480}
              className="object-contain p-4 pointer-events-none w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <CertificateModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </section>
  );
}
