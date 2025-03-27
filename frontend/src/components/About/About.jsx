import { motion } from "framer-motion";
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";

// Images
import Ana from '../../assets/Ana.png';
import Pro from '../../assets/Pro.png';
import Dep from '../../assets/Dep.png';
import Cont from '../../assets/Cont.png';
import DESDEV from '../../assets/DESDEV.jpg';
import TQA from '../../assets/TQA.jpg';

const About = () => {
    const services = [
        { 
            img: Ana, 
            title: "Discovery and Analysis", 
            content: "We begin by engaging with our clients to understand their business goals, challenges, and unique requirements through thorough discussions and in-depth analysis." 
        },
        { 
            img: DESDEV, 
            title: "Design and Development", 
            content: "Our skilled developers bring ideas to life using latest technologies and best practices to create scalable, secure, and user-friendly solutions." 
        },
        { 
            img: Pro, 
            title: "Customized Proposal", 
            content: "We develop tailored proposals outlining effective software solutions designed to meet specific needs and budgets." 
        },
        { 
            img: TQA, 
            title: "Testing and Quality Assurance", 
            content: "Rigorous testing ensures our software meets highest quality standards through comprehensive QA processes." 
        },
        { 
            img: Dep, 
            title: "Deployment and Support", 
            content: "Seamless deployment with ongoing support and maintenance for optimal software performance." 
        },
        { 
            img: Cont, 
            title: "Continuous Improvement", 
            content: "Regular process reviews to align with evolving client needs and technological advancements." 
        }
    ];

    return (
        <div className="bg-slate-900 min-h-screen relative overflow-hidden isolate">
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                        About Us
                    </h1>
                    <motion.p 
                        className="text-xl md:text-2xl text-blue-200/90 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        At <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Hexagon Digital Services</span>, 
                        we unleash infinite software potential through cutting-edge solutions. Our expert team transforms visions 
                        into reality with innovative, efficient, and quality-driven development.
                    </motion.p>
                </motion.div>

                {/* Mission Section */}
                <motion.div 
                    className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-400/10 mb-16"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                >
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.02 }}
                    >
                        Our Mission
                    </motion.h2>
                    <p className="text-lg text-blue-200/80 text-center max-w-3xl mx-auto">
                        Empower businesses with transformative software solutions through strategic innovation and 
                        cutting-edge technology. We deliver excellence by aligning with client objectives and pushing 
                        technological boundaries.
                    </p>
                </motion.div>

                {/* Services Section */}
                <div className="py-12">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                    >
                        Our Service Framework
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-xl rounded-3xl p-6 border border-blue-400/30 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <motion.div className="overflow-hidden rounded-xl">
                                    <img 
                                        src={service.img} 
                                        alt={service.title} 
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </motion.div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-3 text-blue-300">{service.title}</h3>
                                    <p className="text-blue-200/80 text-sm">{service.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Commitment Section */}
                <motion.div 
                    className="py-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-8 pb-7 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.02 }}
                    >
                        Unwavering Commitment
                    </motion.h2>
                    <p className="text-xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed">
                        We deliver beyond expectations through continuous innovation and client-focused solutions. 
                        Our passion for excellence ensures every project drives measurable success and lasting impact.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;