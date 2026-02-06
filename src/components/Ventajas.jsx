export default function Ventajas() {
  const iconos = [
    {
      title: 'Enfoque Exportador',
      desc: 'Productos alimenticios preparados para mercados internacionales y compradores mayoristas.',
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M30,50 L45,65 L70,35" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
        <path d="M50,10 L60,25 M50,10 L40,25" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>`
    },
    {
      title: 'Calidad Controlada',
      desc: 'Procesos estandarizados y selección de materias primas de origen agrícola.',
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="60" height="50" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M30,40 L40,50 L30,60" fill="none" stroke="currentColor" stroke-width="3"/>
        <line x1="45" y1="45" x2="65" y2="45" stroke="currentColor" stroke-width="3"/>
        <line x1="45" y1="55" x2="65" y2="55" stroke="currentColor" stroke-width="3"/>
      </svg>`
    },
    {
      title: 'Capacidad de Suministro',
      desc: 'Producción constante a volúmenes ajustados a la necesidad del cliente B2B.',
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="40" width="20" height="40" fill="none" stroke="currentColor" stroke-width="3"/>
        <rect x="50" y="30" width="20" height="50" fill="none" stroke="currentColor" stroke-width="3"/>
        <line x1="20" y1="85" x2="80" y2="85" stroke="currentColor" stroke-width="3"/>
      </svg>`
    },
    {
      title: 'Private Label',
      desc: 'Productos sin marca listos para comercializar bajo tu propia identidad.',
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,20 L50,35 L70,20 L70,65 L30,65 Z" fill="none" stroke="currentColor" stroke-width="3"/>
        <line x1="40" y1="40" x2="60" y2="40" stroke="currentColor" stroke-width="2"/>
        <line x1="40" y1="50" x2="60" y2="50" stroke="currentColor" stroke-width="2"/>
      </svg>`
    }
  ];

  return (
    <section className="relative py-20 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="handwriting-title text-4xl md:text-5xl text-marron mb-6">
            ¿Por qué elegir Productos Bellavista?
          </h2>
          <div className="w-32 h-1 bg-amber-600 mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {iconos.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200">
              <div 
                className="w-24 h-24 mx-auto mb-4 text-marron"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <h3 className="handwriting text-xl font-bold text-marron mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="handwriting text-xl text-gray-800 mb-6">¿Buscas un proveedor confiable para tu mercado?</p>
          <a href="https://wa.me/573101234567" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-verde-oscuro text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium">
            📱 Hablar por Whatsapp
          </a>
        </div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
          <path fill="#F4C430" d="M0,50 Q360,0 720,50 T1440,50 L1440,150 L0,150 Z" opacity="0.5"/>
          <path fill="#5C7A3C" d="M0,80 Q360,30 720,80 T1440,80 L1440,150 L0,150 Z" opacity="0.3"/>
          <path fill="#8B7355" d="M0,100 Q360,60 720,100 T1440,100 L1440,150 L0,150 Z"/>
        </svg>
      </div>
    </section>
  );
}
