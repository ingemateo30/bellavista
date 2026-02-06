import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Barra amarilla superior */}
      <div className="w-full h-2 bg-amarillo"></div>
      
      <nav className="fixed top-2 w-full bg-crema/98 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo-placeholder.png" alt="Productos BellaVista" className="h-12 w-auto" 
                   onError={(e) => e.target.style.display = 'none'} />
              <span className="text-marron font-bold text-xl hidden sm:block">PRODUCTOS<br/>BellaVista</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-marron hover:text-verde-oscuro transition-colors font-medium">Inicio</a>
              <a href="#productos" className="text-marron hover:text-verde-oscuro transition-colors font-medium">Productos</a>
              <a href="#exportacion" className="text-marron hover:text-verde-oscuro transition-colors font-medium">Exportación</a>
              <a href="#contacto" className="text-marron hover:text-verde-oscuro transition-colors font-medium">Contacto</a>
              <a href="#nosotros" className="text-marron hover:text-verde-oscuro transition-colors font-medium">Nosotros</a>
              <a href="#contacto" className="bg-verde-oscuro text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold flex items-center gap-2">
                <span>📱</span> Cotizar
              </a>
            </div>

            {/* Mobile button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-marron">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-crema border-t border-marron/20">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-marron hover:bg-marron/10 rounded" onClick={() => setIsOpen(false)}>Inicio</a>
              <a href="#productos" className="block px-3 py-2 text-marron hover:bg-marron/10 rounded" onClick={() => setIsOpen(false)}>Productos</a>
              <a href="#exportacion" className="block px-3 py-2 text-marron hover:bg-marron/10 rounded" onClick={() => setIsOpen(false)}>Exportación</a>
              <a href="#contacto" className="block px-3 py-2 text-marron hover:bg-marron/10 rounded" onClick={() => setIsOpen(false)}>Contacto</a>
              <a href="#nosotros" className="block px-3 py-2 text-marron hover:bg-marron/10 rounded" onClick={() => setIsOpen(false)}>Nosotros</a>
              <a href="#contacto" className="block px-3 py-2 bg-verde-oscuro text-white rounded text-center mt-2" onClick={() => setIsOpen(false)}>Cotizar</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
