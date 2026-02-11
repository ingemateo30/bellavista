import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/banner1.png',
      title:
        'Producción y exportación de panela, piloncillo, café y otros productos agrícolas, con capacidad de suministro constante y estándares de calidad.',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    {
      image: '/banner2.png',
      title:
        'Conectamos nuestra producción con mercados internacionales en España, Estados Unidos, Aruba y Canadá.',
      backgroundSize: '70%',
      backgroundPosition: 'right 15%', // Posicionado a la derecha
    },
  ];

  // Auto-avanzar slides cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="inicio" className="bg-[#F2E8DF]">
      <div className="relative w-full h-[85vh] flex items-center overflow-hidden">
        {/* Fondo con imagen curveada */}
        <div className="absolute inset-0 z-0">
          {/* Contenedor para transición de opacidad */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: slide.backgroundPosition,
                backgroundSize: slide.backgroundSize,
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}

          {/* SVG superior derecho */}
          <img
            src="/esquinaderecha.svg"
            alt=""
            className="absolute top-0 right-0 w-[65%] max-w-[700px] pointer-events-none z-10"
          />

          {/* SVG inferior izquierdo */}
          <img
            src="/3.svg"
            alt=""
            className="absolute bottom-0 left-0 w-[55%] max-w-[1000px] pointer-events-none z-10"
          />
        </div>

        {/* Contenido */}
        <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 w-full h-full flex items-center">
          <div className="max-w-xl">
            {/* Logo con PRODUCTOS integrado */}
            <div className="mb-6 relative h-[70px]">
              {/* Texto PRODUCTOS */}
              <span className="text-sm font-bold text-[#6E3A0D] tracking-[0.25em] block mb-1 mt-1 ml-12">
                PRODUCTOS
              </span>

              {/* Logo absoluto */}
              <img
                src="/VERSIONES LOGO-02.png"
                alt="BellaVista"
                className="absolute -left-4 -top-20 h-64 w-auto object-contain"
              />
            </div>

            {/* Texto descriptivo con transición */}
            <p className="text-base text-[#2C2C2C] leading-relaxed mb-8 font-medium max-w-[420px] transition-opacity duration-500">
              {slides[currentSlide].title}
            </p>

            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              
               <a href="https://wa.me/573101234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5D8B3F] text-white px-6 py-3.5 rounded-xl hover:bg-[#4E7535] transition-all font-bold shadow-lg shadow-[#5D8B3F]/20 text-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                Cotizar por WhatsApp
              </a>

              
               <a href="#productos"
                className="inline-flex items-center bg-[#EDE0D4] text-[#2C2C2C] px-8 py-3.5 rounded-xl hover:bg-[#E2D5C8] transition-all font-bold shadow-lg shadow-black/5 text-sm"
              >
                Ver Productos
              </a>
            </div>
          </div>
        </div>

        {/* Indicadores de slides */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-[#5D8B3F] w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}