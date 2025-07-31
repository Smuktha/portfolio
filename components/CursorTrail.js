import { useEffect, useRef, useState } from "react";

export default function FancyCursor() {
  const canvasRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeHandler);

    const mousemoveHandler = (e) => {
      if (!isHeroVisible) return; // 🔥 Only run if hero is visible

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 4; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          alpha: 1,
          radius: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        });
      }
    };
    window.addEventListener("mousemove", mousemoveHandler);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.01;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.shadowColor = "#00ffff";
          ctx.shadowBlur = 20;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  }, [isHeroVisible]);

  // 🔍 Set up intersection observer
  useEffect(() => {
    const heroSection = document.querySelector("#hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2, // Trigger when 20% visible
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        width: "100%",
        height: "100%",
        mixBlendMode: "screen",
        display: isHeroVisible ? "block" : "none", // Hide canvas when not in Hero
      }}
    />
  );
}
