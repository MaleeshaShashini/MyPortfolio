"use client";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-10 md:pt-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
      
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#00a8e8] font-medium tracking-widest mb-4 uppercase text-sm">
            Welcome to my World
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a8e8] to-white">Maleesha</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            Software Engineering Undergraduate at OUSL & UCSC. Passionate about building high-quality web applications and exploring the world of QA.
          </p>
          
          <div className="flex gap-4">
            <a href="/Maleesha_Resume.pdf" download="Maleesha_Resume.pdf">
              <button className="px-8 py-3 bg-gradient-to-r from-[#00a8e8] to-[#8ecae6] hover:scale-105 text-white rounded-full font-bold hover:bg-[#007ea7] transition-all">
              Download CV
              </button>
            </a>
            
            <a href="https://wa.me/+94766636478" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all">
              Let's Connect
              </button>
            </a>

          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="w-64 h-64 md:w-85 md:h-85 rounded-full bg-gradient-to-b from-[#00a8e8] to-[#00171f] border-4 border-white/10 overflow-hidden shadow-2xl shadow-[#00a8e8]/20 hover:shadow-[#00a8e8]/40">
             
             <img src="/images/me55.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};