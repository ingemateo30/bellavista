import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Productos() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cada producto tiene posiciones personalizables (0-100 en %)
  const listaProductos = [
    {
      nombreKey: 'productos.panelaPulverizada',
      imagen: '/PRODUCTOS.png',
      categoriaKey: 'productos.endulzantes',
      // Posiciones del producto (imagen)
      productoTop: 65,    // % desde arriba
      productoLeft: 42,   // % desde izquierda
      productoScale: 1.5, // Escala de la imagen (1.3 = 30% más grande)
      // Posiciones del letrero
      letreroTop: 96.5,     // % desde arriba
      letreroLeft: 38,    // % desde izquierda
    },
    {
      nombreKey: 'productos.piloncillo',
      imagen: '/PRODUCTOS (5).png',
      categoriaKey: 'productos.tradicional',
      productoTop: 70,
      productoLeft: 75,
      productoScale: 3.5,
      letreroTop: 96.5,
      letreroLeft: 70,
    },
    {
      nombreKey: 'productos.cafe',
      imagen: '/PRODUCTOS (3).png',
      categoriaKey: 'productos.premium',
      productoTop: 70,
      productoLeft: 80,
      productoScale: 4.3,
      letreroTop: 96.5,
      letreroLeft: 85,
    },
    {
      nombreKey: 'productos.derivados',
      imagen: '/PRODUCTOS (6).png',
      categoriaKey: 'productos.proximamente',
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
    <section id="productos" className="relative bg-[#F7EAE4] w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden flex items-center">

      {/* CAPA 1: IMAGEN DEL PAISAJE (Fondo profundo) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/PRODUCTOS100-32.png"
          className="absolute bottom-0 w-full h-full object-contain"
          alt="Paisaje Bellavista"
        />
      </div>

      {/* CAPA 3: CONTENIDO (Productos y Texto) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        
        {/* Controles de navegación */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <button
            onClick={prevSlide}
            disabled={totalSlides <= 1}
            className="bg-[#5D8B3F] hover:bg-[#4a6f32] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label={t('productos.productosAnteriores')}
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Indicadores de slides */}
          <div className="flex gap-1.5 sm:gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-6 sm:w-8 bg-[#5D8B3F]'
                    : 'w-2 sm:w-3 bg-[#5D8B3F]/30 hover:bg-[#5D8B3F]/50'
                }`}
                aria-label={`${t('productos.irAlSlide')} ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={totalSlides <= 1}
            className="bg-[#5D8B3F] hover:bg-[#4a6f32] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label={t('productos.siguientesProductos')}
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
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
                className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
              >
                {listaProductos
                  .slice(slideIndex * productosPerSlide, (slideIndex + 1) * productosPerSlide)
                  .map((prod, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center justify-center transition-all duration-500 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] px-4"
                    >
                      {/* Contenedor flex centrado para mantener proporciones */}
                      <div className="relative flex flex-col items-center justify-center w-full h-full">

                        {/* Imagen del Producto - Centrada con escala proporcional */}
                        <div className="relative flex items-center justify-center transition-all duration-500 group-hover:-translate-y-4 z-10 mb-6 sm:mb-8 md:mb-10">
                          <img
                            src={prod.imagen}
                            alt={t(prod.nombreKey)}
                            className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] xl:w-[298px] xl:h-[298px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
                            style={{
                              transform: `scale(${Math.min(prod.productoScale || 1, 1.5)})`,
                              transformOrigin: 'center center',
                            }}
                          />
                          {/* Sombra de contacto */}
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-3 sm:w-24 sm:h-4 lg:w-28 lg:h-5 bg-black/25 blur-xl rounded-full"></div>
                        </div>

                        {/* Etiqueta de madera - Centrada debajo del producto */}
                        <div className="relative transition-all duration-500 group-hover:-translate-y-4 z-20">
                          <div className="bg-[#F2E8DF] border-x-2 sm:border-x-3 lg:border-x-4 border-b-2 border-[#7A5C41] px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 shadow-lg whitespace-nowrap">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2C1810] font-['Patrick_Hand_SC',_cursive]">
                              {t(prod.nombreKey)}
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