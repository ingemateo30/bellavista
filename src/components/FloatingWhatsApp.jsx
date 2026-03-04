import { useState } from 'react';

const PHONE = '+573184550936';
const PHONE_CLEAN = '573184550936';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setShowNotif(false);
  };

  const handleClose = () => setIsOpen(false);

  const handleSend = () => {
    window.open(`https://wa.me/${PHONE_CLEAN}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Panel de chat */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[300px] sm:w-[320px] overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* Header */}
          <div className="p-4 flex items-center gap-3" style={{ background: '#5D8B3F' }}>
            <div className="relative flex-shrink-0">
              <img
                src="/VERSIONES LOGO-02.png"
                alt="Bellavista"
                className="w-11 h-11 rounded-full object-contain bg-[#F2E8DF] p-1 border-2 border-white/30"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm font-['Kumbh_Sans',_sans-serif] truncate">
                Productos Bellavista
              </p>
              <p className="text-green-100 text-xs font-['Kumbh_Sans',_sans-serif]">
                Normalmente responde en 1 hora
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white transition-colors flex-shrink-0 ml-1"
              aria-label="Cerrar chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Área de mensaje */}
          <div className="p-4 min-h-[120px]" style={{ background: '#ECE5DD' }}>
            <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm inline-block max-w-[85%]">
              <p className="text-[#2C1810] text-sm font-['Kumbh_Sans',_sans-serif] leading-relaxed">
                ¡Hola! Soy del equipo de <strong>Productos Bellavista</strong>. ¿En qué te podemos ayudar?
              </p>
              <p className="text-gray-400 text-[10px] mt-1 text-right font-['Kumbh_Sans',_sans-serif]">
                ahora
              </p>
            </div>
          </div>

          {/* Input area */}
          <div className="p-3 bg-white flex items-center gap-2 border-t border-gray-100">
            <div className="flex-1 bg-[#F7F3ED] rounded-full px-4 py-2 text-sm text-[#6B5E55] font-['Kumbh_Sans',_sans-serif] border border-[#E8DCCF]">
              Escribe un mensaje...
            </div>
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform hover:scale-110 active:scale-95"
              style={{ background: '#5D8B3F' }}
              aria-label="Enviar mensaje por WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Powered by */}
          <div className="text-center py-2 bg-white">
            <a
              href={`https://wa.me/${PHONE_CLEAN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#6B5E55]/60 font-['Kumbh_Sans',_sans-serif] hover:text-[#5D8B3F] transition-colors"
            >
              Abrir en WhatsApp → {PHONE}
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <div className="relative">
        {/* Notificación */}
        {showNotif && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4B57E] rounded-full flex items-center justify-center text-[10px] text-[#2C1810] font-bold z-10 shadow-md animate-bounce">
            1
          </span>
        )}
        <button
          onClick={isOpen ? handleClose : handleOpen}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          style={{ background: '#25D366' }}
          aria-label="Abrir chat de WhatsApp"
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
