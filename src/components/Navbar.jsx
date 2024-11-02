// import React from 'react'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          {/* <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">Your Logo</h1>
          </div> */}

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#hero">Home</NavLink>
              <NavLink href="#works">Works</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <NavLink href="https://mail.google.com/mail/?view=cm&fs=1&to=karanacharya0987@gmail.com" target="_blank">Email</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/80 backdrop-blur-sm">
          <MobileNavLink href="#home">Home</MobileNavLink>
          <MobileNavLink href="#works">Works</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
          <MobileNavLink href="https://mail.google.com/mail/?view=cm&fs=1&to=karanacharya0987@gmail.com" target="_blank">Email</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
};

// Desktop NavLink Component
const NavLink = ({ href, children, target }) => (
  <a
    href={href}
    target={target}
    className="text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-500"
  >
    <motion.span
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  </a>
);

// Mobile NavLink Component
const MobileNavLink = ({ href, children, target }) => (
  <a
    href={href}
    target={target}
    className="text-gray-300 block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-blue-500"
  >
    <motion.span
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  </a>
);

export default Navbar;
