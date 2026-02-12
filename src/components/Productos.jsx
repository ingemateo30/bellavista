import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Productos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Cada producto tiene posiciones personalizables (0-100 en %)
  const listaProductos = [
    { 
      nombre: 'Panela Pulverizada', 
      imagen: '/PRODUCTOS.png', 
      categoria: 'Endulzantes',
      // Posiciones del producto (imagen)
      productoTop: 65,    // % desde arriba
      productoLeft: 42,   // % desde izquierda
      productoScale: 1.5, // Escala de la imagen (1.3 = 30% más grande)
      // Posiciones del letrero
      letreroTop: 96.5,     // % desde arriba
      letreroLeft: 38,    // % desde izquierda
    },
    { 
      nombre: 'Piloncillo / Panela', 
      imagen: '/PRODUCTOS (5).png', 
      categoria: 'Tradicional',
      productoTop: 70,
      productoLeft: 75,
      productoScale: 3.5,
      letreroTop: 96.5,
      letreroLeft: 70,
    },
    { 
      nombre: 'Café de Origen', 
      imagen: '/PRODUCTOS (3).png', 
      categoria: 'Premium',
      productoTop: 70,
      productoLeft: 80,
      productoScale: 4.3,
      letreroTop: 96.5,
      letreroLeft: 85,
    },
    { 
      nombre: 'Nuevos Derivados', 
      imagen: '/PRODUCTOS (6).png', 
      categoria: 'Próximamente',
      productoTop: 70,
      productoLeft: 75,
      productoScale: 4.3,
      letreroTop: 96.5,
      letreroLeft: 90,
    },
    
    // Puedes agregar más productos aquí
  ];

  const productosPerSlide = 4;
  const totalSlides = Math.ceil(listaProductos.length / productosPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProducts = () => {
    const start = currentSlide * productosPerSlide;
    return listaProductos.slice(start, start + productosPerSlide);
  };

  return (
    <section id="productos" className="relative bg-[#F7EAE4] w-full min-h-screen py-24 overflow-hidden flex items-center">
      
      {/* CAPA 1: IMAGEN DEL PAISAJE (Fondo profundo) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/PRODUCTOS100-32.png" 
          className="absolute bottom-0 w-full h-full object-contain"
          alt="Paisaje Bellavista"
        />
      </div>

      {/* CAPA 3: CONTENIDO (Productos y Texto) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        
        {/* Controles de navegación */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={prevSlide}
            disabled={totalSlides <= 1}
            className="bg-[#5D8B3F] hover:bg-[#4a6f32] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Productos anteriores"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Indicadores de slides */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'w-8 bg-[#5D8B3F]' 
                    : 'w-3 bg-[#5D8B3F]/30 hover:bg-[#5D8B3F]/50'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={totalSlides <= 1}
            className="bg-[#5D8B3F] hover:bg-[#4a6f32] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Siguientes productos"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Slider de Productos */}
        <div className="relative overflow-visible">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
              >
                {listaProductos
                  .slice(slideIndex * productosPerSlide, (slideIndex + 1) * productosPerSlide)
                  .map((prod, index) => (
                    <div 
                      key={index} 
                      className="group relative flex flex-col items-center transition-all duration-500"
                      style={{ minHeight: '550px' }}
                    >
                      {/* Contenedor con posicionamiento absoluto para máxima flexibilidad */}
                      <div className="relative w-full h-full overflow-visible">
                        
                        {/* Imagen del Producto - Posicionable y Escalable */}
                        <div 
                          className="absolute transition-all duration-500 group-hover:-translate-y-4 z-10"
                          style={{
                            top: `${prod.productoTop}%`,
                            left: `${prod.productoLeft}%`,
                            transform: `translate(-50%, -50%) scale(${prod.productoScale || 1})`,
                            transformOrigin: 'center center',
                          }}
                        >
                          <img
                            src={prod.imagen}
                            alt={prod.nombre}
                            className="w-[298px] h-[298px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
                          />
                          {/* Sombra de contacto */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/25 blur-xl rounded-full -z-10"></div>
                        </div>

                        {/* Etiqueta de madera - Posicionable con z-index superior */}
                        <div 
                          className="absolute transition-all duration-500 group-hover:-translate-y-4 z-20"
                          style={{
                            top: `${prod.letreroTop}%`,
                            left: `${prod.letreroLeft}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          <div className="bg-[#F2E8DF] border-x-4 border-b-2 border-[#7A5C41] px-6 py-2 shadow-lg whitespace-nowrap">
                            <h3 className="text-xl font-bold text-[#2C1810] font-['Patrick_Hand_SC',_cursive]">
                              {prod.nombre}
                            </h3>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}