"use client";

import React from "react";

export const Navbar = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    const navLinks = [
        {name:'Home', id:'home'},
        {name:'About',id:'about'},
        {name:'Education',id:'education'},
        {name:'Skills',id:'skills'},
        {name:'Projects',id:'projects'},
        {name:'Contact',id:'contact'},
    ];

    return(
        <nav id="navbar" className="p-6 bg-[#00171f]/80 hidden md:flex justify-between item-center border-b border-white/10 backdrop-blur-md">
            <h1 className="text-xl font-bold text-white">MALEESHA SHASHINI</h1>

            <div className="flex gap-6">
                {navLinks.map((link) =>(
                    <button
                        key={link.id}
                        onClick = {() => scrollToSection(link.id)}
                        className="text-gray-300 hover:text-white transition-colors duration-500 relative group hover:scale-105"
                    >
                        {link.name}
                    </button>
                ))} 
            </div>
        </nav>
    );
};