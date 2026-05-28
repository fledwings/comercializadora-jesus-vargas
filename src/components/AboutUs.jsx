import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, DollarSign, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function AboutUs() {
  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "20+",
      description: "Años de Experiencia"
    },
    {
      icon: <Star className="h-8 w-8 text-red-500" />,
      title: "4.5",
      description: "Estrellas de Calificación"
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "80%",
      description: "Clientes Frecuentes"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Accesibles",
      description: "Precios Competitivos"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative border-b border-red-900/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Quiénes <span className="text-red-500">Somos</span>
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
            className="text-gray-400 max-w-[800px] text-lg"
          >
            En Comercializadora Vargas Flores, nos enorgullece ser un referente en el sector de tractocamiones. 
            Nuestra trayectoria y compromiso con la excelencia nos avalan en cada operación.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-[#111] border-red-900/30 hover:border-red-500/50 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full gap-4">
                  <div className="p-4 rounded-full bg-red-500/10">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white">{stat.title}</h3>
                  <p className="text-gray-400 font-medium">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-[#111] border-red-900/30 overflow-hidden group">
            <CardContent className="p-0 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/5 h-48 md:h-auto min-h-[200px] bg-[#1a1a1a] relative flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-red-900/30">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/50 via-transparent to-transparent pointer-events-none" />
                <MapPin className="w-16 h-16 text-red-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Nuestra Ubicación</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Carretera federal Puebla-Tehuacán km. 28.5<br />
                  Santiago Acatlán, Puebla.
                </p>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-fit border-red-900/50 hover:bg-red-900/20 text-white bg-transparent h-12 px-6"
                >
                  <a 
                    href="https://maps.app.goo.gl/UG8FCbc3VvGytKe38?g_st=iw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver en Google Maps
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
