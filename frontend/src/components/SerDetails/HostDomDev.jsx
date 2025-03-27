import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';
import CustomButton from '../buttonlink';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";

const HostDomDev = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const services = [
        {
            title: 'Reliable Hosting Solutions:',
            description: 'We offer robust hosting solutions that guarantee high uptime, ensuring your website is always accessible to your audience. Our hosting services are tailored to meet the needs of businesses of all sizes, from small startups to large enterprises.',
        },
        {
            title: 'Secure & Fast:',
            description: 'Security is a top priority in our hosting services. We provide SSL certificates, regular backups, and advanced security features to protect your website from threats. Additionally, our servers are optimized for speed, ensuring fast loading times for a seamless user experience.',
        },
        {
            title: 'Scalable Resources:',
            description: 'As your business grows, so do your hosting needs. Our hosting plans are scalable, allowing you to easily upgrade resources like bandwidth, storage, and processing power as your traffic increases. This flexibility ensures your website can handle growth without interruption.',
        },
        {
            title: 'Domain Registration & Management:',
            description: 'Choosing the right domain is crucial for your brand’s identity. We offer domain registration services that make it easy to secure the perfect domain name for your business. Our team also handles domain management, including renewals and transfers, so you can focus on your core business activities.',
        },
        {
            title: '24/7 Support:',
            description: 'We understand that issues can arise at any time, which is why our support team is available 24/7 to assist you with any hosting or domain-related concerns. Whether you need help setting up your website or troubleshooting issues, we’re here to ensure everything runs smoothly.',
        },
        {
            title: 'Managed Hosting Services:',
            description: 'For businesses that prefer to leave the technical details to the experts, we offer managed hosting services. Our team handles server management, updates, security monitoring, and performance optimization, giving you peace of mind and more time to focus on your business.',
        },
    ];

    const processSteps = [
        {
            title: 'Consultation & Planning:',
            description: 'We begin by understanding your business needs and recommending the best hosting and domain solutions to support your website\'s performance and growth.',
        },
        {
            title: 'Domain Registration & Hosting Setup:',
            description: 'We help you choose and register a domain name that reflects your brand and is easy for your audience to remember. Our team sets up your hosting environment, configuring servers, security protocols, and backups to ensure your website is ready to go live.',
        },
        {
            title: 'Website Migration (if needed):',
            description: 'If you’re moving from another hosting provider, we manage the migration process to ensure a smooth transition with minimal downtime.',
        },
        {
            title: 'Launch & Support:',
            description: 'Once everything is set up, we launch your website and provide ongoing support to address any issues and keep your website running efficiently.',
        },
        {
            title: 'Monitoring & Maintenance:',
            description: 'We continuously monitor your hosting environment, providing updates, security patches, and optimizations to ensure optimal performance.',
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
                            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r pb-7 from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            Hosting & Domain Services
                        </motion.h1>
                        <motion.h4
                            className="text-xl md:text-2xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            At Hexagon Digital Services, we provide reliable and secure hosting and domain services that lay the foundation for your online presence. In the digital world, a strong and stable web foundation is crucial for success, and we ensure your website is always up and running smoothly with our comprehensive hosting solutions.
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
                            Why Choose Our Services?
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
                            Our Service Process
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
                            At Hexagon Digital Services, we’re committed to providing reliable hosting and domain services that empower your business to thrive online. Partner with us to ensure your website is built on a strong, secure, and scalable foundation.
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
                                Start Your Online Journey
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

export default HostDomDev;