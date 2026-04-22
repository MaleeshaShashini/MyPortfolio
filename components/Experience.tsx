"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Terminal,
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
    link: "https://www.linkedin.com/company/ufose-software/posts/?feedView=all",
    icon: <Terminal size={18} />,
  },
  {
    role: "Office Assistant (Operations & Procurement)",
    company: "@Ravi Breader Farm (pvt) Ltd",
    period: "2023 - 2024",
    description:
      "Managed end-to-end procurement and operational workflows, ensuring high efficiency in resource management.",
    highlights: [
      "Optimized purchasing workflows for hardware materials.",
      "Maintained real-time data accuracy using dedicated systems.",
      "Handled end-to-end payment cycles with high precision.",
      "Leveraged Microsoft Office Suite for organizational efficiency.",
    ],
    type: "Full Time",
    link: null,
    icon: <Briefcase size={18} />,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-[#00a8e8]" size={18} />
            <span className="text-[#00a8e8] text-sm font-bold uppercase tracking-[0.3em]">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
            Work <span className="text-[#00a8e8]">Journey</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#00a8e8] rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line with Glow */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00a8e8] via-[#00a8e8]/20 to-transparent shadow-[0_0_10px_rgba(0,168,232,0.2)]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-0 md:left-[11px] top-0 w-10 h-10 rounded-xl bg-gray-800 border border-[#00a8e8] flex items-center justify-center text-[#00a8e8] shadow-[0_0_20px_rgba(0,168,232,0.2)] z-10 group-hover:border-[#00a8e8]/40 transition-all">
                  {exp.icon}
                </div>

                {/* Experience Card */}
                <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-[#00a8e8]/10 border border-white/30 hover:border-[#00a8e8]/30 transition-all duration-500 shadow-2xl">
                  {/* Subtle Card Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a8e8]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <div className="flex items-center gap-5">
                        
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#00a8e8] transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[#00a8e8] font-semibold tracking-wide uppercase text-sm">
                              {exp.company}
                            </span>
                            <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-gray-400 font-bold uppercase tracking-widest">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(0, 168, 232, 0.1)",
                        }}
                        className="text-[#00a8e8] text-xs font-mono font-bold bg-[#00a8e8]/10 px-4 py-2 rounded-lg border border-[#00a8e8]/20 self-start md:self-center whitespace-nowrap min-w-[120px] text-center"
                      >
                        {exp.period}
                      </motion.div>
                    </div>

                    <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light italic opacity-80 border-l-2 border-[#00a8e8]/20 pl-6">
                      "{exp.description}"
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 group/item"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-[#00a8e8] mt-1 shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity"
                          />
                          <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {exp.link && (
                      <div className="mt-10 pt-6 border-t border-white/5">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#00a8e8] uppercase tracking-[0.2em] hover:gap-4 transition-all"
                        >
                          Explore Work <ExternalLink size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
