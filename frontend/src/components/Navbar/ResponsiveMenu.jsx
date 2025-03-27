import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi"; 
import img1 from "../../assets/company logo.png";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef, setShowMenu]);

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.3 }
    })
  };

  return (
    <motion.div
      ref={menuRef}
      initial={{ x: "-100%" }}
      animate={{ x: showMenu ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed inset-y-0 z-20 mt-20 flex h-screen w-[75%] flex-col justify-between bg-[#020d1f]/95 backdrop-blur-xl border-r border-white/10 px-6 pb-8 pt-20 shadow-2xl md:hidden"
    >
      {/* Logo Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-center gap-4 pb-8 border-b border-white/10"
      >
        <motion.img
          src={img1}
          alt="Hexagon Logo"
          className="w-12 h-12 rounded-lg border border-white/20 bg-white/5 p-1"
          variants={itemVariants}
          custom={0}
        />
        <motion.div
          variants={itemVariants}
          custom={1}
          className="flex flex-col"
        >
          <span className="text-lg font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Hexagon
          </span>
          <span className="text-xs font-medium text-white/60">
            Digital Services
          </span>
        </motion.div>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex-1 pt-8">
        <motion.ul 
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {[
            { to: "/", text: "Home" },
            { to: "/services", text: "Services" },
            { to: "/contact", text: "Contact" },
            { to: "/aboutus", text: "About Us" },
            { to: "/projectsyt", text: "Projects" },
            { to: "/gamesyt", text: "Games" },
          ].map((link, i) => (
            <motion.li
              key={link.to}
              variants={itemVariants}
              custom={i + 2}
            >
              <Link
                to={link.to}
                onClick={() => setShowMenu(false)}
                className="flex items-center py-2 text-sm font-medium text-white/80 transition-colors hover:text-blue-300 hover:pl-2"
              >
                {link.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Footer */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        custom={8}
        className="pt-8 border-t border-white/10 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <BiPhoneCall className="text-blue-300" />
          <a
            href="tel:+918299431275"
            className="text-sm font-medium text-white/80 hover:text-blue-300"
          >
            +91 8299431275
          </a>
        </div>
        <p className="text-xs text-white/50">
          © 2024 Hexagon Digital Services
          <br />
          All rights reserved
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ResponsiveMenu;