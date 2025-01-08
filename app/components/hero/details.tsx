'use client';
import React from 'react';
import './details.css';
import { motion } from 'framer-motion'

const Details = () => {
  const handleDownload = () => {
    window.open(process.env.NEXT_PUBLIC_RESUME, '_blank');
  };

  return (
    <div className="about-content flex flex-col justify-center items-center p-6 md:p-10 space-y-6">
      <motion.h1 
        className="text-5xl md:text-6xl lg:text-8xl font-extrabold md:font-bold text-center leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}>
        HI, I&apos;M
        <br />
        <motion.span 
          className="text-[#FF0004] block mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>DEVAN .P. S
          </motion.span>
      </motion.h1>
      <motion.h3 
        className="text-center text-lg md:text-2xl text-gray-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}>
        MERN STACK DEVELOPER
        </motion.h3>
      <motion.button
        className="italic text-semibold px-6 md:px-8 py-2 md:py-3 rounded-full border bg-gradient-to-r from-[#FFBC2A] to-[#FFDB00] shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
        onClick={handleDownload}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        Download Resume
      </motion.button>
    </div>
  );
};

export default Details;
