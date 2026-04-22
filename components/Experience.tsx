"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    role: "Software Engineer | QA",
    company: "@Ufose Software Solution",
    period: "2025 - Present",
    description:
      "Co-founder & Lead Developer of a cutting-edge software consultancy delivering enterprise solutions.",
    highlights: [
      "Leading the technical development of client projects.",
      "Collaborating with a team of developers to build scalable web applications.",
      "Managing project requirements and software architecture design.",
      "Ensuring software quality through manual and automated testing processes.",
    ],
    type: "Freelance",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Sparkles className="text-[#00a8e8]" size={18} />
            <span className="text-[#00a8e8] text-sm font-bold uppercase tracking-[0.3em]">
              Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Work <span className="text-[#00a8e8]">Journey</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#00a8e8] rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md group"
            >
              {/* Animated Glow behind card */}
              <div className="absolute inset-0 bg-[#00a8e8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:scale-110 group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-[#00a8e8] font-medium flex items-center gap-2">
                      <motion.span
                        whileHover={{ x: 2}}
                        className="cursor-default"
                      >
                        {exp.company}
                      </motion.span>

                      <motion.span
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(0, 168, 232, 0.2)",
                          color: "#fff",
                        }}
                        className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400 font-normal cursor-default transition-colors border border-white/5 hover:border-[#00a8e8]/50"
                      >
                        {exp.type}
                      </motion.span>
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(0, 168, 232, 0.3)",
                  }}
                  className="text-gray-500 text-sm font-mono bg-white/5 px-4 py-2 rounded-full border border-white/5 cursor-default hover:text-[#00a8e8] transition-all"
                >
                  {exp.period}
                </motion.div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl italic">
                "{exp.description}"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#00a8e8] mt-1 shrink-0"
                    />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/company/ufose-software/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#00a8e8] uppercase tracking-widest hover:gap-3 transition-all"
                >
                  View Company Profile <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
