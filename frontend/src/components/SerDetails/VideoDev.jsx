import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';
import CustomButton from '../buttonlink';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";

const VideoDev = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const services = [
        {
            title: 'Creative Storytelling:',
            description: 'We believe that every video tells a story. Our editors are skilled at weaving together visuals, sound, and effects to create narratives that captivate viewers and convey your brand’s message with clarity and impact.',
        },
        {
            title: 'High-Quality Production:',
            description: 'Quality is at the core of our video editing services. We use advanced editing software and techniques to enhance your footage, ensuring crisp visuals, clear audio, and professional-grade transitions and effects that elevate your content.',
        },
        {
            title: 'Tailored to Your Needs:',
            description: 'Whether you need a promotional video, corporate presentation, social media content, or event highlights, we tailor our editing services to meet your specific requirements. Our approach is flexible, allowing us to adapt to different styles and tones that align with your vision.',
        },
        {
            title: 'Seamless Integration:',
            description: 'We work closely with you throughout the editing process to ensure the final product aligns with your expectations. Whether you provide a detailed brief or need creative direction, our team integrates your feedback to deliver a video that meets your goals.',
        },
        {
            title: 'Efficient Turnaround:',
            description: 'We understand the importance of timelines in video production. Our team is dedicated to delivering high-quality edits on time, without compromising on attention to detail. We manage our projects efficiently, ensuring that your video is ready when you need it.',
        },
        {
            title: 'Post-Production Excellence:',
            description: 'Beyond basic editing, we offer comprehensive post-production services, including color correction, audio mixing, and motion graphics. These enhancements add a professional touch to your video, making it stand out in any setting.',
        },
    ];

    const processSteps = [
        {
            title: 'Initial Consultation:',
            description: 'We start by understanding your project’s objectives, audience, and style preferences. This helps us create a tailored editing plan that aligns with your vision.',
        },
        {
            title: 'Footage Review & Planning:',
            description: 'Our editors review all provided footage and plan the edit, focusing on key moments, transitions, and overall flow to ensure a cohesive narrative.',
        },
        {
            title: 'Editing & Enhancement:',
            description: 'Using the latest editing software, we meticulously cut, trim, and arrange the footage, adding effects, transitions, and music to create a polished video.',
        },
        {
            title: 'Client Review:',
            description: 'We provide you with a draft for review, allowing you to give feedback and request adjustments. Our collaborative approach ensures that the final product meets your expectations.',
        },
        {
            title: 'Final Delivery:',
            description: 'Once approved, we deliver the final video in your desired format, optimized for the platforms where it will be showcased.',
        },
        {
            title: 'Ongoing Support:',
            description: 'We offer additional support for future edits or updates, ensuring that your video content remains relevant and impactful over time.',
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
                            className="text-4xl md:text-6xl font-bold mb-6 pb-7 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            Video Editing
                        </motion.h1>
                        <motion.h4
                            className="text-xl md:text-2xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            At Hexagon Digital Services, we transform raw footage into compelling stories through our professional video editing services. In a digital age where video content dominates, we ensure that your videos are not only visually appealing but also effectively communicate your message and resonate with your audience.
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
                            Our Editing Process
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
                            At Hexagon Digital Services, we’re passionate about bringing your vision to life through expertly crafted videos. Let us help you create content that engages, inspires, and leaves a lasting impression on your audience.
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
                                Start Your Video Journey
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

export default VideoDev;