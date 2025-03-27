import React, { useEffect } from 'react'
import YtProjects from '../../components/YtProjects/YtProjects'
import Footer from '../../components/Footer/Footer'
import Navbar2 from '../../components/Navbar/Navbar2'

const ProjectsYt = () => {

       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-br from-black to-blue-900 text-white">
            <div className='left-0 right-0 top-0 z-50 sticky'>
                <Navbar2 />
            </div>
            <div className=" absolute top-[-60px] left-1/2 transform -translate-x-1/2 aspect-video w-full max-w-2xl rounded-full bg-blue-900/50 mix-blend-screen blur-[120px] filter" />
            <YtProjects />
            <Footer />
        </div>
    )
}


export default ProjectsYt