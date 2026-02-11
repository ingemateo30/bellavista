import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Barra amarilla superior */}
      <div className="fixed top-0 w-full h-2 bg-[#F4C430] z-50"></div>
      
      <nav className="fixed top-2 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/VERSIONES LOGO-02.png" 
                alt="Productos BellaVista" 
                className="h-40 w-auto" 
              />
            </div>

            {/* Menu Desktop - Centrado */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              <a 
                href="#inicio" 
                className="text-[#4A4A4A] hover:text-[#5D8B3F] transition-colors font-medium"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
              >
                Inicio
              </a>
              <a 
                href="#productos" 
                className="text-[#4A4A4A] hover:text-[#5D8B3F] transition-colors font-medium"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
              >
                Productos
              </a>
              <a 
                href="#exportacion" 
                className="text-[#4A4A4A] hover:text-[#5D8B3F] transition-colors font-medium"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
              >
                Exportación
              </a>
              <a 
                href="#contacto" 
                className="text-[#4A4A4A] hover:text-[#5D8B3F] transition-colors font-medium"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
              >
                Contacto
              </a>
              <a 
                href="#nosotros" 
                className="text-[#4A4A4A] hover:text-[#5D8B3F] transition-colors font-medium"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
              >
                Nosotros
              </a>
            </div>

            {/* Botón Cotizar - Desktop */}
            <div className="hidden md:flex items-center">
              <a 
                href="#contacto" 
                className="bg-[#5D8B3F] text-white px-5 py-2.5 rounded-lg hover:bg-[#4A7032] transition-all font-medium flex items-center gap-2 shadow-sm"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotizar
              </a>
            </div>

            {/* Mobile button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-[#4A4A4A] p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a 
                href="#inicio" 
                className="block px-3 py-2 text-[#4A4A4A] hover:bg-gray-100 rounded"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#productos" 
                className="block px-3 py-2 text-[#4A4A4A] hover:bg-gray-100 rounded"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                Productos
              </a>
              <a 
                href="#exportacion" 
                className="block px-3 py-2 text-[#4A4A4A] hover:bg-gray-100 rounded"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                Exportación
              </a>
              <a 
                href="#contacto" 
                className="block px-3 py-2 text-[#4A4A4A] hover:bg-gray-100 rounded"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <a 
                href="#nosotros" 
                className="block px-3 py-2 text-[#4A4A4A] hover:bg-gray-100 rounded"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#contacto" 
                className="block px-3 py-2 bg-[#5D8B3F] text-white rounded text-center mt-2"
                style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                Cotizar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Espaciador para evitar que el contenido quede debajo del navbar */}
      <div className="h-[104px]"></div>
    </>
  );
}