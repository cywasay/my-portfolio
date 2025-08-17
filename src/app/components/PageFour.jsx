"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function PageFour() {
  return (
    <div 
      id="contact"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 xl:py-20 bg-[#2c2a2a] overflow-x-hidden min-h-screen flex items-center"
    >
      <div className="flex flex-col w-full max-w-4xl mx-auto">
        {/* Contact Box */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full bg-[#1e2021] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-start justify-between 
          shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out hover:scale-105 will-change-transform"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 border-b-4 border-white pb-2 
              bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent"
          >
            Contact
          </h2>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-white w-full"
          >
            <p className="break-words">
              <span className="font-semibold text-gray-300">Name:</span> Muhammad Wasay Chaudhry
            </p>
            <p className="break-words">
              <span className="font-semibold text-gray-300">Phone:</span> 
              <a href="tel:+923425446567" className="ml-1 hover:text-blue-400 transition-colors duration-300">
                +92 3425446567
              </a>
            </p>
            <p className="break-words">
              <span className="font-semibold text-gray-300">Email:</span> 
              <a href="mailto:gz2750114@gmail.com" className="ml-1 hover:text-blue-400 transition-colors duration-300">
                gz2750114@gmail.com
              </a>
            </p>
            <p className="break-words">
              <span className="font-semibold text-gray-300">Location:</span> Islamabad, Pakistan
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 lg:mt-10 w-full"
          >
            <a
              href="https://www.instagram.com/crimson_emperor__/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-all duration-300 hover:scale-110"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-all duration-300 hover:scale-110"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-all duration-300 hover:scale-110"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
            </a>
          </motion.div>

          {/* Optional: Call to Action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 sm:mt-8 lg:mt-10 w-full text-center sm:text-left"
          >
            <p className="text-xs sm:text-sm text-gray-400 italic">
              Let's build something amazing together! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}