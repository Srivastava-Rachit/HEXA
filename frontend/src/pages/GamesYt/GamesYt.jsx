import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar2 from '../../components/Navbar/Navbar2'
import Games from '../../components/Games/Games'

const GamesYt = () => {
    return (
        <>
            <div className="bg-gray-900 text-white">
                <div className='left-0 right-0 top-0 z-50 sticky'>
                    <Navbar2 />
                </div>
                <div className=" absolute top-[-60px] left-1/2 transform -translate-x-1/2 aspect-video w-full max-w-2xl rounded-full bg-violet-500/50 mix-blend-screen blur-[120px] filter" />
                <Games />
                <Footer />
            </div>
        </>
    )
}

export default GamesYt