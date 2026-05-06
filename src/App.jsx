import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { MissionVision } from './components/MissionVision';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { SpareParts } from './components/SpareParts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Use useEffect to set a dark theme class on body to ensure consistency
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <MissionVision />
          <Services />
          <Process />
          <SpareParts />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
