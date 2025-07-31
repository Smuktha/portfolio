import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function VisitPopup() {
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const hasDismissed = localStorage.getItem("popupDismissed");
    if (hasDismissed === "true") return;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 20;

      if (scrollPosition >= threshold && !show) {
        setShow(true);
        setTimer(5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setShow(false);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [show]);

  const handleClose = () => {
    localStorage.setItem("popupDismissed", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="relative notification bg-[#1e1e1e] text-white rounded-xl p-4 shadow-xl w-[90%] max-w-sm border border-white/10 font-mono animate-fade-in">
      {/* Cancel Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-3 text-white/60 hover:text-white text-xl font-bold"
        aria-label="Close"
      >
        ×
      </button>

      <div className="flex justify-center mb-3 gap-2">
        <FaGithub className="text-white text-2xl" />
        <FaLinkedin className="text-white text-2xl" />
      </div>

      <h2 className="text-lg font-bold text-center mb-2">Thanks for visiting!</h2>
      <p className="text-center text-sm mb-4 text-gray-300">
        If you liked this, please follow me on GitHub or LinkedIn — it’d mean a lot!
      </p>

      <div className="flex justify-center gap-3">
        <a
          href="https://github.com/Smuktha"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/muktha-suvarna12/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-sky-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-center text-xs text-gray-400 mt-3">
        Closing in {timer}s
      </p>
    </div>
  );
}
