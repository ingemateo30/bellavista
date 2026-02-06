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
    <section id="exportacion" className="relative py-20 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="handwriting-title text-4xl md:text-5xl text-marron mb-4">
            Proceso de Compra
          </h2>
          <p className="handwriting text-lg text-gray-700 leading-relaxed">
            Así es trabajar con Productos Bellavista:<br/>
            simple, eficiente y enfocado en tus necesidades mayoristas.
          </p>
        </div>

        {/* Tarjetas de proceso */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {pasos.map((paso, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-200">
                <div 
                  className="w-24 h-24 mx-auto mb-4 text-marron"
                  dangerouslySetInnerHTML={{ __html: paso.icon }}
                />
                <h3 className="handwriting-title text-xl text-marron mb-3 text-center">
                  {paso.title}
                </h3>
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  {paso.desc}
                </p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-marron">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border-4 border-marron/20">
          <h3 className="handwriting-title text-3xl md:text-4xl text-marron mb-4">
            ¿Listo para importar Auténticos productos agrícolas Colombianos?
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Habla con nosotros hoy y descubre cómo podemos ser tu proveedor de confianza en Colombia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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
          <button className="bg-marron text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all">
            Solicitar Cotización
          </button>
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
