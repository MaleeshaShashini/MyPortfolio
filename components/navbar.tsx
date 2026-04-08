import React from "react";

export const Navbar = () => {

    const navLinks = [
        {name:'Home', id:'home'},
        {name:'About',id:'about'},
        {name:'Education',id:'education'},
        {name:'Skills',id:'skills'},
        {name:'Project',id:'project'},
        {name:'Contact',id:'contact'},
    ];

    return(
        <nav id="navbar" className="p-6 bg-[#00171f] flex justify-between item-center border-b border-white/10">
            <h1 className="text-xl font-bold text-white">MALEESHA SHASHINI</h1>

            <div className="flex gap-6">
                {navLinks.map((link) =>(
                    <button
                        key={link.id}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        {link.name}
                    </button>
                ))} 
            </div>
        </nav>
    );
};