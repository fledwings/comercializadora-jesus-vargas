import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Team', href: '#about' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-900/50' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('#home')}>
          <img 
            src="https://sensible-spoonbill-485.convex.cloud/api/storage/a3935ac8-628a-4e0a-8944-2d268f7d68b5" 
            alt="Comercializadora Vargas Flores" 
            className="h-10 w-auto rounded-lg"
          />
          <span className="text-xl font-bold tracking-tighter text-white">
            VARGAS <span className="text-red-500">FLORES</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white border-0"
            onClick={() => scrollTo('#contact')}
          >
            Cotizar servicio
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-red-900/50 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg font-medium text-gray-300 hover:text-red-500 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white w-full mt-4"
                onClick={() => scrollTo('#contact')}
              >
                Cotizar servicio
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
