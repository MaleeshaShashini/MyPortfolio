"use client";
import React from "react";
import { Mail } from "lucide-react";
import { LuCircleChevronUp } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="py-12 border-t border-white/10 bg-[#00171f]/40 backdrop-blur-md relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back to Top Button*/}
        <div className="flex justify-end">
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center text-gray-500 hover:text-[#00a8e8] transition-all"
          >
            <LuCircleChevronUp className="animate-bounce mb-1" size={24} />
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Back to Top
            </span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
         
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Maleesha Shashini
            </h3>
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/MaleeshaShashini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00a8e8] hover:scale-110 transition-all"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/maleeshashashini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00a8e8] hover:scale-110 transition-all"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@MSFreeVibe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00a8e8] hover:scale-110 transition-all"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="mailto:maleeshashashini70@gmail.com"
              className="text-gray-400 hover:text-[#00a8e8] hover:scale-110 transition-all"
            >
              <Mail size={24} />
            </a>
          </div>


          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm italic">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};