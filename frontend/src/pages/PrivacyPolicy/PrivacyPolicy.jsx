"use client";

import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';
import Navbar2 from '../../components/Navbar/Navbar2';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";
import CursorEffects from "../../components/CursorEffects/CursorEffects";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const floatingSymbols = ["<>", "</>", "{}", "()", "[]", "*"];

  // Helper functions for section content
  const getSectionTitle = (section) => {
    const titles = [
      "Introduction",
      "Information We Collect",
      "How We Use Your Information",
      "Information Sharing",
      "Data Security",
      "Data Retention",
      "Your Rights",
      "Cookies and Tracking Technologies",
      "Changes to This Privacy Policy",
      "Contact Information"
    ];
    return titles[section - 1];
  };

  const sectionContents = {
    1: `Welcome to Hexagon Digital Services. We acknowledge the significance of your privacy and value the
    trust you place in us regarding the careful and responsible collection and processing of your
    information. This Privacy Policy is in accordance with the Indian Information Technology Act, 2000
    (“IT Act”) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
    (“IT Rules”). We respect your privacy and are committed to protecting the personal information you
    share with us.`,

    2: `<b>Personal Information:</b> When you engage with us for services, we may collect personal details such as your name,
    email address, phone number, and billing information.
    <br/><br/>
    <b>Technical Information:</b> We may collect information related to your interaction with our websites, including
    IP addresses, browser types, device information, and other similar data.
    <br/><br/>
    <b>Content and Usage Data:</b> For services like web and app development, video editing, or hosting, we may collect
    content that you provide, including text, images, videos, and other materials necessary to complete the service.`,

    3: `<b>Service Provision:</b> To deliver the services you have requested, including web and app development, video editing,
    web hosting, and maintenance.
    <br/><br/>
    <b>Communication:</b> To contact you regarding your projects, updates, promotional offers, or any inquiries
    you may have.
    <br/><br/>
    <b>Billing and Payments:</b> To process payments and manage billing.
    <br/><br/>
    <b>Service Improvement:</b> To analyze and enhance our services, improve user experience, and troubleshoot issues.`,

    4: `<b>Service Providers:</b> We may share information with third-party vendors or partners who assist us in delivering
    our services. These third parties are obligated to maintain the confidentiality and security of your information.
    <br/><br/>
    <b>Legal Requirements:</b> We may disclose your information if required by law, regulation, or legal process, or to
    protect our rights or the rights of others.`,

    5: `We implement appropriate technical and organizational measures to protect your information from unauthorized
    access, loss, or misuse. This includes encryption, access controls, and regular security audits. However, no system
    is completely secure, and we cannot guarantee the absolute security of your information.`,

    6: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was
    collected or as required by law. Typical retention periods range from 2-7 years depending on the type of data and
    legal obligations. When no longer needed, we will securely delete or anonymize your information.`,

    7: `<b>Access and Update:</b> Request access to the personal information we hold about you and update any inaccuracies.
    <br/><br/>
    <b>Withdraw Consent:</b> Withdraw consent for processing your personal information at any time, where applicable.
    <br/><br/>
    <b>Data Deletion:</b> Request the deletion of your personal information, subject to certain legal or contractual
    obligations.`,

    8: `We use cookies and similar tracking technologies to enhance your experience and analyze website traffic.
    These help us remember your preferences, understand user behavior, and improve our services. You can manage
    your cookie preferences through your browser settings or our cookie consent banner.`,

    9: `We may update this Privacy Policy from time to time. Significant changes will be notified through our website
    or direct communication. The "Effective Date" at the top will indicate when the latest revisions were made. We
    encourage you to review this policy periodically.`,

    10: `Hexagon Digital Services<br/>
    Email: <a href="mailto:hexagonsservices@gmail.com" class="text-purple-400 hover:text-blue-300">hexagonsservices@gmail.com</a><br/>
    Address: Lucknow, Uttar Pradesh<br/>
    Phone: <a href="tel:8299431275" class="text-purple-400 hover:text-blue-300">8299431275</a><br/><br/>
    For data protection inquiries, please include "Privacy Request" in your subject line.`
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
        <div className="left-0 right-0 top-0 z-50 sticky">
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
              {/* Updated overlay with pointer-events-none */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 pointer-events-none" />
              <div className="relative z-10">
                <motion.h1
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-center pb-7 mb-8 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                >
                  Privacy Policy
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
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((section, index) => (
                    <motion.div
                      key={section}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-colors"
                    >
                      {/* Section overlay updated with pointer-events-none */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                        {section}. {getSectionTitle(section)}
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

export default PrivacyPolicy;
