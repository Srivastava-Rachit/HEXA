"use client";
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';
import CustomButton from '../buttonlink';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";

const WebDev = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const services = [
        {
            title: 'Tailored Solutions',
            description: 'Every business is unique, and so are our web development solutions. We take the time to understand your specific needs and goals, ensuring the final product is perfectly aligned with your brand and objectives.',
        },
        {
            title: 'Cutting-Edge Technology',
            description: 'We utilize the latest tools and frameworks, including React.js and Angular, to build websites that are fast, responsive, and future-proof. Whether it\'s a simple landing page or a complex web application, we deliver solutions that are both innovative and reliable.',
        },
        {
            title: 'Full-Stack Expertise',
            description: 'Our team excels in both front-end and back-end development. From intuitive UI/UX designs to robust backend systems, we cover every aspect of web development to deliver a seamless user experience.',
        },
        {
            title: 'SEO & Performance Optimization',
            description: 'We understand the importance of visibility and speed. Our websites are optimized for search engines and performance, ensuring that your site not only ranks well but also loads quickly on all devices.',
        },
        {
            title: 'Mobile Responsiveness',
            description: 'In today’s mobile-first world, we ensure that your website looks and functions flawlessly across all devices, providing a consistent user experience whether on a desktop, tablet, or smartphone.',
        },
        {
            title: 'Ongoing Support & Maintenance',
            description: 'Web development doesn’t end at launch. We offer ongoing support and maintenance to keep your website up-to-date with the latest trends, security updates, and performance improvements.',
        },
    ];

    const processSteps = [
        {
            title: 'Discovery & Planning:',
            description: 'We start by understanding your business, goals, and target audience. This helps us create a strategic plan tailored to your needs.',
        },
        {
            title: 'Design & Wireframing:',
            description: 'We develop a wireframe that outlines the structure of your website, focusing on UI/UX elements that enhance user engagement.',
        },
        {
            title: 'Development:',
            description: 'Utilizing the latest technologies, we bring the design to life, ensuring the site is fast, responsive, and secure.',
        },
        {
            title: 'Testing:',
            description: 'Rigorous testing is conducted to ensure your website is bug-free, performs well across all browsers and devices, and meets all your requirements.',
        },
        {
            title: 'Launch & Support:',
            description: 'After thorough testing, we launch your website and provide ongoing support to ensure it continues to perform optimally.',
        },
    ];

    return (
        <div className="bg-slate-900 min-h-screen flex flex-col">
            <div className='left-0 right-0 top-0 z-50 sticky'>
                <Navbar2 />
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative flex-1 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden isolate"
            >
                <BackgroundEffects />
                
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
                            {["<>", "</>", "{}", "()", "[]", "*"].sort(() => 0.5 - Math.random())[0]}
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            Web Development
                        </motion.h1>
                        <motion.h4
                            className="text-xl md:text-2xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            At Hexagon Digital Services, we specialize in crafting dynamic, user-centric websites that not only look
                            great but also perform exceptionally. We leverage the latest technologies and industry best practices
                            to create websites that are not just visually appealing but also highly functional, secure, and scalable.
                        </motion.h4>
                    </motion.div>

                    {/* Services Section */}
                    <motion.section 
                        className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-400/10 mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.h1 
                            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            Why Choose Our Web Development Services?
                        </motion.h1>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl bg-blue-900/20 border border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all group"
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                        animate={{
                                            x: ["-100%", "100%"],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                        }}
                                    />
                                    <h4 className="text-xl font-semibold mb-4 text-blue-400">{service.title}</h4>
                                    <p className="text-blue-200/80 leading-relaxed">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Process Section */}
                    <motion.section 
                        className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-400/10 mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            Our Development Process
                        </motion.h2>
                        
                        <div className="space-y-8 relative">
                            <div className="absolute left-1/2 w-1 h-full bg-blue-400/20 transform -translate-x-1/2" />
                            
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 md:pl-12"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-400 rounded-full ring-4 ring-blue-400/20" />
                                    <h3 className="text-2xl font-bold text-blue-300 mb-4">{step.title}</h3>
                                    <p className="text-blue-200/80 leading-relaxed">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.h3
                            className="text-2xl md:text-3xl font-bold text-center mt-16 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            We’re not just building websites; we’re building digital experiences that drive results. Partner with us to elevate your online presence with a website that truly represents your brand.
                        </motion.h3>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.div
                        className="text-center my-12"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                    >
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="relative inline-block"
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
                            <CustomButton 
                                to="/contact"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] px-8 py-4 text-lg"
                            >
                                Start Your Web Project
                            </CustomButton>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="bg-gray-900 text-white">
                <Footer />
            </div>
        </div>
    );
}

export default WebDev;