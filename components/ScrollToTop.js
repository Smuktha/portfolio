import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-linearStart to-linearEnd text-white p-3 rounded-full shadow-md hover:shadow-[0_0_20px_rgba(142,45,226,0.5)] hover:scale-105 transition-all duration-300"
      >
        <FaArrowUp size={16} />
      </button>
    )
  );
}
