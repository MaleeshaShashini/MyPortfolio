"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  CircleStar,
} from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const academicEducation = [
  {
    degree: "Bachelor of Software Engineering (Hons)",
    institution: "Open University of Sri Lanka (OUSL)",
    period: "Nov 2023 – Present",
    status: "Undergraduate",
  },
  {
    degree: "Bachelor of Information Technology (BIT)",
    institution: "University of Colombo School of Computing (UCSC)",
    period: "Aug 2023 – Present",
    status: "Undergraduate",
  },
];

const professionalQualifications = [
  {
    title: "Diploma in Information Technology",
    institution: "UCSC",
    period: "Aug 2023 – Jul 2024",
  },
  {
    title: "Diploma in Cyber Security and Ethical Hacking",
    institution: "SITC Campus",
    period: "July 2024 – Aug 2025",
  },
  {
    title: "Diploma in Information Technology",
    institution: "SITC Campus",
    period: "Aug 2023 – Feb 2024",
  },
  {
    title: "Pearson Assured Diploma in IT",
    institution: "ESOFT Metro Campus",
    period: "Aug 2021 – Jun 2022",
  },
];

const onlineCertificates = [
  
  {
    title: "Draw an interactive wireframe in Mockplus",
    provider: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/4QZQ3KABYZO9",
  },
  {
    title: "Python Programming",
    provider: "Test Automation University",
    link: "https://testautomationu.applitools.com/certificate/?id=26107722",
  },
  {
    title: "Selenium WebDriver with Python",
    provider: "Test Automation University",
    link: "https://testautomationu.applitools.com/certificate/?id=12904cde",
  },
  {
    title: "Codeless Test Automation with Selenium IDE",
    provider: "Test Automation University",
    link: "https://testautomationu.applitools.com/certificate/?id=6ec74ec4",
  },
  {
    title: "API Test Automation with Postman",
    provider: "Test Automation University",
    link: "https://testautomationu.applitools.com/certificate/?id=e3fb0b50",
  },
  {
    title: "Web Design for Beginners",
    provider: "University of Moratuwa",
    link: "https://open.uom.lk/verify",
  },
  {
    title: "Java Intermediate",
    provider: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-U6621B2K",
  },
  {
    title: "Introduction to Java",
    provider: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-LCQM9FJJ",
  },
  {
    title: "Introduction to C",
    provider: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-OLZOE8XP",
  },
  {
    title: "Python Intermediate",
    provider: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-NKIYMXXI",
  },
  {
    title: "Introduction to SQL",
    provider: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-N0RRHWDF",
  },
  {
    title: "Introduction to JavaScript",
    provider: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-WPHLFSXV",
  },
  {
    title: "Introduction to Python",
    provider: "Sololearn",
    link: "https://www.sololearn.com/certificates/CC-H0XEJE5W",
  },
  {
    title: "Introduction to AI",
    provider: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/UKMCC11CE8YF",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Academic <span className="text-[#00a8e8]">Path</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#00a8e8] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Higher Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 text-gray-400">
              <GraduationCap size={24} className="text-[#00a8e8]" />
              <h3 className="text-xl font-bold uppercase tracking-widest">
                Higher Education
              </h3>
            </div>

            {academicEducation.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-[#00a8e8]/20 border border-white/50 hover:border-[#00a8e8]/30 transition-all duration-500 shadow-2xl"
              >
                <h4 className="text-white font-bold text-lg group-hover:text-[#00a8e8] transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-gray-400 mt-1">{edu.institution}</p>
                <div className="flex items-center gap-4 mt-4 text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#00a8e8]" />{" "}
                    {edu.period}
                  </span>
                  <span className="bg-[#00a8e8]/10 text-[#00a8e8] px-2 py-0.5 rounded italic">
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Qualification Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6 text-gray-400">
              <Award size={24} className="text-[#00a8e8]" />
              <h3 className="text-xl font-bold uppercase tracking-widest">
                Professional Qualifications
              </h3>
            </div>

            <div className="space-y-4">
              {professionalQualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
                >
                  <div className="mt-1">
                    <BookOpen size={16} className="text-[#00a8e8]" />
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-semibold text-sm">
                      {qual.title}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {qual.institution} | {qual.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Online Certifications Section - Updated with Square Cards */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8 text-gray-400">
            <CircleStar size={24} className="text-[#00a8e8]" />
            <h3 className="text-xl font-bold uppercase tracking-widest">
              Online Certifications
            </h3>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12 certificate-swiper"
          >
            {onlineCertificates.map((cert, index) => (
              <SwiperSlide key={index} className="h-auto">
                {" "}
               
                <div className="relative h-full flex flex-col p-8 bg-gradient-to-b from-[#00a8e8]/20 via-[#00a8e8]/37 to-[#00a8e8]/25 border border-white/10 group overflow-hidden rounded-2xl min-h-[280px]">
                 
                  {/* Decorative Icon */}
                  <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <Award size={150} />
                  </div>

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex-1">
                    <div className="w-10 h-8 bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] mb-6 group-hover:bg-[#00a8e8] group-hover:text-white transition-all duration-300 rounded-lg">
                      <Award size={24} />
                    </div>
                    <h4 className="text-white font-bold text-lg leading-tight group-hover:text-[#00a8e8] transition-colors mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                      {cert.provider}
                    </p>
                  </div>

                  
                  <div className="relative z-10 flex justify-end mt-6">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#00a8e8] text-xs font-black uppercase tracking-tighter group/btn"
                    >
                      View{" "}
                      <ExternalLink
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Pagination Style Customization */}
      <style jsx global>{`
        .certificate-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
        }
        .certificate-swiper .swiper-pagination-bullet-active {
          background: #00a8e8;
          width: 20px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};
