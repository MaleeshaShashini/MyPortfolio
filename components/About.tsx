"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Globe, GraduationCap, Code2, SearchCheck } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header  */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            About <span className="text-[#00a8e8]">Me</span>
          </h2>
          <div className="h-1 w-20 bg-[#00a8e8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Professional Profile & Beyond Coding */}
          <div className="space-y-6">
            
            {/* Professional Profile  */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-[#00a8e8]/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Professional Profile</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg italic">
                "Driven by problem-solving and a passion for building high-quality software, I bridge the gap between innovation and quality assurance."
              </p>
            </motion.div>

            {/* Beyond Coding  */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-[#00a8e8]/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all shadow-[0_0_15px_rgba(0,168,232,0.2)]">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Beyond Coding</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                When I'm not writing code, you can find me exploring new places! I love traveling and documenting my journeys. Check out my travel stories and adventures on my YouTube channel! 🎥🚂
              </p>
              
              <a 
                href="https://www.youtube.com/@msfreevibe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-[#00a8e8] hover:border-[#00a8e8] transition-all text-xs uppercase tracking-widest group/yt"
              >
                <FaYoutube size={20} className="text-[#00a8e8] group-hover/yt:text-white transition-colors"/> Visit my YouTube Channel
              </a>
            </motion.div>
          </div>

          {/* Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Dual Degree */}
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8e8]/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Dual Degree Student</p>
                <p className="text-white font-medium">BSE (Hons) @ OUSL & BIT @ UCSC</p>
              </div>
            </div>

            {/* Primary Role */}
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8e8]/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                <Code2 size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Primary Role</p>
                <p className="text-white font-medium">Full-stack Developer & QA Engineer</p>
              </div>
            </div>

            {/* Technical Core */}
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8e8]/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                <SearchCheck size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Technical Core</p>
                <p className="text-white font-medium">Next.js, PHP, Tailwind CSS & MySQL</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};