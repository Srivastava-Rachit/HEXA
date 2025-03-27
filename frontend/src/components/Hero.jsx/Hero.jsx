"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import IconCloudDemo from '../icon-cloud-demo';
import BackgroundEffects from "../BackgroundEffects/BackgroundEffects";
import CursorEffects from "../CursorEffects/CursorEffects";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden isolate">
      <BackgroundEffects />
      <CursorEffects />

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20 text-xs sm:text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["<>", "</>", "{}", "()", "[]", "*"].sort(() => 0.5 - Math.random())[0]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-3xl lg:max-w-none"
          >
            <div className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all overflow-hidden group">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              {/* Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#3B82F6_49%,transparent_51%)] bg-[size:10px_10px] opacity-10" />

              {/* Headings */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 relative"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 inline-block relative"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(59, 130, 246, 0.3)",
                      "0 0 15px rgba(59, 130, 246, 0.5)",
                      "0 0 5px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                >
                  Transform
                </motion.span>
                <motion.span
                  className="block mt-3 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200 font-mono relative text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(99, 102, 241, 0.3)",
                      "0 0 15px rgba(99, 102, 241, 0.5)",
                      "0 0 5px rgba(99, 102, 241, 0.3)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: 0.5,
                  }}
                >
                  Ideas Into Reality
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.div
                className="text-blue-300/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.p className="overflow-hidden whitespace-normal">
                  We architect digital experiences that blend cutting-edge technology with intuitive design.
                  Specializing in full-stack development, AI integration, and immersive web solutions.
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                whileHover="hover"
                whileTap="tap"
                className="relative inline-block group w-full sm:w-auto"
                initial="rest"
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 blur-3xl rounded-3xl"
                  variants={{
                    rest: { opacity: 0.3, scale: 1 },
                    hover: { opacity: 0.6, scale: 1.2 }
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Particle effect container */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      variants={{
                        rest: { opacity: 0, scale: 0 },
                        hover: { 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: `calc(${Math.cos((i * 45) * (Math.PI/180)) * 2}rem)`,
                          y: `calc(${Math.sin((i * 45) * (Math.PI/180)) * 2}rem)`,
                          transition: { 
                            duration: 1.2,
                            delay: i * 0.05,
                            repeat: Infinity
                          }
                        }
                      }}
                    />
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-xl font-bold text-white overflow-hidden isolation isolate"
                  style={{
                    boxShadow: "0 4px 24px -2px rgba(59, 130, 246, 0.4)",
                    border: "1px solid rgba(99, 102, 241, 0.3)"
                  }}
                >
                  {/* Multi-layer shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    variants={{
                      rest: { x: "-100%", rotate: -45 },
                      hover: { x: "200%", transition: { duration: 0.8, ease: "linear" } }
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10"
                    variants={{
                      rest: { opacity: 0.5 },
                      hover: { opacity: 0.8 }
                    }}
                  />
                  
                  {/* Content */}
                  <motion.div
                    className="flex items-center gap-3 relative"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.05 }
                    }}
                  >
                    <RiContactsFill className="text-2xl sm:text-3xl transform transition-all group-hover:rotate-12" />
                    <span className="text-sm sm:text-lg font-semibold tracking-wide relative">
                      Initiate Project
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-white/80"
                        variants={{
                          rest: { width: 0 },
                          hover: { width: "100%" }
                        }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      />
                    </span>
                  </motion.div>

                  {/* Border animation */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent"
                    variants={{
                      rest: {
                        background: "linear-gradient(45deg, transparent 50%, rgba(99,102,241,0.3) 100%)"
                      },
                      hover: {
                        background: [
                          "linear-gradient(45deg, transparent 50%, rgba(99,102,241,0.3) 100%)",
                          "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, transparent 50%)"
                        ],
                        transition: { duration: 1.2, repeat: Infinity }
                      }
                    }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {["AI", "Web3", "React", "Next.js", "Three.js"].map((tech, i) => (
                <motion.div
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-900/30 backdrop-blur-sm rounded-full text-blue-300 border border-blue-400/20 text-xs sm:text-sm relative overflow-hidden group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Icon Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0"
          >
            <IconCloudDemo />
            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-blue-400/50"
                  animate={{
                    x: [Math.random() * 300 - 150, Math.random() * 300 - 150, Math.random() * 300 - 150],
                    y: [Math.random() * 300 - 150, Math.random() * 300 - 150, Math.random() * 300 - 150],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;