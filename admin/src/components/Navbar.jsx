import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SideNav from './SideNav'; // SideNav component
import Login from './Login'; // Login component
import Logo from '../assets/logo.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn, toggleSidenav, isSidenavOpen }) => {
    const [showLoginCard, setShowLoginCard] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();
    const SideNavRef = useRef(null);
    const profileRef = useRef(null);

    // Toggle login/logout behavior
    const handleAuthToggle = () => {
        if (isLoggedIn) {
            // If logged in, we let the dropdown handle logout
            setIsProfileOpen(!isProfileOpen);
        } else {
            setShowLoginCard(true); // Open login card if not logged in
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userData'); // Clear stored login data
        setIsLoggedIn(false); // Update login state
        navigate('/'); // Redirect to the login page (adjust route as needed)
    };

    // Close the login card when needed
    const handleCloseLogin = () => {
        setShowLoginCard(false);
    };

    // Close the SideNav when clicking outside
    const handleClickOutside = (event) => {
        if (SideNavRef.current && !SideNavRef.current.contains(event.target)) {

        }
    };

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleProfileClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleProfileClickOutside);
        return () => document.removeEventListener('mousedown', handleProfileClickOutside);
    }, []);

    useEffect(() => {
        if (isSidenavOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidenavOpen]);

    return (
        <>
            {/* Navbar Container */}
            <div className="flex justify-between items-center p-4 sm:p-3 md:p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg fixed top-0 left-0 w-full z-50">
                {/* Left Section - Menu Button */}
                <div className="flex items-center flex-1">
                    <button
                        onClick={toggleSidenav}
                        className="p-1 sm:p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
                        aria-label="Toggle navigation"
                    >
                        <img
                            src={Logo}
                            alt="Menu"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-300"
                            style={{ transform: isSidenavOpen ? 'rotate(180deg)' : 'none' }}
                        />
                    </button>
                </div>

                {/* Center Section - Title */}
                <div className="flex-1 flex justify-center">
                    <NavLink
                        to="/"
                        className="flex items-center space-x-2"
                    >
                        {/* Mobile: Text Only */}
                        <span className="text-lg sm:text-xl md:hidden font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            HDS
                        </span>

                        {/* Desktop: Full Text */}
                        <span className="hidden md:inline-block text-xl lg:text-2xl xl:text-3xl font-bold text-transparent 
          bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600
          hover:to-blue-600 transition-all duration-500 hover:scale-105 truncate max-w-[160px] lg:max-w-none">
                            HEXAGON DIGITAL SERVICES
                        </span>
                    </NavLink>
                </div>

                {/* Right Section - Profile */}
                <div className="flex items-center justify-end flex-1">
                    <div className="relative group" ref={profileRef}>
                        <button
                            className="flex items-center space-x-1 hover:bg-gray-100/10 p-1 sm:p-2 rounded-lg"
                            onClick={handleAuthToggle}
                            aria-label="User profile"
                        >
                            <img
                                src={Logo}
                                alt="Profile"
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                            />
                            {/* Desktop Admin Text */}
                            <span className="hidden lg:inline text-sm xl:text-base ml-1">Admin Login</span>
                            {/* Desktop Chevron */}
                            <svg
                                className={`w-4 h-4 hidden lg:block transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Profile Dropdown */}
                        <div className={`absolute right-0 ${isProfileOpen ? 'block' : 'hidden'} w-40 sm:w-48 mt-1 bg-white border rounded-lg shadow-lg z-50`}>
                            <button
                                onClick={handleLogout}
                                className="w-full px-4 py-2 text-left text-sm sm:text-base text-gray-700 hover:bg-gray-100 rounded-lg"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SideNav Component */}
            <div ref={SideNavRef}>
                <SideNav isOpen={isSidenavOpen} toggleSideNav={toggleSidenav} />
            </div>

            {/* Login Overlay */}
            {!isLoggedIn && showLoginCard && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-2">
                        <Login setIsLoggedIn={setIsLoggedIn} onClose={handleCloseLogin} />
                    </div>
                </div>
            )}
        </>

    );
};

export default Navbar;
