import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiYoutube, FiList, FiPlusSquare } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';

const SideNav = ({ isOpen, toggleSidenav }) => {
    const links = [
        { to: '/ytadd', text: 'YT Add', icon: <FiPlusSquare /> },
        { to: '/ytgames', text: 'YT Games', icon: <FiYoutube /> },
        { to: '/listyt', text: 'List YT', icon: <FiList /> },
        { to: '/gamesyt', text: 'Game List YT', icon: <GiGamepad /> },
    ];

    const sidenavRef = useRef(null);

    // Enhanced click outside handling
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && sidenavRef.current && !sidenavRef.current.contains(event.target)) {
                // Check if we're clicking on the navbar toggle button
                const navbarToggle = document.querySelector('[aria-label="Toggle navigation"]');
                if (navbarToggle && !navbarToggle.contains(event.target)) {
                    if (typeof toggleSidenav === 'function') {
                        toggleSidenav();
                    }
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen, toggleSidenav]);

    return (
        <aside
            ref={sidenavRef}
            className={`fixed top-16 md:top-22 left-0 h-[calc(100vh_-_4rem)] w-full max-w-[75%] md:w-72 md:max-w-none 
            bg-gradient-to-b from-zinc-900 to-blue-800 shadow-2xl transform transition-all duration-300
             ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } z-40 overflow-hidden`}
        >
            <div className="p-6 border-b border-blue-500/20">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FiYoutube className="w-6 h-6" />
                    YouTube Manager
                </h2>
            </div>

            <nav className="h-full flex flex-col py-8">
                <ul className="space-y-2 w-full px-2 md:px-4">
                    {links.map((link) => (
                        <li key={link.to} className="group">
                            <NavLink
                                to={link.to}
                                onClick={toggleSidenav}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 md:px-6 py-4 rounded-xl transition-all duration-300
                                     ${isActive
                                        ? 'bg-white/10 text-white shadow-lg translate-x-2'
                                        : 'text-white hover:bg-white/5 hover:translate-x-2'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="text-2xl md:text-xl opacity-80">
                                            {link.icon}
                                        </span>
                                        <span className="text-base md:text-lg font-semibold tracking-wide">
                                            {link.text}
                                        </span>
                                        <div
                                            className={`ml-auto w-1.5 h-8 rounded-full transition-colors ${isActive
                                                ? 'bg-yellow-400'
                                                : 'group-hover:bg-white/20'
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Glow Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 to-transparent" />
            </div>
        </aside>
    );
};

export default SideNav;
