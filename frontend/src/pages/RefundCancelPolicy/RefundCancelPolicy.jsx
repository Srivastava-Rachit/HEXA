"use client";

import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';
import Navbar2 from '../../components/Navbar/Navbar2';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";
import CursorEffects from "../../components/CursorEffects/CursorEffects";
import { useEffect } from "react";

const RefundCancelPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const floatingSymbols = ["<>", "</>", "{}", "()", "[]", "*"];

  const sectionContents = {
    1: `<b>Project Initiation:</b> Once started, cancellation must be requested via email to 
    <a href="mailto:hexagonsservices@gmail.com" class="text-purple-400 hover:text-blue-300">hexagonsservices@gmail.com</a>.
    <br/><br/>
    <b>Pre-Development:</b> Cancel before work begins for full refund (minus processing fees).
    <br/><br/>
    <b>Post-Development:</b> Pay for completed work. Costs deducted from deposit, balance invoiced if needed.`,

    2: `<b>Partial Refunds:</b> Possible for incomplete work at our discretion.
    <br/><br/>
    <b>Non-Refundable:</b> Domain registrations, hosting, third-party licenses, and non-transferable services.
    <br/><br/>
    <b>Processing:</b> Approved refunds issued within 14 business days via original method.`,

    3: `No refunds after final delivery approval. Client must review deliverables thoroughly before sign-off. 
    Change requests post-approval may incur additional charges.`,

    4: `Contact us within 30 days of completion at 
    <a href="mailto:hexagonsservices@gmail.com" class="text-purple-400 hover:text-blue-300">hexagonsservices@gmail.com</a> 
    to discuss concerns. We commit to fair resolution through mutual discussion.`,

    5: `Exceptional cases reviewed individually. Refunds outside standard policy terms require management approval 
    and documentation of service failure.`,

    6: `Hexagon Digital Services<br/>
    Email: <a href="mailto:hexagonsservices@gmail.com" class="text-purple-400 hover:text-blue-300">hexagonsservices@gmail.com</a><br/>
    Address: Lucknow, Uttar Pradesh<br/>
    Phone: <a href="tel:8299431275" class="text-purple-400 hover:text-blue-300">8299431275</a>`
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden isolate">
      <BackgroundEffects />
      <CursorEffects />

      {/* Floating symbols background */}
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
              {/* Updated main overlay with pointer-events-none */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 pointer-events-none" />
              <div className="relative z-10">
                <motion.h1
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                >
                  Refund & Cancellation Policy
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
                  {[1, 2, 3, 4, 5, 6].map((section, index) => (
                    <motion.div
                      key={section}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-colors"
                    >
                      {/* Updated section overlay with pointer-events-none */}
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

export default RefundCancelPolicy;
