"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-16 sm:h-20 bg-[#2d2c2c] flex items-center justify-between px-4 sm:px-6 lg:px-8 fixed z-50 shadow-lg">
      {/* Logo/Name - Responsive text sizing */}
      <div className="text-[#fffefe] font-semibold text-sm sm:text-lg lg:text-xl truncate max-w-[200px] sm:max-w-none">
        <span className="hidden sm:inline">Muhammad Wasay Chaudhry</span>
        <span className="sm:hidden">M. Wasay Chaudhry</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-base pr-2 lg:pr-4 text-[#fffefe]">
        <Link 
          href="#about" 
          className="hover:text-gray-300 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/10"
        >
          About
        </Link>
        <Link 
          href="#contact" 
          className="hover:text-gray-300 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/10"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-[#fffefe] p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
        aria-label="Toggle navigation menu"
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center">
          <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#2d2c2c] border-t border-gray-600 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
        <nav className="flex flex-col px-4 py-2">
          <Link 
            href="#about" 
            className="text-[#fffefe] py-3 px-2 border-b border-gray-600 last:border-b-0 hover:bg-white/10 transition-colors duration-200 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="text-[#fffefe] py-3 px-2 border-b border-gray-600 last:border-b-0 hover:bg-white/10 transition-colors duration-200 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}