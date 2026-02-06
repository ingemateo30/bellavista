export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-32 bg-crema overflow-hidden">
      {/* Imagen de fondo con montañas */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%2387CEEB%22 width=%221200%22 height=%22600%22/%3E%3Cpath fill=%22%235C7A3C%22 d=%22M0,400 L200,300 L400,350 L600,280 L800,340 L1000,320 L1200,380 L1200,600 L0,600 Z%22/%3E%3Cpath fill=%22%236B8E23%22 d=%22M0,450 L300,380 L600,400 L900,370 L1200,420 L1200,600 L0,600 Z%22/%3E%3C/svg%3E')"
        }}
      ></div>

      {/* Ondas decorativas superiores */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="#F4C430" d="M0,20 Q360,0 720,20 T1440,20 L1440,0 L0,0 Z" opacity="0.5"/>
          <path fill="#5C7A3C" d="M0,40 Q360,20 720,40 T1440,40 L1440,0 L0,0 Z" opacity="0.3"/>
          <path fill="#F5E6D3" d="M0,60 Q360,40 720,60 T1440,60 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Logo" className="h-20 w-auto" 
                     onError={(e) => e.target.style.display = 'none'} />
                <div>
                  <p className="text-xs text-marron uppercase tracking-widest">PRODUCTOS</p>
                  <h1 className="text-4xl font-bold text-marron">BellaVista</h1>
                </div>
              </div>
              
              <p className="text-base text-gray-800 leading-relaxed mb-8">
                Producción y exportación de panela, piloncillo, café y otros productos agrícolas, 
                con capacidad de suministro constante y estándares de calidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/573101234567" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-verde-oscuro text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium">
                📱 Cotizar por Whatsapp
              </a>
              <a href="#productos"
                className="inline-flex items-center justify-center bg-white text-marron px-6 py-3 rounded-lg border-2 border-marron hover:bg-gray-50 transition-all font-medium">
                Ver Productos
              </a>
            </div>
          </div>

          {/* Columna derecha - Placeholder imagen */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-marron/20 bg-white/50 backdrop-blur">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <p>Imagen Hero</p>
              </div>
            </div>
          </div>
        </div>

        {/* Badges certificación */}
        <div className="mt-16 flex justify-center gap-6">
          <div className="text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-green-800 text-white flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-center">
                <div className="text-2xl">🌍</div>
                <p className="text-[10px] font-bold mt-1">EXPORTACIÓN</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="w-28 h-28 mx-auto bg-yellow-400 text-marron flex items-center justify-center border-4 border-white shadow-lg" 
                 style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
              <div className="text-center">
                <p className="text-[9px] font-bold leading-tight">CALIDAD<br/>CERTIFICADA</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-marron text-white flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-center">
                <div className="text-2xl">☕</div>
                <p className="text-[9px] font-bold mt-1 leading-tight">ABASTECIMIENTO<br/>GARANTIZADO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ondas decorativas inferiores */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
          <path fill="#F4C430" d="M0,50 Q360,0 720,50 T1440,50 L1440,150 L0,150 Z" opacity="0.5"/>
          <path fill="#5C7A3C" d="M0,80 Q360,30 720,80 T1440,80 L1440,150 L0,150 Z" opacity="0.3"/>
          <path fill="#F5E6D3" d="M0,100 Q360,60 720,100 T1440,100 L1440,150 L0,150 Z"/>
        </svg>
      </div>
    </section>
  );
}
