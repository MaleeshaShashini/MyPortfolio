"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Settings, 
  ShieldCheck, 
  Globe, 
  Cpu,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Web Technologies",
    icon: <Globe size={20} />,
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "PHP"]
  },
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    skills: ["Java (OOP Fundamentals)", "Python", "C Programming"]
  },
  {
    title: "Backend & Databases",
    icon: <Database size={20} />,
    skills: ["MySQL", "MongoDB Atlas", "Node.js", "Express.js", "Database Design & Querying"]
  },
  {
    title: "Quality Assurance & Testing",
    icon: <ShieldCheck size={20} />,
    skills: ["Test Case Design", "Manual Testing", "Automation Tools (Selenium/Postman)", "QA Methodologies"]
  },
  {
    title: "Software Engineering",
    icon: <Cpu size={20} />,
    skills: ["SDLC (Agile/Waterfall)", "OOP Concepts", "Clean Code Practices", "System Architecture"]
  },
  {
    title: "Tools & Others",
    icon: <Settings size={20} />,
    skills: ["Git & GitHub", "Project Documentation", "Figma", "Vercel Deployment"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center  justify-center gap-2 mb-4">
            <Sparkles className="text-[#00a8e8]" size={18} />
            <span className="text-[#00a8e8] text-xs font-bold uppercase tracking-[0.4em]">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Technical <span className="text-[#00a8e8]">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-[#00a8e8] mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-8 rounded-[2rem] bg-[#0f172a]/40 border border-white/5 hover:border-[#00a8e8]/30 transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a8e8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all duration-300 shadow-lg shadow-[#00a8e8]/5">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight uppercase tracking-wider group-hover:text-[#00a8e8] transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/5 font-mono transition-all duration-300 cursor-default
                 hover:bg-[#00a8e8] hover:text-white hover:border-[#00a8e8] hover:shadow-[0_0_10px_rgba(0,168,232,0.5)] hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};