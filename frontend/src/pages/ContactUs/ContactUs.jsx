import { motion } from "framer-motion";
import { countries as countryData } from 'country-data';
import emailjs from 'emailjs-com';
import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer/Footer';
import Navbar2 from '../../components/Navbar/Navbar2';
import BackgroundEffects from "../../components/BackgroundEffects/BackgroundEffects";

const ContactUs = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('service_nbph2o7', 'template_3g3qabi', form.current, '3f_ZmSGReyLlNQIYu')
            .then((result) => {
                toast.success('Message sent successfully! 🚀', {
                    position: "top-center",
                    theme: "dark",
                    style: {
                        background: '#1e3a8a',
                        color: '#fff',
                        border: '1px solid #3b82f6',
                    }
                });
                e.target.reset();
            })
            .catch((error) => {
                toast.error('Failed to send message 😢', {
                    position: "top-center",
                    theme: "dark",
                    style: {
                        background: '#b91c1c',
                        color: '#fff',
                        border: '1px solid #f87171',
                    }
                });
            })
            .finally(() => setIsSubmitting(false));
    };

    useEffect(() => window.scrollTo(0, 0), []);

    // Filter and map country data
    const countries = countryData.all.filter(c => c.countryCallingCodes[0]).map(c => ({
        iso: c.alpha2,
        code: `${c.countryCallingCodes[0]}`,
        name: c.name
    }));

    return (
        <div className="bg-slate-900 min-h-screen">
            <ToastContainer position="top-center" autoClose={3000} theme="dark" />

            <div className="left-0 right-0 top-0 z-50 sticky">
                <Navbar2 />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden isolate"
            >
                <BackgroundEffects />

                {/* Floating Code Elements */}
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

                {/* Contact Form Container */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative z-10 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 max-w-lg w-full border border-blue-400/30 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all"
                >
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

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                    >
                        Contact Us
                    </motion.h2>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
                                <input
                                    name="fname"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full p-3 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 transition-all"
                                    required
                                />
                            </motion.div>
                            <motion.div initial={{ x: 20 }} animate={{ x: 0 }}>
                                <input
                                    name="lname"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full p-3 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 transition-all"
                                    required
                                />
                            </motion.div>
                        </div>

                        <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
                            <div className="flex gap-2">
                   <select
                                    name="countryCode"
                                    className="w-2/3 md:w-1/3 p-3 bg-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-400/30 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    {countries
                                        .sort((a, b) => {
                                            // Ensure India is listed first
                                            if (a.iso === "IN") return -1;
                                            if (b.iso === "IN") return 1;
                                            return a.name.localeCompare(b.name);
                                        })
                                        .map((country) => (
                                            <option key={country.iso} value={country.code} className="bg-blue-900">
                                                {String.fromCodePoint(...[...country.iso.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65))} {country.code}
                                            </option>
                                        ))
                                    }
                                </select>
                                <input
                                    name="number"
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full p-3 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    required
                                />
                            </div>
                        </motion.div>

                        <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
                                required
                            />
                        </motion.div>
                        <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
                            <input
                                name="location"
                                type="text"
                                placeholder="Your Location"
                                className="w-full p-3 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
                                required
                            />
                        </motion.div>

                        <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
                            <select
                                name="services"
                                className="w-full p-3 bg-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-400/30 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="UI/UX">UI/UX Design</option>
                            </select>
                        </motion.div>

                        <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-3 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100 resize-none"
                                required
                            />
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative group"
                        >
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]'}`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="h-5 w-5 border-2 border-white/50 border-t-transparent rounded-full"
                                        />
                                        Sending...
                                    </div>
                                ) : 'Send Message'}
                            </button>
                        </motion.div>
                    </form>

                    <motion.div
                        className="mt-8 space-y-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {[
                            [FaMobileAlt, '+91 8299431275', 'tel:+918299431275'],
                            [FaMapMarkerAlt, 'Lucknow, Uttar Pradesh'],
                            [FaEnvelope, 'hexagonsservices@gmail.com', 'mailto:hexagonsservices@gmail.com']
                        ].map(([Icon, text, href], index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 5 }}
                                className="flex items-center justify-center gap-2 text-blue-300 hover:text-blue-400 transition-colors"
                            >
                                <Icon className="text-blue-400" />
                                {href ? (
                                    <a href={href} className="hover:underline">{text}</a>
                                ) : (
                                    <span>{text}</span>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="bg-gray-900 text-white">
                <Footer />
            </div>
        </div>
    );
}

export default ContactUs;
