import React from 'react';

const LogoSection = () => {
  // Aquí pondrás las rutas de tus archivos PNG
  const badges = [
    { src: "/EXPORTACIÓN.png", alt: "Sello de Exportación" },
    { src: "/CALIDAD CERTIFICADA.png", alt: "Calidad Certificada" },
    { src: "/ABASTECIMIENTO.png", alt: "Abastecimiento Garantizado" },
  ];

  return (
    <section className="bg-[#F7EAE4] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Contenedor de Logos - Sin bordes pesados, enfoque en los sellos */}
        <div className="flex flex-wrap justify-center items-end gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
            >
              {/* Contenedor del PNG con tamaño controlado */}
              <div className="w-50 h-42 md:w-56 md:h-40 flex items-center justify-center">
                <img 
                  src={badge.src} 
                  alt={badge.alt} 
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default LogoSection;