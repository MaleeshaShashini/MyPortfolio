import React from 'react';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

import { Snowfall } from '@/components/Snowfall';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#00171f] via-[#003459] to-[#00171f] overflow-x-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Snowfall />
      </div>
      
      <Navbar />

      <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />

    </div>

  );
}
