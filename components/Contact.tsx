"use client";

import React from "react";

import { motion } from "framer-motion";
import {Mail, Phone, MapPin, Send, MessageCircleHeart } from "lucide-react";

export const Contact = () => {
    return (
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
                    Get In <span className="text-[#00a8e8]">Touch</span>
                </h2>

                <div className="h-1 w-20 bg-[#00a8e8] mx-auto rounded-full mb-6"></div>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities and my inbox is always open. 
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >

                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                    {/* Email Card */}
                        <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8e8]/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">Email Me</p>
                                <a href="mailto:maleeshashashini70@gmail.com" className="text-white font-medium hover:text-[#00a8e8]">
                                maleeshashashini70@gmail.com
                                </a>
                            </div>
                        </div>

                    {/* WhatsApp Card */}
                        <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8e8]/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                                <MessageCircleHeart size={24} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">WhatsApp</p>
                                <a href="https://wa.me/94766636478" target="_blank" className="text-white font-medium hover:text-[#00a8e8]">
                                +94 76 663 6478
                                </a>
                            </div>
                        </div>

                    {/* Location Card */}
                        <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00a8e8]/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-[#00a8e8]/10 flex items-center justify-center text-[#00a8e8] group-hover:bg-[#00a8e8] group-hover:text-white transition-all">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">Location</p>
                                <p className="text-white font-medium">Bollatha, Ganemulla</p>
                            </div>
                        </div> 
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#00a8e8]/10 to-transparent p-10 rounded-3xl border border-[#00a8e8]/20"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Internship Status</h3>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <p className="text-green-400 font-medium uppercase tracking-widest text-sm">Open for Opportunities</p>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-8">
                    I am currently looking for a **24-week Software Development Internship** as part of my industrial training requirement. If you think I'd be a good fit for your team, let's talk!
                    </p>
                    <a 
                    href="mailto:maleeshashashini70@gmail.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#00a8e8] text-white rounded-full font-bold hover:bg-[#007ea7] transition-all shadow-lg shadow-[#00a8e8]/20"
                    >
                    Send a Message <Send size={18} />
                    </a>
                </motion.div>
            </div>

        </div>
    </section>
    );
};