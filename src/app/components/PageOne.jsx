"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function PageOne() {
  return (
    <Section className="relative bg-[#1e2021] pt-16 sm:pt-20 lg:pt-10 shadow-[0_10px_25px_rgba(0,0,0,0.25)] z-20">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[800px_1fr] min-h-screen">
        
        {/* Hero Text Section */}
        <div className="h-[70vh] sm:h-[80vh] lg:h-[600px] w-full flex items-center justify-center px-4 sm:px-6 lg:px-10 order-1 lg:order-1">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#fffefe] will-change-transform text-center lg:text-left leading-tight"
          >
            Where{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,100,0,0.8)]">
              art
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(200,50,255,0.8)]">
              code
            </span>{" "}
            dance in perfect sync.
          </motion.span>
        </div>

        {/* Hero Subtext Section */}
        <div className="h-[30vh] sm:h-[40vh] lg:h-[600px] w-full flex flex-col items-center lg:items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-10 py-8 lg:py-40 order-2 lg:order-2">
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base lg:text-sm xl:text-base text-[#fffefe] will-change-transform text-center lg:text-left max-w-md lg:max-w-none leading-relaxed opacity-90"
          >
            Combining the precision of code with the soul of art, I build
            immersive, performant, and modern web apps with React, Next.js, and
            Tailwind CSS.
          </motion.span>
        </div>
      </div>


    </Section>
  );
}