export default function Footer() {
  return (
    <footer id="nosotros" className="relative bg-gradient-to-br from-verde-oscuro via-[#4A5D2E] to-verde-oscuro text-white pt-24 pb-8">
      {/* Ondas superiores invertidas */}
      <div className="absolute top-0 left-0 w-full transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
          <path fill="#F5E6D3" d="M0,50 Q360,0 720,50 T1440,50 L1440,150 L0,150 Z" opacity="0.3"/>
          <path fill="#F5E6D3" d="M0,80 Q360,30 720,80 T1440,80 L1440,150 L0,150 Z" opacity="0.5"/>
          <path fill="#F5E6D3" d="M0,100 Q360,60 720,100 T1440,100 L1440,150 L0,150 Z"/>
        </svg>
      </div>

      {/* Fondo de montañas */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="handwriting-title text-5xl mb-6">Nosotros</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Columna izquierda */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl">🌿</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest">PRODUCTOS</p>
                <h3 className="text-3xl font-bold">BellaVista</h3>
              </div>
            </div>
            
            <p className="text-xl font-bold mb-4 leading-relaxed">
              Calidad Colombiana para el mercado Mundial
            </p>
            
            <p className="text-white/90 leading-relaxed mb-6">
              Somos expertos en exportación de productos artesanales de nuestro agro.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              Con productos Bellavista, tu empresa mayorista o marca privada de alimentos 
              confía en un abastecimiento continuo y de calidad.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-6">Contacto</h4>
            <div className="space-y-3 text-white/90">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span>✉️</span>
                <a href="mailto:info@productosbellavista.com" className="hover:text-amarillo transition-colors">
                  info@productosbellavista.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span>📍</span>
                Mogotes, Colombia
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span>📱</span>
                <a href="tel:+573101234567" className="hover:text-amarillo transition-colors">
                  +57 310 123 4567
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span>📷</span>
                @productosbellavista
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span>👥</span>
                Productos Bellavista Export
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>© 2025 Productos Bellavista. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
