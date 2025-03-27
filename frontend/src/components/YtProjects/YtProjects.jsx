import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaGoogleDrive, FaCode, FaEye, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {  CyberLines, GlowingOrbs } from "../BackgroundComponents/BackgroundComponents";

const YtProjects = () => {
    const [ytContents, setYtContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filters] = useState(['React', 'JavaScript','HTMLCSS', 'Full Stack', '3D Website', 'Apps', 'Free', 'Paid']);

    const url = 'https://hexa-backend-9y0v.onrender.com';

    const projectTypeToTag = {
        react: 'React',
        js: 'JavaScript',
        htmlcss: 'HTMLCSS',
        fullstack: 'Full Stack',
        '3d': '3D Website',
        apps: 'Apps'
    };

    useEffect(() => {
        axios
            .get(`${url}/api/ytcontent/allyt`)
            .then((response) => {
                const sortedContents = response.data.map(item => ({
                    ...item,
                    tags: projectTypeToTag[item.projectType] ? [projectTypeToTag[item.projectType]] : []
                })).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                
                setYtContents(sortedContents);
                setTotalPages(Math.ceil(sortedContents.length / itemsPerPage));
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError(err);
                setLoading(false);
            });
    }, [itemsPerPage]);

    const filteredContents = ytContents.filter(item => {
        if (selectedFilters.length === 0) return true;

        const paymentFilters = selectedFilters.filter(f => ['Free', 'Paid'].includes(f));
        const techFilters = selectedFilters.filter(f => !['Free', 'Paid'].includes(f));

        const paymentMatch = paymentFilters.length === 0 || 
                            paymentFilters.includes(item.category.charAt(0).toUpperCase() + item.category.slice(1));
        
        const techMatch = techFilters.length === 0 || 
                         techFilters.some(filter => item.tags?.includes(filter));

        return paymentMatch && techMatch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredContents.slice(indexOfFirstItem, indexOfLastItem);

    const handleFilterToggle = (filter) => {
        setCurrentPage(1);
        setSelectedFilters(prev => {
            if (prev.includes(filter)) {
                return prev.filter(f => f !== filter);
            }
            if (['Free', 'Paid'].includes(filter)) {
                return [...prev.filter(f => !['Free', 'Paid'].includes(f)), filter];
            }
            return [...prev, filter];
        });
    };

    const handlePageChange = (newPage) => {
        const page = Math.max(1, Math.min(newPage, totalPages));
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getYoutubeThumbnail = (youtubeUrl) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = youtubeUrl.match(regExp);
        return match && match[7].length === 11 
            ? `https://img.youtube.com/vi/${match[7]}/hqdefault.jpg`
            : '';
    };

    const CardWrapper = ({ children, index }) => {
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);
        const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
        const rotateY = useTransform(mouseX, [0, 300], [-10, 10]);

        return (
            <motion.div
                onHoverStart={() => document.body.style.cursor = 'none'}
                onHoverEnd={() => document.body.style.cursor = 'auto'}
                style={{ rotateX, rotateY, transformPerspective: 1000 }}
                className="relative group"
            >
                <div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ maskImage: 'radial-gradient(200px at 50% 50%, white, transparent)' }}
                />
                {children}
            </motion.div>
        );
    };

    const FilterButtons = () => (
        <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <button
                onClick={() => {
                    setSelectedFilters([]);
                    setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full transition-all ${
                    selectedFilters.length === 0
                        ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-black'
                        : 'bg-gray-800/50 hover:bg-blue-400/20 text-blue-400'
                }`}
            >
                All
            </button>

            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => handleFilterToggle(filter)}
                    className={`px-6 py-2 rounded-full transition-all ${
                        selectedFilters.includes(filter)
                            ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-black'
                            : 'bg-gray-800/50 hover:bg-blue-400/20 text-blue-400'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </motion.div>
    );

    const Pagination = () => (
        <motion.div
            className="flex justify-center items-center space-x-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 bg-gray-800/50 hover:bg-blue-400/20 border border-blue-400/20 rounded-xl backdrop-blur-sm transition-all disabled:opacity-50 disabled:hover:bg-gray-800/50"
            >
                <FaChevronLeft className="text-blue-400 text-xl" />
            </button>

            {[...Array(totalPages).keys()].map((number) => (
                <button
                    key={number + 1}
                    onClick={() => handlePageChange(number + 1)}
                    className={`px-4 py-2 rounded-xl transition-all ${
                        currentPage === number + 1
                            ? 'bg-gradient-to-br from-blue-400 to-indigo-500 text-black'
                            : 'bg-gray-800/50 hover:bg-blue-400/20 text-blue-400'
                    }`}
                >
                    {number + 1}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 bg-gray-800/50 hover:bg-blue-400/20 border border-blue-400/20 rounded-xl backdrop-blur-sm transition-all disabled:opacity-50 disabled:hover:bg-gray-800/50"
            >
                <FaChevronRight className="text-blue-400 text-xl" />
            </button>
        </motion.div>
    );

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="text-center p-6 bg-red-900/50 backdrop-blur-sm rounded-xl max-w-md"
            >
                <p className="text-red-400 text-lg">⚠️ Error loading content. Please refresh!</p>
            </motion.div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 py-12 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
                <div className="absolute inset-0 bg-[linear-gradient(#3B82F6_1px,transparent_1px),linear-gradient(to_right,#3B82F6_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            <CyberLines />
            <GlowingOrbs />
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div key={`float-${i}`} className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                            filter: 'blur(1px)'
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-transparent to-blue-900/80" />
            </div>
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(100)].map((_, i) => (
                    <motion.div
                        key={`quantum-${i}`}
                        className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            x: [0, (Math.random() - 0.5) * 200],
                            y: [0, -100 - Math.random() * 200]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            filter: 'blur(1px)'
                        }}
                    />
                ))}
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-mono drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                    <span className="text-blue-200/80">YT</span> PROJECTS
                </motion.h1>

                <FilterButtons />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems.map((item, index) => (
                        <CardWrapper key={item._id} index={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-gray-800/30 backdrop-blur-2xl rounded-2xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all overflow-hidden"
                            >
                                <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-400/10 rounded-full blur-[100px] group-hover:opacity-50 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            item.category === 'free' 
                                            ? 'bg-green-500/20 border border-green-400/40 text-green-400 text-sm font-mono shadow-[0_0_15px_rgba(0,255,0,0.3)]' 
                                            : 'bg-yellow-500/20 border border-yellow-400/40 text-yellow-400 text-sm font-mono shadow-[0_0_15px_rgba(255,255,0,0.3)]'
                                        }`}>
                                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-400/20 text-blue-400">
                                            {item.tags[0] || 'Others'}
                                        </span>
                                    </div>

                                    <div className="flex items-center mb-6 space-x-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center text-black font-bold animate-pulse">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                                        </div>
                                        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent line-clamp-2">
                                            {item.title}
                                        </h2>
                                    </div>

                                    <motion.a
                                        href={item.youtubeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block aspect-video mb-8 rounded-xl overflow-hidden transform perspective-1000 hover:rotate-x-3 hover:rotate-y-3 transition-all duration-500"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="absolute inset-0 bg-blue-400/10 backdrop-blur-sm" />
                                        <img
                                            src={getYoutubeThumbnail(item.youtubeLink)}
                                            alt={item.title}
                                            className="w-full h-full object-cover mix-blend-luminosity"
                                        />
                                        <div className="absolute inset-0 border-2 border-blue-400/30 rounded-xl" />
                                        <FaPlay className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400 text-4xl drop-shadow-xl" />
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#3B82F6_49%,transparent_51%)] bg-[size:10px_10px] opacity-20 animate-cardScan" />
                                    </motion.a>

                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { link: item.githubLink, icon: FaGithub, text: "Dummy Data" },
                                            { link: item.driveLink, icon: FaGoogleDrive, text: "Assets" },
                                            { link: item.topmateLink, icon: FaCode, text: "Get Code" },
                                            { link: item.livePreview, icon: FaEye, text: "Live Preview" },
                                        ].map((btn, btnIndex) => {
                                            const Icon = btn.icon;
                                            return (
                                                <motion.a
                                                    key={btnIndex}
                                                    href={btn.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-gray-700/30 hover:bg-blue-400/10 border border-blue-400/20 rounded-xl backdrop-blur-sm transition-all group relative overflow-hidden"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#3B82F6_49%,transparent_51%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-20 transition-opacity" />
                                                    <div className="relative z-10 flex items-center space-x-3">
                                                        <Icon className="text-blue-400 group-hover:text-white text-xl" />
                                                        <span className="text-sm font-medium text-blue-400 group-hover:text-white">
                                                            {btn.text}
                                                        </span>
                                                    </div>
                                                </motion.a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </CardWrapper>
                    ))}
                </div>

                {filteredContents.length > itemsPerPage && <Pagination />}
            </div>
            <div className="fixed top-0 left-0 w-6 h-6 border-2 border-blue-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference" />
        </div>
    );
};

export default YtProjects;
