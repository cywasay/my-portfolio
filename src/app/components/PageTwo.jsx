"use client";

import Image from "next/image";
import Section from "./Section";
import { motion } from "framer-motion";

export default function PageTwo() {
  return (
    <Section
      id="about"
      className="relative bg-[#2d2c2c] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-4 py-12 sm:py-16 lg:py-20 min-h-screen"
    >
      {/* Info box */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-[560px] h-auto bg-[#1e2021] flex items-center justify-center rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out hover:scale-105 will-change-transform p-4 sm:p-6 lg:p-8"
      >
        <div className="w-full flex flex-col justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="inline-block border-b-2 w-fit border-[#fffefe] pb-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
                Introduction
              </span>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-[#fffefe] leading-relaxed">
              I'm Muhammad Wasay Chaudhry, a web developer with an artist's
              touch. Trained through FleetTech's web development course, and
              sharpened further as a self-taught developer. I specialize in
              React, Next.js, and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-4 sm:gap-6 text-[#fffefe]">
            {/* About Me */}
            <div className="flex flex-col gap-2 sm:gap-3 flex-1">
              <div className="inline-block border-b-2 w-fit border-[#fffefe] pb-1">
                <span className="text-base sm:text-lg font-semibold">About Me</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                I'm someone who finds beauty in both code and chaos. What
                started as curiosity soon became a full-blown passion. I love
                the quiet focus of late-night coding sessions, the satisfaction
                of solving stubborn bugs, and the thrill of seeing an idea come
                alive on screen.
              </p>
            </div>

            {/* About Portfolio */}
            <div className="flex flex-col gap-2 sm:gap-3 flex-1">
              <div className="inline-block border-b-2 w-fit border-[#fffefe] pb-1">
                <span className="text-base sm:text-lg font-semibold">About Portfolio</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                My portfolio is a collection of ideas brought to life — from
                minimal UIs to interactive experiences. I focus on performance,
                responsiveness, and visual storytelling.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info image box - Hidden on mobile and tablet */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="hidden lg:block w-full max-w-[560px] aspect-square relative rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-500 ease-out hover:scale-105 will-change-transform"
      >
        <Image
          src="/infoBoxx.png"
          alt="Introduction preview"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 560px"
          className="object-cover rounded-2xl sm:rounded-3xl"
        />
      </motion.div>
    </Section>
  );
}