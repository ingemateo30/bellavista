export default function Nosotros() {
  const pasos = [
    {
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="65" cy="65" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M25,45 Q30,50 35,55" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M55,75 Q60,70 65,65" fill="none" stroke="currentColor" stroke-width="3"/>
      </svg>`,
      title: 'Contáctanos',
      desc: 'Habla con nosotros a través de Whatsapp o abre nuestro formulario y cuéntanos tus necesidades'
    },
    {
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="50" height="60" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
        <line x1="35" y1="40" x2="65" y2="40" stroke="currentColor" stroke-width="2"/>
        <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" stroke-width="2"/>
        <line x1="35" y1="60" x2="55" y2="60" stroke="currentColor" stroke-width="2"/>
      </svg>`,
      title: 'Cotización',
      desc: 'Te enviamos una propuesta personalizada con precios y condiciones según tus requerimientos'
    },
    {
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M40,35 L50,45 L70,25" fill="none" stroke="currentColor" stroke-width="3"/>
        <rect x="60" y="55" width="15" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>`,
      title: 'Producción',
      desc: 'Confirmado el pedido, coordinamos la producción y el empaque del producto bajo tus especificaciones'
    },
    {
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,60 L30,40 L70,40 L80,60 L20,60 Z" fill="none" stroke="currentColor" stroke-width="3"/>
        <rect x="25" y="60" width="50" height="15" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="35" cy="82" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="65" cy="82" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
      </svg>`,
      title: 'Exportación',
      desc: 'Gestionamos todo el proceso logístico y documental para una exportación segura y oportuna.'
    }
  ];

  return (
    <section id="exportacion" className="relative py-16 bg-[#F7EAE4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-[38px] md:text-[44px] text-[#2C1810] mb-2 font-['Schoolbell',_cursive] leading-tight">
            Proceso de Compra
          </h2>
          <p className="text-[15px] text-[#2C1810] leading-relaxed font-['Kumbh_Sans',_sans-serif] max-w-2xl mx-auto">
            Así es trabajar con Productos Bellavista:<br/>
            simple, eficiente y enfocado en tus necesidades mayoristas.
          </p>
        </div>

        {/* Tarjetas de proceso */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {pasos.map((paso, i) => (
            <div key={i} className="relative">
              <div className="bg-[#FDF8F4] rounded-2xl p-6 shadow-sm">
                <div 
                  className="w-20 h-20 mx-auto mb-4 text-[#3D3D3D] opacity-80"
                  dangerouslySetInnerHTML={{ __html: paso.icon }}
                />
                <h3 className="text-[18px] text-[#2C1810] mb-2 text-center font-['Handlee',_cursive] leading-snug">
                  {paso.title}
                </h3>
                <p className="text-[#6B5E55] text-[13px] text-center leading-relaxed font-['Kumbh_Sans',_sans-serif]">
                  {paso.desc}
                </p>
              </div>
              {/* Flecha entre tarjetas */}
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-[#3D3D3D] opacity-40">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-[#F7EAE4] rounded-2xl p-8 text-center shadow-sm max-w-3xl mx-auto">
          <h3 className="text-[26px] md:text-[30px] text-[#2C1810] mb-3 font-['Handlee',_cursive] leading-snug">
            ¿Listo para comenzar?
          </h3>
          
          <a 
            href="#contacto"
            className="inline-block bg-[#6B4E3D] text-white px-10 py-3 rounded-lg font-['Kumbh_Sans',_sans-serif] font-semibold text-[15px] hover:bg-[#5A3F2F] transition-all shadow-sm"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>

      {/* Ondas del final - Aquí insertas tu SVG */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
         <img 
          src="/54.svg" 
          alt="" 
          className="w-full h-auto object-bottom" 
        />
      </div>
    </section>
  );
}