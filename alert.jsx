import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, ShieldCheck, Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function SpareParts() {
  const features = [
    {
      icon: <Settings2 className="h-8 w-8 text-red-500" />,
      title: "Piezas Originales",
      description: "Garantizamos la durabilidad con componentes de fábrica."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
      title: "Garantía de Calidad",
      description: "Todas nuestras refacciones están probadas y certificadas."
    },
    {
      icon: <Gauge className="h-8 w-8 text-red-500" />,
      title: "Alto Rendimiento",
      description: "Optimiza el consumo y prolonga la vida de tu motor."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-red-900/20 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Refacciones para <br/><span className="text-red-500">Tu Unidad</span>
            </h2>
            <div className="h-1 w-20 bg-red-600 rounded-full mb-6" />
            <p className="text-gray-400 text-lg mb-8">
              Encuentra todo lo necesario para el mantenimiento y reparación de tus tractocamiones. 
              Manejamos un extenso surtido de refacciones para garantizar que tu unidad pase menos 
              tiempo en el taller y más tiempo en la carretera.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-[#111] rounded-lg border border-red-900/30 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract representation of parts */}
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent rounded-full animate-pulse blur-3xl"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#111] border-4 border-red-900 rounded-full flex items-center justify-center shadow-2xl z-20">
                <Settings2 className="w-24 h-24 text-red-500 animate-[spin_10s_linear_infinite]" />
              </div>

              <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-[#0a0a0a] border-2 border-red-900/50 rounded-full flex items-center justify-center z-10">
                <Settings2 className="w-12 h-12 text-red-800 animate-[spin_8s_linear_infinite_reverse]" />
              </div>
              
              <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-[#111] border-2 border-red-900/50 rounded-full flex items-center justify-center z-30">
                <Settings2 className="w-16 h-16 text-red-600 animate-[spin_12s_linear_infinite]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
