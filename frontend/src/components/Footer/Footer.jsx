"use client"

import React from "react";
import {
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import img1 from "../../assets/company logo.png";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1.2, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 0.6 } }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div className={cn(
          "absolute inset-0 rounded-full",
          "bg-gradient-to-r to-transparent",
          gradient,
          "backdrop-blur-[2px] border-2 border-white/[0.15]",
          "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
          "after:absolute after:inset-0 after:rounded-full",
          "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
        )} />
      </motion.div>
    </motion.div>
  )
}

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, url: "https://x.com/HexagonDService?t=Vv5ReZAIbXONqkq_O0ksWQ&s=09", color: "hover:text-[#1877F9]" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/hexagondigitalservices", color: "hover:text-[#E1306C]" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/company/hexagondigtial-services/", color: "hover:text-[#0A66C2]" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://www.youtube.com/@HexagonDigitalServices", color: "hover:text-[#FF0000]" },
    { icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/profile.php?id=61567156598660", color: "hover:text-[#1877F2]" },
    { icon: <MessageCircle className="w-5 h-5" />, url: "https://wa.me/918299431275", color: "hover:text-[#25D366]" },
  ];

  const footerLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/aboutus" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
    { title: "T&C", path: "/tnc" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Cancel & Refund", path: "/cancelrefund" },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.25 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }
    }),
  };

  return (
    <footer className="relative min-h-[40vh] w-full overflow-hidden bg-[#020d1f] border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/[0.1] via-transparent to-blue-400/[0.08] blur-3xl" />

      <div className="absolute inset-0 z-10 overflow-hidden">
        <ElegantShape
          delay={0.15}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-600/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%]"
        />
        <ElegantShape
          delay={0.25}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-blue-400/[0.15]"
          className="right-[-5%] top-[70%]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <img src={img1} alt="Hexagon" className="w-8 h-8" />
              <span className="text-sm text-blue-100/70 tracking-wide">Hexagon Digital Services</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100/70 group">
                <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-all" />
                <a href="mailto:hexagonsservices@gmail.com" className="hover:text-blue-300 transition-colors">
                  hexagonsservices@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-blue-100/70 group">
                <MapPin className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-all" />
                <span>Lucknow, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            className="space-y-6"
          >
            <h3 className="text-blue-300 font-bold text-lg">Navigate</h3>
            <nav className="grid grid-cols-2 gap-3">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Link
                    to={link.path}
                    className="text-blue-100/70 hover:text-blue-300 text-sm flex items-center gap-2 transition-all"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            className="space-y-6"
          >
            <h3 className="text-blue-300 font-bold text-lg">Connect</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-blue-900/20 border border-blue-300/20 ${social.color} hover:border-blue-300/40 flex items-center justify-center transition-all`}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={3}
            className="space-y-6"
          >
            <h3 className="text-blue-300 font-bold text-lg">Collaborate</h3>
            <p className="text-blue-100/70 text-sm mb-4">
              Let's create something extraordinary. Reach out for innovative partnerships.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full font-medium text-[#020d1f] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
              >
                Contact Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={4}
          className="border-t border-blue-300/20 pt-8 text-center"
        >
          <p className="text-sm text-blue-100/50">
            © 2024 Hexagon Digital Services. 
            <br />
            <span className="text-blue-300">All Right Reserved.</span>
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <span className="text-xs text-blue-400/50">v2.3.25</span>
            <span className="text-xs text-blue-400/50">#BuildDifferent</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#020d1f] via-transparent to-[#020d1f]/80 pointer-events-none" />
    </footer>
  );
};

export default Footer;
