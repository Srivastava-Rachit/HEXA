import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';
import CustomButton from '../buttonlink';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";

const UiUxDev = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const services = [
        {
            title: 'User-Centered Design:',
            description: 'We put the user at the heart of our design process. By understanding the needs, behaviors, and pain points of your target audience, we create interfaces that are easy to navigate and enjoyable to use, ensuring a seamless user experience that drives engagement.',
        },
        {
            title: 'Innovative Design Solutions:',
            description: 'Our team combines creativity with the latest design trends to deliver innovative UI/UX solutions that make your product stand out. From sleek, modern interfaces to interactive prototypes, we ensure your digital presence is both attractive and effective.',
        },
        {
            title: 'Consistency Across Platforms:',
            description: 'Consistency is key to a strong brand identity. We design interfaces that maintain a cohesive look and feel across all platforms, whether it’s web, mobile, or tablet. This ensures that your users have a unified experience, no matter how they interact with your brand.',
        },
        {
            title: 'Responsive & Adaptive Design:',
            description: 'In today’s multi-device world, it’s essential that your digital products look and perform well on all screen sizes. Our responsive and adaptive design approach ensures that your website or app provides an optimal experience on any device, enhancing user satisfaction and accessibility.',
        },
        {
            title: 'Wireframing & Prototyping:',
            description: 'We believe in a thoughtful and structured design process. Our designers create detailed wireframes and prototypes to map out the user journey and visualize the final product before development begins. This approach helps in identifying potential issues early on, saving time and resources.',
        },
        {
            title: 'Usability Testing:',
            description: 'To ensure that our designs meet user expectations, we conduct thorough usability testing. By gathering feedback from real users, we refine and optimize the design to improve functionality and user satisfaction.',
        },
    ];

    const processSteps = [
        {
            title: 'Discovery & Research:',
            description: 'We start by understanding your business goals, target audience, and competition. This research phase helps us gather insights that inform the design process, ensuring that the final product aligns with your objectives.',
        },
        {
            title: 'Wireframing & Information Architecture:',
            description: 'We create wireframes and establish the information architecture to define the structure and layout of your product. This step is crucial in organizing content and ensuring a logical flow for users.',
        },
        {
            title: 'Visual Design:',
            description: 'Once the structure is in place, we move on to visual design, crafting a user interface that is both beautiful and functional. We focus on elements like typography, color schemes, and iconography to create a visually cohesive experience.',
        },
        {
            title: 'Prototyping & Interaction Design:',
            description: 'We develop interactive prototypes to demonstrate how the final product will work. This allows for early testing and validation of design concepts, ensuring that the user experience is intuitive and engaging.',
        },
        {
            title: 'Usability Testing & Iteration:',
            description: 'We conduct usability tests to gather feedback from real users. Based on the results, we make necessary adjustments to optimize the design and enhance the overall user experience.',
        },
        {
            title: 'Delivery & Support:',
            description: 'After finalizing the design, we provide all the necessary assets and guidelines for development. Our team also offers ongoing support to ensure that the design is implemented correctly and remains effective over time.',
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
                            className="text-4xl md:text-6xl font-bold pb-7 mb-6 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            UI/UX Design
                        </motion.h1>
                        <motion.h4
                            className="text-xl md:text-2xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            At Hexagon Digital Services, we create intuitive and visually stunning user interfaces (UI) and user experiences (UX) that resonate with your audience and elevate your brand. Our UI/UX design services are focused on crafting digital experiences that are not only aesthetically pleasing but also functional and user-friendly.
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
                            Our Design Process
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
                            At Hexagon Digital Services, our goal is to create UI/UX designs that not only meet your business needs but also delight your users. Let us help you build digital experiences that are both beautiful and highly functional.
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
                                Start Your Design Journey
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

export default UiUxDev;