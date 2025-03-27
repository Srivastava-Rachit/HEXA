import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video from '../../assets/video1.mp4';
import AnimatedContent from "./AnimatedContant";
import CustomButton from '../buttonlink';

const BannerDetails2 = ({ reverse }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden isolate bg-slate-900 px-4 md:px-8 lg:px-16 py-16 lg:py-24">
      
      {/* Floating Code Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20"
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
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            {["</>", "{ }", "[ ]", "* *", "()", "~"].sort(() => 0.5 - Math.random())[0]}
          </motion.div>
        ))}
      </div>

      {/* Animated Glow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-[16/9] bg-gradient-radial from-blue-600/30 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Heading */}
        <AnimatedContent>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Video Editing
            </span>
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400">
              Excellence
            </span>
          </motion.h1>
        </AnimatedContent>

        {/* Content Container */}
        <motion.div
          className="relative grid items-center gap-12 rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-2xl p-8 lg:p-12 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all lg:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Shimmer Effect */}
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

          {/* Text Content */}
          <div className={`space-y-8 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
            >
              Cinematic Storytelling
            </motion.h2>

            <motion.p
              className="text-lg text-blue-200/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We transform raw footage into compelling visual narratives that captivate audiences. 
              From social media clips to feature-length productions, every frame is polished 
              with Hollywood-grade precision.
            </motion.p>

            <ul className="space-y-6">
              {[
                ["Visual Mastery", "Color grading & precision editing"],
                ["Custom Solutions", "Tailored for every platform"],
                ["Frame Perfection", "Meticulous attention to detail"],
              ].map(([title, desc], i) => (
                <motion.li
                  key={title}
                  className="p-6 rounded-xl bg-blue-900/20 border border-blue-400/20 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-blue-300 mb-2">{title}</h3>
                  <p className="text-blue-200/80">{desc}</p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block group mt-6"
            >
              <motion.div
                className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <Link
                to="/contact"
                className="relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-bold text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all"
              >
                <span className="text-lg">
                  Start Your Video Project
                  <motion.span
                    className="block h-0.5 bg-white/70 mt-1"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Video Content */}
          <motion.div
            className={`relative ${reverse ? "lg:order-1" : "lg:order-2"}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-blue-400/30 group"
              whileHover={{ y: -10 }}
            >
              <video
                src={video}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto relative z-10"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#3B82F6_49%,transparent_51%)] bg-[size:10px_10px] opacity-10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BannerDetails2;