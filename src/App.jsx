import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { AboutUs } from './components/AboutUs.jsx';
import { MissionVision } from './components/MissionVision.jsx';
import { Services } from './components/Services.jsx';
import { Process } from './components/Process.jsx';
import { SpareParts } from './components/SpareParts.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  // Use useEffect to set a dark theme class on body to ensure consistency
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <MissionVision />
        <Services />
        <SpareParts />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
