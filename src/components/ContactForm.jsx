import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/lib/supabase';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Venta de camiones',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // 1. Guardar en base de datos (Opcional, no bloquea el envío de correo)
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }]);

      if (dbError) {
        console.warn('Advertencia: No se pudo guardar en la base de datos, procediendo a enviar correo:', dbError);
      }

      // 2. Enviar email
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: formData
      });

      if (error) {
        console.error('Error from edge function:', error);
        throw error;
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error in contact form submission:', err);
      if (err instanceof Error) {
        console.error('Error message:', err.message);
      }
      if (err.context) {
        try {
          const contextData = await err.context.json();
          console.error('Error context:', contextData);
        } catch (e) {
          console.error('Error context could not be parsed');
        }
      }
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 w-full max-w-3xl mx-auto"
    >
      <Card className="bg-[#111]/80 backdrop-blur border-red-900/30 p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Envíanos un Mensaje</h3>
            <p className="text-gray-400">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">Nombre Completo</Label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-red-900/40 text-white focus-visible:ring-red-600 focus-visible:border-red-500 placeholder:text-gray-600"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Correo Electrónico</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="juan@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-red-900/40 text-white focus-visible:ring-red-600 focus-visible:border-red-500 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300">Teléfono</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="text"
                  required 
                  placeholder="Ej: 5581153338 o 55 8115 3338"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black/50 border-red-900/40 text-white focus-visible:ring-red-600 focus-visible:border-red-500 placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-300">Asunto</Label>
                <Select required value={formData.subject} onValueChange={handleSubjectChange}>
                  <SelectTrigger className="bg-black/50 border-red-900/40 text-white focus:ring-red-600 focus:border-red-500 [&>span]:text-left">
                    <SelectValue placeholder="Selecciona un servicio" className="text-gray-600" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111] border-red-900/50 text-white">
                    <SelectItem value="Venta de camiones">Venta de camiones</SelectItem>
                    <SelectItem value="Armado de camiones">Armado de camiones</SelectItem>
                    <SelectItem value="Refacciones">Refacciones</SelectItem>
                    <SelectItem value="Otro">Otro servicio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
              <Textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-black/50 border-red-900/40 text-white focus-visible:ring-red-600 focus-visible:border-red-500 placeholder:text-gray-600 resize-none"
              />
            </div>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-md flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <p>¡Mensaje enviado con éxito! Nos comunicaremos contigo pronto.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-md flex items-center gap-3"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p>Hubo un error al enviar el mensaje. Por favor, intenta comunicarte a nuestros números telefónicos directamente.</p>
              </motion.div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-6 text-lg group transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </Card>
    </motion.div>
  );
}
