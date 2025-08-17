"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function PageThree() {
  return (
    <Section className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[500px_1fr] bg-[#2d2b2a] gap-6 sm:gap-8 lg:gap-12 xl:gap-15 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 overflow-x-hidden min-h-screen">
      {/* Experience box */}
      <motion.div
        className="flex justify-center order-1 lg:order-1"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full h-full flex flex-col bg-[#1e2021] items-center rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] p-6 sm:p-8 lg:p-10 transition-transform duration-500 ease-out hover:scale-105 will-change-transform">
          <div className="inline-block border-b-2 w-fit border-[#fffefe] pb-1 mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
              Qualification / Experience
            </span>
          </div>

          <div className="w-full flex flex-col gap-4 sm:gap-6 text-[#fffefe] font-medium text-base sm:text-lg">
            <div>• Fleet Tech 5 weeks course</div>
            <div>• Self-Taught</div>
          </div>
        </div>
      </motion.div>

      {/* Works box */}
      <motion.div
        className="flex order-2 lg:order-2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="p-6 sm:p-8 lg:p-10 w-full h-full bg-[#1e2021] rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out hover:scale-[1.02] will-change-transform flex flex-col gap-6 sm:gap-8">
          <div className="inline-block border-b-2 w-fit border-[#fffefe] pb-1">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
              Works
            </span>
          </div>
          
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {["1", "2", "3", "4"].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#333] rounded-2xl sm:rounded-3xl h-32 sm:h-36 lg:h-44 hover:bg-[#444] transition-colors duration-300 cursor-pointer flex items-center justify-center text-[#fffefe] font-semibold text-lg opacity-75 hover:opacity-100"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Project {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}