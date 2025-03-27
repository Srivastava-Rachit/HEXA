"use client";

import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';
import Navbar2 from '../../components/Navbar/Navbar2';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";
import CursorEffects from "../../components/CursorEffects/CursorEffects";
import { useEffect } from "react";

const Tnc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const floatingSymbols = ["<>", "</>", "{}", "()", "[]", "*"];

  const sectionContents = {
    1: `Hexagon Digital Services provides a range of digital solutions, including but not limited to web
    and app development, video editing, web hosting, and maintenance. The specific details of each
    project will be outlined in a separate agreement or statement of work.`,

    2: `<b>Pricing:</b> Our service fees will be outlined in the project agreement or invoice. All prices are in INR.
    <br/><br/>
    <b>Payment Schedule:</b> Payments are typically structured into milestones. A deposit may be
    required before work begins, with the remaining balance due upon project completion.
    <br/><br/>
    <b>Late Payments:</b> Late payments may incur additional fees. Failure to pay may result in
    service suspension.`,

    3: `<b>Client Content:</b> You retain all rights to any content you provide. We receive a license to use it for project completion.
    <br/><br/>
    <b>Our Work:</b> Upon full payment, you receive rights to final deliverables. We reserve portfolio rights unless otherwise agreed.`,

    4: `We maintain strict confidentiality of your sensitive information. No disclosure to third parties without consent,
    except as required by law. All team members sign NDAs for client projects.`,

    5: `<b>Service Warranty:</b> While we strive for quality, we don't guarantee error-free services.
    <br/><br/>
    <b>Liability Limit:</b> We're not liable for indirect damages. Total liability capped at amount paid for services.`,

    6: `Either party may terminate with written notice. Payment due for services rendered. Advance payments may be
    non-refundable based on termination circumstances.`,

    7: `We may update these terms periodically. Continued service use constitutes acceptance of changes.
    Major changes will be communicated via email or platform notification.`,

    8: `These Terms are governed by Indian law. Any disputes subject to exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.`,

    9: `Hexagon Digital Services<br/>
    Email: <a href="mailto:hexagonsservices@gmail.com" class="text-purple-400 hover:text-blue-300">hexagonsservices@gmail.com</a><br/>
    Address: Lucknow, Uttar Pradesh<br/>
    Phone: <a href="tel:8299431275" class="text-purple-400 hover:text-blue-300">8299431275</a>`
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden isolate">
      <BackgroundEffects />
      <CursorEffects />

      {/* Floating symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
            {floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="sticky top-0 z-50">
          <Navbar2 />
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-12 px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-gray-800/60 backdrop-blur-2xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 pointer-events-none" />
              <div className="relative z-10">
                <motion.h1
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                >
                  Terms & Conditions
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-blue-300 text-center mb-8 text-lg font-light"
                >
                  Effective Date:{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    29/08/2024
                  </span>
                </motion.p>

                <motion.div className="space-y-12 text-gray-300">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((section, index) => (
                    <motion.div
                      key={section}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-colors"
                    >
                      {/* Overlay with pointer-events disabled */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                        {section}. {Object.keys(sectionContents)[section - 1]}
                      </h2>
                      <div
                        className="space-y-4 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sectionContents[section] }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="bg-gray-900 text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Tnc;
