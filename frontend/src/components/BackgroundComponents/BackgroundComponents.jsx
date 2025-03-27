import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? "#3B82F6" : "#6366F1",
        });
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animate();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />;
};

export const HexagonGrid = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDg0IDQ4Ij48cGF0aCBkPSJNMjggNDhMMTQgNDhMMCAyNEwxNCAwTDI4IDBMNDIgMjRMMjggNDhaTTcwIDQ4TDU2IDQ4TDQyIDI0TDU2IDBMNzAgMEw4NCAyNEw3MCA0OFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNCODJGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] bg-repeat animate-[hexGrid_60s_linear_infinite]" />
  </div>
);

export const GlowingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full blur-[80px] opacity-20 ${
          i === 0 ? "bg-blue-500" : 
          i === 1 ? "bg-indigo-500" : 
          "bg-violet-500"
        }`}
        animate={{
          x: Array(3).fill(Math.random() * window.innerWidth * 0.8),
          y: Array(3).fill(Math.random() * window.innerHeight * 0.8),
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          width: `${200 + i * 100}px`,
          height: `${200 + i * 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

export const CyberLines = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-full h-full">
      {[...Array(5)].map((_, i) => (
        <React.Fragment key={`frag-${i}`}>
          <motion.div
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full opacity-30"
            style={{ top: `${20 + i * 15}%` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
          <motion.div
            className="absolute w-px bg-gradient-to-b from-transparent via-indigo-400 to-transparent h-full opacity-30"
            style={{ left: `${20 + i * 15}%` }}
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        </React.Fragment>
      ))}
    </div>
  </div>
);