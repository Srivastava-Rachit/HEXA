import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';
import CustomButton from '../buttonlink';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";

const LogoDev = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const services = [
        {
            title: 'Custom Designs:',
            description: 'We don’t believe in one-size-fits-all. Every logo we create is customized to reflect your brand’s personality, values, and mission. Our designers work closely with you to understand your vision and translate it into a distinctive logo that embodies your brand’s essence.',
        },
        {
            title: 'Creative Expertise:',
            description: 'Our team of experienced designers brings creativity and innovation to the table, ensuring that your logo is not only visually appealing but also meaningful. We explore various design elements, such as typography, color, and symbolism, to craft a logo that tells your brand’s story.',
        },
        {
            title: 'Versatility & Scalability:',
            description: 'A great logo needs to look good across all platforms and mediums, whether it’s on a business card, website, or billboard. We design logos that are versatile and scalable, ensuring they maintain their impact and clarity in any size or format.',
        },
        {
            title: 'Brand Consistency:',
            description: 'Your logo is a key element of your brand identity. We design logos that align with your overall branding strategy, ensuring consistency across all your marketing materials and communication channels.',
        },
        {
            title: 'Timely Delivery:',
            description: 'We value your time and understand the importance of meeting deadlines. Our design process is efficient and collaborative, allowing us to deliver high-quality logos on time, without compromising on creativity or detail.',
        },
        {
            title: 'Revisions & Collaboration:',
            description: 'We believe in a collaborative approach to logo design. We provide multiple concepts and iterations, welcoming your feedback to refine the design until it perfectly represents your brand. Your satisfaction is our top priority.',
        },
    ];

    const processSteps = [
        {
            title: 'Brand Discovery:',
            description: 'We start by getting to know your brand—its values, target audience, and market positioning. This discovery phase helps us create a logo that truly represents your business.',
        },
        {
            title: 'Concept Development:',
            description: 'Based on our research and discussions, we develop a range of logo concepts, exploring different styles and ideas. These initial designs serve as the foundation for further refinement.',
        },
        {
            title: 'Design & Refinement:',
            description: 'After reviewing the initial concepts with you, we refine the chosen design, making adjustments to elements like color, typography, and layout to ensure it meets your expectations.',
        },
        {
            title: 'Finalization:',
            description: 'Once the design is approved, we finalize the logo, preparing it in various formats suitable for both print and digital use. We also provide guidelines for using the logo to maintain brand consistency.',
        },
        {
            title: 'Delivery & Support:',
            description: 'We deliver the final logo files in multiple formats, including vector files for scalability. Additionally, we offer ongoing support for any future design needs or adjustments.',
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
                            className="text-4xl md:text-6xl  font-bold mb-6 pb-10 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            Logo Design
                        </motion.h1>
                        <motion.h4
                            className="text-xl md:text-2xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            At Hexagon Digital Services, we understand that a logo is more than just a visual symbol—it's the face of your brand. Our logo design services are crafted to create a unique and memorable identity that resonates with your audience and sets your business apart in a crowded marketplace.
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
                            At Hexagon Digital Services, we’re dedicated to creating logos that leave a lasting impression. Let us help you build a strong visual identity that captures the essence of your brand and connects with your audience.
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
                                Start Your Brand Journey
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

export default LogoDev;