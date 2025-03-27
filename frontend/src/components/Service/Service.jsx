import React from "react";
import CountUp from "react-countup";

const Service = () => {
  return (
    <section className="container mt-8 md:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8">
      <div className="group mx-auto my-4 grid w-full grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 rounded-e-full
            border border-blue-100/30 bg-blue-200/20 p-6 text-blue-200 shadow-lg outline-none ring-purple-300 
            transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse 
            after:rounded-lg after:bg-purple-300 after:bg-opacity-0 after:blur-md 
            after:transition-all after:duration-500 hover:border-purple-300 hover:text-purple-400 
            after:hover:bg-opacity-20 focus:ring-2 dark:bg-gray-800
        hover:bg-transparent dark:text-white/70 max-w-screen-lg md:-translate-y-16 md:p-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-2xl font-bold text-black/80 dark:text-white md:text-4xl lg:text-5xl">
            <CountUp end={50} suffix="+" duration={2.75} />
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg font-medium">Clients</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-2xl font-bold text-black/80 dark:text-white md:text-4xl lg:text-5xl">
            <CountUp end={35} suffix="+" duration={2.75} />
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg font-medium">Projects</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-2xl font-bold text-black/80 dark:text-white md:text-4xl lg:text-5xl">
            <CountUp end={270} suffix="+" />
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg font-medium">Subscribers</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-2xl font-bold text-black/80 dark:text-white md:text-4xl lg:text-5xl">
            <CountUp
              start={-875.039}
              end={10.012}
              duration={2.75}
              separator=" "
              suffix="+"
            />
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg font-medium">Team Members</h2>
        </div>
      </div>
    </section>
  );
};

export default Service;
