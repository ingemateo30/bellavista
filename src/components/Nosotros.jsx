import { useTranslation } from 'react-i18next';

export default function Nosotros() {
  const { t } = useTranslation();

  const pasos = [
    {
      icon: `<img src="/41.svg" alt="icon" class="w-28 h-28" />`,
      titleKey: 'nosotros.paso1.titulo',
      descKey: 'nosotros.paso1.descripcion'
    },
    {
     icon: `<img src="/I3.svg" alt="icon" class="w-28 h-28" />`,
      titleKey: 'nosotros.paso2.titulo',
      descKey: 'nosotros.paso2.descripcion'
    },
    {
      icon: `<img src="/I4.svg" alt="icon" class="w-28 h-28" />`,
      titleKey: 'nosotros.paso3.titulo',
      descKey: 'nosotros.paso3.descripcion'
    },
    {
      icon: `<img src="/I2.svg" alt="icon" class="w-32 h-32" />`,
      titleKey: 'nosotros.paso4.titulo',
      descKey: 'nosotros.paso4.descripcion'
    }
  ];

  return (
    <section id="exportacion" className="relative py-16 bg-[#F7EAE4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-[38px] md:text-[44px] text-[#2C1810] mb-2 font-['Schoolbell',_cursive] leading-tight">
            {t('nosotros.titulo')}
          </h2>
          <p className="text-[15px] text-[#2C1810] leading-relaxed font-['Kumbh_Sans',_sans-serif] max-w-2xl mx-auto">
            {t('nosotros.subtitulo')}<br/>
            {t('nosotros.subtitulo2')}
          </p>
        </div>

        {/* Tarjetas de proceso */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pasos.map((paso, i) => (
            <div key={i} className="relative">
              <div className="bg-[#FDF8F4] rounded-2xl p-6 shadow-sm">
                <div
                  className="w-20 h-20 mx-auto mb-4 text-[#3D3D3D] opacity-80"
                  dangerouslySetInnerHTML={{ __html: paso.icon }}
                />
                <h3 className="text-[18px] text-[#2C1810] mb-2 text-center font-['Handlee',_cursive] leading-snug">
                  {t(paso.titleKey)}
                </h3>
                <p className="text-[#6B5E55] text-[13px] text-center leading-relaxed font-['Kumbh_Sans',_sans-serif]">
                  {t(paso.descKey)}
                </p>
              </div>
              {/* Flecha entre tarjetas */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-[#3D3D3D] opacity-40">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-[#F7EAE4] rounded-2xl p-8 text-center shadow-sm max-w-3xl mx-auto">
          <h3 className="text-[26px] md:text-[30px] text-[#2C1810] mb-3 font-['Handlee',_cursive] leading-snug">
            {t('nosotros.ctaTitulo')}
          </h3>

          <a
            href="#contacto"
            className="inline-block bg-[#6B4E3D] text-white px-10 py-3 rounded-lg font-['Kumbh_Sans',_sans-serif] font-semibold text-[15px] hover:bg-[#5A3F2F] transition-all shadow-sm"
          >
            {t('nosotros.ctaBoton')}
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