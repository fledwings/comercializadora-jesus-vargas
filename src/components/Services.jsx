import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Navigation, Wrench, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-red-500" />,
      title: "Venta de Camiones",
      description: "Ofrecemos una amplia gama de tractocamiones listos para operar, con garantía de funcionamiento óptimo y revisión exhaustiva.",
      image: "https://sensible-spoonbill-485.convex.cloud/api/storage/8440a4a6-1558-49ce-9f74-a6fcfefcbfe7"
    },
    {
      icon: <Navigation className="h-10 w-10 text-red-500" />,
      title: "Venta de Remolques",
      description: "Contamos con remolques de diversas capacidades y especificaciones, ideales para cualquier necesidad de carga y transporte.",
      image: "https://sensible-spoonbill-485.convex.cloud/api/storage/d2c73510-e86e-4881-b8eb-45ff8b797235"
    },
    {
      icon: <Wrench className="h-10 w-10 text-red-500" />,
      title: "Armado de Camiones",
      description: "Expertos en el ensamblaje y configuración personalizada de camiones, adaptándolos a las exigencias específicas de tu negocio.",
      image: "https://sensible-spoonbill-485.convex.cloud/api/storage/cf598772-cd30-445e-a8ee-e7199a9f2593"
    },
    {
      icon: <Settings className="h-10 w-10 text-red-500" />,
      title: "Refacciones y Tractopartes",
      description: "Amplio inventario de piezas y refacciones originales o de alta calidad para mantener tu flota siempre en movimiento.",
      image: "https://sensible-spoonbill-485.convex.cloud/api/storage/dac5ece5-51f6-410d-b7d6-6796adbc683f"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] border-y border-red-900/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Nuestros <span className="text-red-500">Servicios</span>
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
            Soluciones integrales diseñadas para potenciar tu capacidad de transporte y logística.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="bg-[#111] border-red-900/20 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 h-full group flex flex-col overflow-hidden">
                <CardHeader>
                  <div className="mb-4 bg-black/50 w-16 h-16 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300 border border-red-900/30 group-hover:border-red-500/50">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-gray-400 text-base mb-6">
                    {service.description}
                  </CardDescription>
                  {service.image && (
                    <div className="mt-auto w-full overflow-hidden rounded-xl border border-red-900/20 shadow-lg shadow-black/50">
                      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#0a0a0a]">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
