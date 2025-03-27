import React, { useEffect } from 'react'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Navbar2 from '../../components/Navbar/Navbar2'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-900 text-white">
            <div className='left-0 right-0 top-0 z-50 sticky'>
                <Navbar2 className="" />
            </div>
            <About />
            <Footer />
        </div>
    )
}

export default AboutUs
