import { motion } from 'framer-motion';
import React from 'react';
import image from '../components/image.jpg'

const Hero = () => {
  return (
    <div  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Hello, I'm <span className="text-blue-500">Karan Acharya </span>
          </h2>
          <h1 className="text-2xl lg:text-4xl font-semibold text-gray-300 mb-6">
            Frontend Developer
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            I craft responsive websites where technology meets creativity
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold 
            hover:bg-blue-600 transform hover:scale-105 transition-all duration-300
            hover:shadow-lg hover:shadow-blue-500/50">
            Contact Me
          </button>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <img
              src={`${image}`}
              alt="Developer"
              className="rounded-full object-cover floating-image
              hover:shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;