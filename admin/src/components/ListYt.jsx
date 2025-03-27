import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaGoogleDrive, FaCode, FaEye, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ListYt = () => {
    const [ytContents, setYtContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [filters] = useState(['All', 'React', 'JavaScript', 'Full Stack', '3D Website', 'Apps']);

    const url = 'http://localhost:4000';

    const projectTypeToTag = {
        react: 'React',
        js: 'JavaScript',
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
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError(err);
                setLoading(false);
            });
    }, [itemsPerPage]);

    const filteredContents = ytContents.filter(item =>
        selectedFilter === 'All' || 
        item.tags.includes(selectedFilter)
    );

    const totalPages = Math.ceil(filteredContents.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredContents.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (newPage) => {
        const page = Math.max(1, Math.min(newPage, totalPages));
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getYoutubeThumbnail = (youtubeUrl) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = youtubeUrl.match(regExp);
        return match && match[7].length === 11 ? `https://img.youtube.com/vi/${match[7]}/hqdefault.jpg` : '';
    };

    const formatProjectType = (projectType) => {
        const typeMap = {
            react: 'React',
            fullstack: 'Full Stack',
            js: 'JavaScript',
            '3d': '3D Website',
            apps: 'Apps',
            others: 'Others'
        };
        return typeMap[projectType] || projectType;
    };

    const FilterButtons = () => (
        <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => { setSelectedFilter(filter); setCurrentPage(1); }}
                    className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                        selectedFilter === filter
                            ? 'bg-blue-400/30 text-blue-400 border border-blue-400/40'
                            : 'bg-zinc-700/30 hover:bg-blue-400/20 text-zinc-300'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </motion.div>
    );

    const Pagination = () => (
        <motion.div
            className="flex justify-center items-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 bg-zinc-700/30 hover:bg-blue-400/20 border border-zinc-600 rounded-lg backdrop-blur-sm transition-all disabled:opacity-50"
            >
                <FaChevronLeft className="text-blue-400 text-sm" />
            </button>

            {[...Array(totalPages).keys()].map((number) => (
                <button
                    key={number + 1}
                    onClick={() => handlePageChange(number + 1)}
                    className={`px-3 py-1 rounded-lg transition-all text-sm ${
                        currentPage === number + 1
                            ? 'bg-blue-400/30 text-blue-400 border border-blue-400/40'
                            : 'bg-zinc-700/30 hover:bg-blue-400/20 text-zinc-300'
                    }`}
                >
                    {number + 1}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 bg-zinc-700/30 hover:bg-blue-400/20 border border-zinc-600 rounded-lg backdrop-blur-sm transition-all disabled:opacity-50"
            >
                <FaChevronRight className="text-blue-400 text-sm" />
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
        <div className="min-h-screen bg-gradient-to-br from-black to-blue-800 py-12 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
                <div className="absolute inset-0 bg-[linear-gradient(#3B82F6_1px,transparent_1px),linear-gradient(to_right,#3B82F6_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                >
                    Your YT Content
                </motion.h1>

                <FilterButtons />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-zinc-800/50 backdrop-blur-lg rounded-xl p-6 border border-zinc-700 hover:border-blue-400 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col"
                        >
                            <div className="flex items-center my-4 h-20">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-400 rounded-full flex items-center justify-center text-zinc-900 font-bold mr-3 shrink-0">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <div className="flex gap-2 mt-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            item.category === 'free' 
                                            ? 'bg-green-400/20 text-green-400' 
                                            : 'bg-purple-400/20 text-purple-400'
                                        }`}>
                                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                        </span>
                                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-400/20 text-blue-400">
                                            {formatProjectType(item.projectType)}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-zinc-200 group-hover:text-blue-400 transition-colors line-clamp-6 mb-4 leading-tight">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                            <a
                                href={item.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block aspect-video overflow-hidden rounded-lg my-6"
                            >
                                <img
                                    src={getYoutubeThumbnail(item.youtubeLink)}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent flex items-center justify-center">
                                    <div className="w-12 h-12 bg-blue-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <FaPlay className="text-blue-400 text-2xl" />
                                    </div>
                                </div>
                            </a>
                            <div className="grid grid-cols-2 gap-3 mt-auto">
                                {[
                                    { link: item.githubLink, icon: FaGithub, text: "GitHub" },
                                    { link: item.driveLink, icon: FaGoogleDrive, text: "Assets" },
                                    { link: item.topmateLink, icon: FaCode, text: "Get Code" },
                                    { link: item.livePreview, icon: FaEye, text: "Live Preview" },
                                ].map((btn, btnIndex) => (
                                    <a
                                        key={btnIndex}
                                        href={btn.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 h-12 flex items-center justify-center space-x-2 bg-zinc-700/50 hover:bg-blue-400/20 rounded-lg backdrop-blur-sm transition-all group/btn"
                                    >
                                        <btn.icon className="text-blue-400 group-hover/btn:text-white shrink-0" />
                                        <span className="text-zinc-300 group-hover/btn:text-blue-400 text-sm truncate">
                                            {btn.text}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredContents.length > itemsPerPage && <Pagination />}
            </div>
        </div>
    );
};

export default ListYt;