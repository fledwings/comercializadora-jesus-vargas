import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User, Building, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ContactForm } from './ContactForm';

export function Contact() {
  const contacts = [
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Jesus Vargas",
      number: "222 723 3653",
      href: "tel:+522227233653"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Patio",
      number: "222 719 3636",
      href: "tel:+522227193636"
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Oficina",
      number: "222 199 2780",
      href: "tel:+522221992780"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-red-900/20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5YzE3MTciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2SDI0VjM0SDZWMjRoMThWMEgzNnYyNGgxOHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Contáctanos
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
            Estamos listos para atenderte. Comunícate a cualquiera de nuestros números para obtener una cotización o resolver tus dudas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#111]/80 backdrop-blur border-red-900/30 hover:bg-red-900/20 hover:border-red-500/50 transition-all duration-300 h-full flex flex-col items-center justify-center p-8 text-center group">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">{contact.title}</h3>
                <a 
                  href={contact.href} 
                  className="flex items-center gap-2 text-white text-2xl font-bold hover:text-red-400 transition-colors"
                >
                  <Phone className="h-5 w-5 text-red-500 group-hover:animate-pulse" />
                  <span className="hover:underline">{contact.number}</span>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
