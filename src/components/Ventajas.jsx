import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Enfoque Exportador",
      desc: "Productos alimenticios preparados para mercados internacionales y compradores mayoristas.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="32" cy="32" r="28" />
          <path d="M4 32 Q16 20, 32 32 T60 32" />
          <path d="M32 4 Q20 16, 32 32 T32 60" />
          <circle cx="32" cy="32" r="3" fill="currentColor" />
          <path d="M20 18 L26 12 L24 8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Calidad Controlada",
      desc: "Procesos estandarizados y selección de materias primas de origen agrícola.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="12" y="8" width="40" height="48" rx="2" />
          <rect x="12" y="8" width="40" height="12" fill="currentColor" opacity="0.1" />
          <path d="M20 28 L28 36 L44 20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "Capacidad de Suministro",
      desc: "Producción constante a volúmenes ajustados a la necesidad del cliente B2B.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="32" width="48" height="24" />
          <rect x="12" y="24" width="12" height="8" />
          <rect x="28" y="20" width="12" height="12" />
          <rect x="44" y="16" width="12" height="16" />
          <circle cx="38" cy="48" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Private Label",
      desc: "Productos sin marca listos para comercializar bajo tu propia identidad.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 8 L48 16 L48 28 L32 36 L16 28 L16 16 Z" />
          <path d="M32 36 L32 56" />
          <path d="M16 28 L8 32 L8 44 L32 56" />
          <path d="M48 28 L56 32 L56 44 L32 56" />
        </svg>
      ),
    }
  ];

  return (
    <section className="relative bg-[#F7EAE4] py-20 px-6 overflow-hidden">
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* TÍTULO PRINCIPAL - Schoolbell */}
        <h2 className="text-[38px] md:text-[44px] text-[#2C1810] mb-3 font-['Schoolbell',_cursive] leading-tight tracking-wide">
          ¿Por qué elegir Productos Bellavista?
        </h2>

        {/* Decorador de línea después del título */}
        <div className="flex justify-center mb-12">
           <div className="w-16 h-[2px] bg-[#D4B57E]"></div>
        </div>

        {/* REJILLA DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FDF8F4] p-6 rounded-2xl shadow-md"
            >
              {/* Icono - Estilo minimalista outline */}
              <div className="text-[#3D3D3D] mb-6 flex justify-center opacity-80">
                {item.icon}
              </div>
              
              {/* Título de Tarjeta - Handlee */}
              <h3 className="text-[19px] font-normal text-[#2C1810] mb-3 font-['Handlee',_cursive] leading-snug">
                {item.title}
              </h3>
              
              {/* Descripción - Kumbh Sans */}
              <p className="text-[#6B5E55] text-[13px] leading-relaxed font-['Kumbh_Sans',_sans-serif] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SECCIÓN DE CIERRE */}
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-[22px] md:text-[26px] text-[#2C1810] font-['Handlee',_cursive] font-normal">
            ¿Buscas un proveedor confiable para tu mercado?
          </h4>
          
          <a 
            href="https://wa.me/tu-numero" 
            className="flex items-center gap-2 bg-[#6B9456] text-white px-8 py-3 rounded-lg font-['Kumbh_Sans',_sans-serif] font-semibold text-[15px] hover:bg-[#5A7F48] transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hablar por Whatsapp
          </a>
        </div>
      </div>

      {/* DECORADORES DE FONDO (Ondas) */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <img 
          src="/porprodu.svg" 
          alt="" 
          className="w-full h-auto object-bottom" 
        />
      </div>
    </section>
  );
};

export default Features;