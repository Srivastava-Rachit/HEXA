import Banner1 from "../../assets/blog1.jpg";
import BannerDetails from "../../components/BannerDetails/BannerDetails";
import BannerDetails2 from "../../components/BannerDetails/BannerDetails2";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero.jsx/Hero";
import Navbar2 from "../../components/Navbar/Navbar2";
import Herogeometric from "../../components/Hero-geometric/hero-geometric"
// import Slider from "../../components/Slider/Slider";
import { useEffect } from "react";

const Home = () => {

        useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <div className=" overflow-hidden mx-auto">
                <div className="dark:bg-slate-900 dark:text-white">
                    <div className="sticky top-0 z-50 w-full">
                        <Navbar2 />
                    </div>
                    <Herogeometric/>
                        <Hero />
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                        
                        <BannerDetails reverse={true} img={Banner1} />
                        <BannerDetails2 reverse={false} />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
