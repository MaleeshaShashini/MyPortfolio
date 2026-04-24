"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Code2,
  Users2,
  Lock,
  User,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const individualProjects = [
  {
    title: "Personal Portfolio",
    description:
      "High-performance professional portfolio built with Next.js App Router. Features complex animations, 3D effects, and optimized SEO.",
    highlights: [
      "Server-side rendering for performance.",
      "Lucide icons & UI components.",
      "Framer Motion animations.",
      "Deployed on Vercel with CI/CD.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://my-portfolio-bay-five-78.vercel.app/",
    type: "Public",
    icon: <Code2 size={18} />,
    git:"https://github.com/MaleeshaShashini/MyPortfolio",
  },
  {
    title: "Tourism Platform",
    description:
      "A modern, data-driven tourism platform architected using React. Implementing component-based design for extreme scalability.",
    highlights: [
      "Built with React.js dynamic rendering.",
      "Smooth Framer Motion transitions.",
      "Responsive design for all screens.",
      "Component-based architecture.",
    ],
    tech: ["React.js", "Tailwind CSS"],
    link: "https://srilanka-tourism-web.vercel.app",
    type: "Public",
    icon: <Code2 size={18} />,
    git:"https://github.com/MaleeshaShashini/srilanka-tourism-web",
  },
  {
    title: "Ufose Initial Website",
    description:
      "Designed and developed the official digital presence for Ufose Software Solution. Focused on high-performance landing pages.",
    highlights: [
      "SEO optimized structure.",
      "Professional corporate aesthetics.",
      "Cross-browser compatibility.",
      "High-speed asset optimization.",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    link: "https://maleeshashashini.github.io/UFOSS_website/",
    type: "Public",
    icon: <Code2 size={18} />,
    git:"https://github.com/MaleeshaShashini/UFOSS_website",
  },
];

const groupProjects = [
  {
    title: "EcoMate - Smart Waste System",
    description:
      "A centralized web & mobile ecosystem developed for Gampaha Municipal Council featuring real-time GPS tracking[cite: 27, 32].",
    highlights: [
      "Real-time GPS truck tracking.",
      "QR-based bin verification.",
      "Admin dashboard for live tracking.",
      "AI-powered predictive analytics.",
    ],
    tech: ["React.js", "Flutter", "MongoDB", "Node.js"],
    link: null,
    type: "Private",
    icon: <Users2 size={18} />,
  },
  {
    title: "ICTFirst LMS Platform",
    description:
      "A scalable Learning Management System featuring automated enrollment and payment verification for ICTFirst students[cite: 518, 543].",
    highlights: [
      "Secure student authentication.",
      "Manual payment verification workflow.",
      "Time-limited access to recorded lessons.",
      "Learning material repository.",
    ],
    tech: ["Next.js", "Node.js", "Tailwind CSS", "MySQL"],
    link: null,
    type: "Private",
    icon: <Users2 size={18} />,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
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
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
              Featured <span className="text-[#00a8e8]">Projects</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#00a8e8] rounded-full"></div>
          </motion.div>
        </div>

        {/* --- Individual Projects Section --- */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 text-gray-400">
            <User size={20} className="text-[#00a8e8]" />
            <h3 className="text-xl font-bold uppercase tracking-widest">
              Individual Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col p-8 bg-gradient-to-b from-[#00a8e8]/20 via-[#00a8e8]/40 to-[#00a8e8]/30 border border-white/50 hover:border-[#00a8e8]/30 transition-all duration-500 shadow-2xl rounded-[2.5rem] group overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-8 bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all duration-300 rounded-lg">
                      {project.icon}
                    </div>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20 text-gray-300 font-bold uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>

                  <h4 className="text-white font-bold text-xl leading-tight group-hover:text-[#00a8e8] transition-colors mb-4 uppercase tracking-tight">
                    {project.title}
                  </h4>

                  <div className="space-y-2 mb-8 flex-1">
                    {project.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 group/item"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-[#00a8e8] mt-1 shrink-0 opacity-60"
                        />
                        <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-1 rounded-md bg-black/40 text-gray-400 border border-[#00a8e8]/50 font-mono italic transition-all duration-300 cursor-default
                 hover:bg-[#00a8e8] hover:text-white hover:border-[#00a8e8] hover:shadow-[0_0_10px_rgba(0,168,232,0.5)] hover:-translate-y-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#00a8e8] text-xs font-black uppercase tracking-tighter group/btn"
                    >
                      Launch{" "}
                      <ExternalLink
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <FaGithub
                        size={20}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Group Collaborations Section --- */}
        <div>
          <div className="flex items-center gap-3 mb-8 text-gray-400">
            <Users2 size={20} className="text-[#00a8e8]" />
            <h3 className="text-xl font-bold uppercase tracking-widest">
              Group Collaborations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col p-8 bg-gradient-to-b from-[#00a8e8]/20 via-[#00a8e8]/30 to-[#00a8e8]/20 border border-white/50 hover:border-[#00a8e8]/10 transition-all duration-500 shadow-2xl rounded-[2.5rem] group overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-8 bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all duration-300 rounded-lg">
                      {project.icon}
                    </div>
                    <Lock size={16} className="text-gray-500" />
                  </div>

                  <h4 className="text-white font-bold text-xl leading-tight group-hover:text-[#00a8e8] transition-colors mb-4 uppercase tracking-tight">
                    {project.title}
                  </h4>

                  <div className="space-y-2 mb-8 flex-1">
                    {project.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 group/item"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-[#00a8e8] mt-1 shrink-0 opacity-60"
                        />
                        <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-1 rounded-md bg-black/40 text-gray-400 border border-[#00a8e8]/50 font-mono italic transition-all duration-300 cursor-default
                 hover:bg-[#00a8e8] hover:text-white hover:border-[#00a8e8] hover:shadow-[0_0_10px_rgba(0,168,232,0.5)] hover:-translate-y-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest italic flex items-center gap-2">
                      Internal Documentation Restricted
                    </span>
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
