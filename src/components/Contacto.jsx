import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  return (
    <section id="contacto" className="relative py-20 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="handwriting-title text-4xl md:text-5xl text-marron mb-4">
            ¿Listo para importar Auténticos productos agrícolas Colombianos?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Habla con nosotros hoy y descubre cómo podemos ser tu proveedor de confianza en Colombia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="https://wa.me/573101234567" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-verde-oscuro text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg shadow-lg">
            📱 Cotizar por Whatsapp
          </a>
          <span className="handwriting text-2xl text-marron font-bold">o</span>
          <a href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-marron px-8 py-4 rounded-lg border-2 border-marron hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg">
            ✉️ Contacto por Email
          </a>
        </div>

        <div className="text-center mb-12">
          <button className="bg-marron text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all">
            Solicitar Cotización
          </button>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-marron/20">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="block text-marron font-bold mb-2 text-lg">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full px-4 py-3 border-2 border-marron/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-crema/30"
              />
            </div>

            <div>
              <label className="block text-marron font-bold mb-2 text-lg">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-marron/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-crema/30"
              />
            </div>

            <div>
              <label className="block text-marron font-bold mb-2 text-lg">Empresa</label>
              <input
                type="text"
                name="empresa"
                required
                className="w-full px-4 py-3 border-2 border-marron/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-crema/30"
              />
            </div>

            <div>
              <label className="block text-marron font-bold mb-2 text-lg">Mensaje</label>
              <textarea
                name="mensaje"
                required
                rows="4"
                className="w-full px-4 py-3 border-2 border-marron/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-crema/30"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-marron text-white py-4 rounded-xl text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>

      {/* Ondas */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
          <path fill="#F4C430" d="M0,50 Q360,0 720,50 T1440,50 L1440,150 L0,150 Z" opacity="0.5"/>
          <path fill="#5C7A3C" d="M0,80 Q360,30 720,80 T1440,80 L1440,150 L0,150 Z" opacity="0.3"/>
          <path fill="#4A5D2E" d="M0,100 Q360,60 720,100 T1440,100 L1440,150 L0,150 Z"/>
        </svg>
      </div>
    </section>
  );
}
