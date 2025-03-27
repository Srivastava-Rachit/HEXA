import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ to, icon: Icon, children }) => {
    return (
        <div className="mt-4 flex justify-start">
            <Link to={to} className="relative inline-flex group">
<button className="relative inline-flex h-fit w-fit rounded-full border border-blue-200/30 bg-blue-300/10 px-4 py-2 text-blue-300 outline-none ring-blue-400 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-blue-400 after:bg-opacity-0 after:blur-md after:transition-all after:duration-1000 hover:border-blue-400/40 hover:text-blue-400 after:hover:bg-opacity-20 focus:ring-2">                                <div className="flex items-center space-x-2">
                        {Icon && <Icon />}
                        <span>{children}</span>
                    </div>
                </button>
            </Link>
        </div>
    );
};

export default CustomButton;

