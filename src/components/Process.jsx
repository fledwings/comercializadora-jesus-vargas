import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Zap } from 'lucide-react';

export function Process() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Abstract background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Nosotros Nos <span className="text-red-500">Encargamos</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-red-600 rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-[700px] text-lg"
          >
            Un proceso simple y directo para que no pierdas tiempo y comiences a producir de inmediato.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 relative">
          {/* Connector Line (visible on md+) */}
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-red-900/0 via-red-500/50 to-red-900/0 -translate-y-1/2 z-0"></div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#111] border-2 border-red-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <MousePointerClick className="h-10 w-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">1. Contáctanos</h3>
            <p className="text-gray-400">
              Contáctanos para asesoría personalizada sobre qué camión, remolque o refacción necesitas.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#111] border-2 border-red-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <Zap className="h-10 w-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">2. ¡A Trabajar!</h3>
            <p className="text-gray-400">
              Nosotros preparamos tu equipo y te lo entregamos listo para operar. Tu única preocupación será comenzar a generar ingresos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
