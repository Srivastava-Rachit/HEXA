import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CursorEffects = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-blue-400/90 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-screen shadow-[0_0_20px_#3B82F6] animate-pulse"
      />

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-400/10 fixed"
            style={{
              left: 0,
              top: 0,
              scale: 1 - i * 0.1,
            }}
            animate={{
              left: cursorRef.current ? Number.parseInt(cursorRef.current.style.left || "0") : 0,
              top: cursorRef.current ? Number.parseInt(cursorRef.current.style.top || "0") : 0,
            }}
            transition={{
              duration: 0.1 * (i + 1),
              ease: "linear",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CursorEffects;