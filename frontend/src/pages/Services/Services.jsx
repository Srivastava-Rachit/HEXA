import { motion } from "framer-motion"; 
import React, { useEffect } from 'react'; 
import Footer from '../../components/Footer/Footer'; 
import Navbar2 from '../../components/Navbar/Navbar2'; 
import CustomButton from '../../components/buttonlink'; 
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects"; 

// images
import APPDEV from '../../assets/APPDEV.png';
import HOSTDOM from '../../assets/HOSTDOM.png';
import LOGODES from '../../assets/LOGODES.png';
import UIUX from '../../assets/UIUX.png';
import VIDEDIT from '../../assets/VIDEDIT.png';
import WEBDEV from '../../assets/WEBDEV.png';

// icons
import { GiCircuitry, GiFilmProjector } from "react-icons/gi";
import { MdDomain } from "react-icons/md";
import { PiSquareLogoBold } from "react-icons/pi";
import { SiFlutter, SiReact } from "react-icons/si";

const Services = () => { 
    useEffect(() => window.scrollTo(0, 0), []); 

    const services = [ 
        { 
            img: WEBDEV, 
            title: "Web Development", 
            icon: <SiReact />, 
            to: '/webdev', 
            content: `At Hexagon Digital Services, we specialize in crafting dynamic, user-centric websites...`, 
            color: "from-blue-400 to-indigo-400" 
        }, 
        { 
            img: APPDEV, 
            title: "App Development", 
            icon: <SiFlutter />, 
            to: '/appdev', 
            content: `At Hexagon Digital Services, we craft exceptional App applications tailored to meet the needs...`, 
            color: "from-purple-400 to-pink-400" 
        }, 
        { 
            img: VIDEDIT, 
            title: "Video Editing", 
            icon: <GiFilmProjector />, 
            to: '/videodev', 
            content: `At Hexagon Digital Services, we transform raw footage into compelling stories...`, 
            color: "from-green-400 to-teal-400" 
        }, 
        { 
            img: HOSTDOM, 
            title: "Hosting and Domain Services", 
            icon: <MdDomain />, 
            to: '/hostdomdev', 
            content: `At Hexagon Digital Services, we provide reliable and secure hosting and domain services...`, 
            color: "from-red-400 to-orange-400" 
        }, 
        { 
            img: LOGODES, 
            title: "Logo Design", 
            icon: <PiSquareLogoBold />, 
            to: '/logodev', 
            content: `At Hexagon Digital Services, we understand that a logo is more than just a visual symbol...`, 
            color: "from-yellow-400 to-amber-400" 
        }, 
        { 
            img: UIUX, 
            title: "UI/UX", 
            icon: <GiCircuitry />, 
            to: '/uiuxdev', 
            content: `At Hexagon Digital Services, we create intuitive and visually stunning user interfaces...`, 
            color: "from-blue-600 to-indigo-600" 
        } 
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
                <div className="max-w-7xl mx-auto relative z-10"> 
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        className="text-center mb-16" 
                    > 
                        <h1 className="text-4xl md:text-6xl font-bold mb-4"> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"> 
                                Our Services 
                            </span> 
                        </h1> 
                        <motion.h4 
                            className="text-2xl md:text-3xl text-blue-200" 
                            initial={{ scale: 0.9 }} 
                            animate={{ scale: 1 }} 
                        > 
                            Digital Excellence Delivered 
                        </motion.h4> 
                    </motion.div> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> 
                        {services.map((service, index) => ( 
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 50 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ delay: index * 0.1 }} 
                                className="relative group" 
                            > 
                                <div className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-xl rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all overflow-hidden"> 
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" 
                                        animate={{ 
                                            x: ["-100%", "100%"], 
                                            opacity: [0, 0.5, 0], 
                                        }} 
                                        transition={{ 
                                            repeat: Infinity, 
                                            duration: 3, 
                                            ease: "easeInOut", 
                                        }} 
                                    /> 
                                    <motion.div whileHover={{ y: -5 }}> 
                                        <img 
                                            src={service.img} 
                                            alt={service.title} 
                                            className="w-full h-48 object-cover border-b border-blue-400/30" 
                                        /> 
                                        <div className="p-6"> 
                                            <h2 className={`text-xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}> 
                                                {service.title} 
                                            </h2> 
                                            <p className="text-blue-200/90 leading-relaxed mb-6"> 
                                                {service.content} 
                                            </p> 
                                            <motion.div whileHover={{ scale: 1.05 }}> 
                                                <CustomButton 
                                                    to={service.to} 
                                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]" 
                                                > 
                                                    <span>Know More</span> 
                                                    <motion.span 
                                                        className="ml-2" 
                                                        whileHover={{ rotate: 360 }} 
                                                        transition={{ duration: 0.5 }} 
                                                    > 
                                                        {service.icon} 
                                                    </motion.span> 
                                                </CustomButton> 
                                            </motion.div> 
                                        </div> 
                                    </motion.div> 
                                </div> 
                            </motion.div> 
                        ))} 
                    </div> 
                </div> 
            </motion.div> 
            <div className="bg-gray-900 text-white">
                <Footer />
            </div>
        </div> 
    ); 
} 

export default Services;