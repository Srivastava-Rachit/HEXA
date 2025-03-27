import React from 'react'

const Home = ({ toggleSidenav }) => {

    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center mt-44 pt-32 px-4" >
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-8 animate-fade-in-down">
                        Welcome YTHDS!{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-blue-800">
                            HDS Admin
                        </span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 mb-6 animate-slide-up">
                        Wanna Start{' '}
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent event bubbling
                                toggleSidenav();
                            }}
                            className="ml-2 bg-gradient-to-b from-zinc-900 to-blue-800 text-white py-2 px-6 rounded-t-3xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-900 hover:to-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:translate-y-1"
                        >
                            Click Here
                        </button>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home