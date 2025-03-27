import React, { useEffect } from "react";
import Img1 from "../../assets/first project.png";
import Img2 from "../../assets/second project.png";

import IMG3 from '../../assets/third project.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="relative container mb-10 py-8">
        {/* Glow Effect */}
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 aspect-[16/9] w-full max-w-2xl
        rounded-full bg-violet-500/40 mix-blend-screen blur-[100px] filter" />

        <h1 className="mb-8 py-2 pl-2 text-center text-3xl font-bold text-white">
          Our Latest Projects
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Card 1 */}
          <div className="p-4 rounded-lg border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(128,0,128,0.7)]">
            <div className="overflow-hidden rounded-md">
              <img
                src={Img1}
                alt="Rugs App"
                className="mx-auto h-[400px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-purple-400">
                Rugs App
              </h1>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4 text-gray-700 dark:text-gray-300">
                <li className="text-lg">
                  The <strong>Home Screen</strong> serves as the central hub, showcasing featured rugs, categories, and promotional banners.
                </li>
                <li className="text-lg">
                  The <strong>Guide Screen</strong> provides a comprehensive tutorial on how to use the app, offering step-by-step instructions.
                </li>
                <li className="text-lg">
                  The <strong>Search Screen</strong> enables users to find rugs by name, category, or specific filters.
                </li>
                <li className="text-lg">
                  The <strong>Wishlist Screen</strong> allows users to store their favorite selections in a vertical list.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-lg border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(128,0,128,0.7)]">
            <div className="overflow-hidden rounded-md">
              <img
                src={Img2}
                alt="Quick Deliver"
                className="mx-auto h-[400px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-purple-400">
                Quick Deliver
              </h1>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4 text-gray-700 dark:text-gray-300">
                <li className="text-lg">
                  QuickDeliver is powered by a robust tech stack including Flutter for a cross-platform experience.
                </li>
                <li className="text-lg">
                  It ensures smooth, real-time order tracking, secure transactions, and a seamless interface.
                </li>
                <li className="text-lg">
                  Efforts to reduce the carbon footprint of deliveries and fast delivery options.
                </li>
                <li className="text-lg">
                  Secure messaging with professionals and voice instructions for scheduling orders.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-lg border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(128,0,128,0.7)]">
            <div className="overflow-hidden rounded-md">
              <img src={IMG3}
                alt="healthcare app"
                className="mx-auto h-[400px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-purple-400">
                Digital Healthcare App
              </h1>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4 text-gray-700 dark:text-gray-300">
                <li className="text-lg">
                  Rapid AI Diagnosis: Provides diagnostic reports from chest X-rays in under a minute.
                </li>
                <li className="text-lg">
                  Easy Scanning: Users can scan X-rays with their smartphone or upload images directly.
                </li>
                <li className="text-lg">
                  Detailed Reporting: AI-generated reports highlight issues like pneumonia and TB, with treatment suggestions.
                </li>
                <li className="text-lg">
                  Data Security: Ensures user privacy with encryption and secure cloud storage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;

