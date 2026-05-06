import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-red-900/20 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <img 
              src="https://sensible-spoonbill-485.convex.cloud/api/storage/92942505-fda3-427f-9fa9-340c2f1bf3c4" 
              alt="Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-bold tracking-tighter text-white">
              VARGAS <span className="text-red-500">FLORES</span>
            </span>
          </div>

          <div className="text-center md:text-right flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Comercializadora Vargas Flores. Todos los derechos reservados.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-400 hover:text-white text-sm underline-offset-4 hover:underline transition-colors">
                  Políticas de Privacidad
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-[#0a0a0a] text-white border-red-900/20">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">Políticas de Privacidad</DialogTitle>
                </DialogHeader>
                <div className="text-gray-300 space-y-4 text-sm mt-4">
                  <p>
                    <strong>1. Identidad y domicilio del responsable</strong><br/>
                    Comercializadora Vargas Flores es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
                  </p>
                  <p>
                    <strong>2. Fines para los cuales recabamos y utilizamos sus datos</strong><br/>
                    Sus datos personales serán utilizados para proveer los servicios y productos requeridos, informarle sobre cambios o nuevos productos o servicios que estén relacionados con el contratado o adquirido por el cliente, dar cumplimiento a obligaciones contraídas con nuestros clientes, evaluar la calidad del servicio, y realizar estudios internos sobre hábitos de consumo.
                  </p>
                  <p>
                    <strong>3. Datos personales que obtenemos y de dónde</strong><br/>
                    Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente, cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley.
                  </p>
                  <p>
                    <strong>4. Limitación de uso y divulgación de datos</strong><br/>
                    Usted puede dejar de recibir mensajes promocionales siguiendo los procedimientos correspondientes establecidos por la empresa.
                  </p>
                  <p>
                    <strong>5. Derechos ARCO</strong><br/>
                    Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que hemos implementado.
                  </p>
                  <p>
                    <strong>6. Modificaciones al aviso de privacidad</strong><br/>
                    Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

        </div>
      </div>
    </footer>
  );
}
