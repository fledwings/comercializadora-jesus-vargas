import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Phone } from 'lucide-react';

export function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://sensible-spoonbill-485.convex.cloud/api/storage/1feba9d9-1442-4718-82fd-2d29b176c4e5")' }}
        />
        {/* Dark Opaque Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        {/* Gradient to blend with the next dark section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-red-500/30 bg-red-50 px-3 py-1 text-xs sm:text-sm text-red-600 mb-6 sm:mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-red-600 mr-2 animate-pulse"></span>
          Líderes en el mercado de tractocamiones
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-6 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-red-600 drop-shadow-md">Comercializadora</span><br />
          <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Vargas Flores
          </span>
        </motion.h1>

        <motion.p 
          className="max-w-[700px] text-base sm:text-lg md:text-xl text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Especialistas en venta, armado y refacciones de camiones y remolques. 
          Más de 20 años impulsando el transporte.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0 h-14 px-8 text-lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Cotizar Servicio <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-red-900/50 hover:bg-red-900/20 text-white bg-black/50 backdrop-blur-sm" onClick={() => window.location.href = 'tel:2227233653'}>
            <Phone className="mr-2 h-5 w-5" /> Llamar ahora
          </Button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-red-500 transition-colors animate-bounce"
        onClick={scrollToServices}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
