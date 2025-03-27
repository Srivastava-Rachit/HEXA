import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import img1 from "../../assets/company logo.png"; // Adjust the path as needed
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.3 },
    }),
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="relative  top-0 z-50  flex h-fit w-full border-b border-white/10 bg-[#020d1f]/80 backdrop-blur-xl"
      >
        <nav className="container  flex items-center justify-between py-4">
        {/* Logo */}
<motion.div
  custom={0}
  variants={itemVariants}
  className="text-2xl font-medium text-white md:text-3xl"
>
  <Link to="/" className="flex items-center gap-3">
    {/* Logo Image */}
    <motion.img 
      src={img1} 
      alt="Hexagon Logo"
      className="w-12 h-12 p-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
    
    {/* Text */}
    <div className="flex items-center gap-2">
    <span className="bg-gradient-to-r from-blue-300 py-2 to-white bg-clip-text text-transparent">
                Hexagon 
              </span>
              <span className="text-white/70 py-2"> Digital Services</span>
    </div>
  </Link>
</motion.div>

          {/* Desktop Menu */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block"
          >
            <ul className="flex items-center gap-8">
              {[
                { to: "/", text: "Home" },
                { to: "/contact", text: "Contact" },
                { to: "/projectsyt", text: "Projects" },
                { to: "/gamesyt", text: "Games" },
                { to: "/aboutus", text: "About" },
              ].map((link, i) => (
                <motion.li
                  key={link.to}
                  custom={i + 1}
                  variants={itemVariants}
                  className="relative"
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => 
                      `relative px-2 py-1 text-sm font-medium transition-colors
                      ${isActive ? 
                        "text-blue-300" : 
                        "text-white/70 hover:text-blue-200"}`
                    }
                  >
                    {link.text}
                    {link.to === "/services" && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-px w-full bg-blue-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </NavLink>
                </motion.li>
              ))}

              {/* Services Dropdown */}
              <motion.li
                custom={5}
                variants={itemVariants}
                className="relative group"
                onHoverStart={() => setIsServicesOpen(true)}
                onHoverEnd={() => setIsServicesOpen(false)}
              >
                <NavLink to='/services' className="flex items-center gap-1 px-2 py-1 text-sm font-medium cursor-pointer text-white/70 hover:text-blue-200">
                  Services
                  <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>

                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={isServicesOpen ? { opacity: 1, y: 0 } : {}}
                  className="absolute top-full left-0 mt-2 w-48 origin-top rounded-xl bg-white/5 backdrop-blur-xl p-2 shadow-xl border border-white/10"
                >
                  {[
                    { to: "/webdev", text: "Web Development" },
                    { to: "/appdev", text: "App Development" },
                    { to: "/uiuxdev", text: "UI/UX Design" },
                    { to: "/videodev", text: "Video Editing" },
                    { to: "/logodev", text: "Logo Design" },
                    { to: "/hostdomdev", text: "Hosting & Domain" },
                  ].map((service) => (
                    <li key={service.to}>
                      <Link
                        to={service.to}
                        className="block px-3 py-2 text-sm rounded-lg transition-colors text-white/80 hover:bg-white/5 hover:text-blue-200"
                      >
                        {service.text}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </motion.li>

              {/* Contact Button */}
              <motion.li
                custom={6}
                variants={itemVariants}
                className="flex items-center gap-2 pl-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/40 to-blue-400/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                >
                  <BiPhoneCall className="text-blue-300" />
                  <a
                    href="tel:+918299431275"
                    className="text-sm font-medium text-white/90"
                  >
                    +91 8299431275
                  </a>
                </motion.div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.div
            custom={7}
            variants={itemVariants}
            className="flex items-center gap-4 md:hidden"
          >
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer text-white/80 transition-all hover:text-blue-300"
                size={28}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer text-white/80 transition-all hover:text-blue-300"
                size={28}
              />
            )}
          </motion.div>
        </nav>
      </motion.header>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar2;