import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MissionVision() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#111]/80 backdrop-blur border-red-900/30 h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg leading-relaxed pt-4">
                  Proveer a la industria del transporte soluciones integrales en camiones, remolques y tractopartes, 
                  garantizando calidad, seguridad y eficiencia. Nos dedicamos a mantener el motor de la economía en 
                  movimiento, ofreciendo productos confiables y un servicio excepcional que supere las expectativas de 
                  nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[#111]/80 backdrop-blur border-red-900/30 h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg leading-relaxed pt-4">
                  Ser la empresa líder y de mayor confianza en la comercialización y armado de tractocamiones a nivel 
                  nacional. Aspiramos a innovar constantemente en nuestros procesos y expandir nuestro alcance, siendo 
                  reconocidos por nuestra integridad, calidad humana y contribución al desarrollo del transporte de carga.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
