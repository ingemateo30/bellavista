import { useTranslation } from 'react-i18next';

const stats = [
  { numberKey: 'exportcta.stat1Numero', labelKey: 'exportcta.stat1Label' },
  { numberKey: 'exportcta.stat2Numero', labelKey: 'exportcta.stat2Label' },
  { numberKey: 'exportcta.stat3Numero', labelKey: 'exportcta.stat3Label' },
  { numberKey: 'exportcta.stat4Numero', labelKey: 'exportcta.stat4Label' },
];

export default function ExportCTA() {
  const { t } = useTranslation();

  return (
    <section id="exportar" className="relative overflow-hidden">
      {/* Ola superior invertida para conectar con sección anterior */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z" fill="#F7EAE4" />
        </svg>
      </div>

      {/* Fondo oscuro principal */}
      <div
        className="relative py-24 sm:py-32"
        style={{
          background: 'linear-gradient(135deg, #2C1810 0%, #3D2410 40%, #1A3020 100%)',
        }}
      >
        {/* Patrón decorativo de fondo */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F2E8DF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Imagen de hoja decorativa */}
        <img
          src="/hojas.svg"
          alt=""
          className="absolute right-0 top-0 h-full opacity-10 pointer-events-none object-contain"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Eyebrow */}
          <p className="text-center text-[#D4B57E] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-4 font-['Kumbh_Sans',_sans-serif]">
            {t('exportcta.eyebrow')}
          </p>

          {/* Título principal */}
          <h2 className="text-center text-[#F2E8DF] text-[36px] sm:text-[50px] md:text-[62px] leading-tight mb-6 font-['Schoolbell',_cursive]">
            {t('exportcta.titulo')}
          </h2>

          {/* Línea dorada */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-[2px] bg-[#D4B57E]" />
          </div>

          {/* Subtítulo */}
          <p className="text-center text-[#C8B8A8] text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto mb-14 font-['Kumbh_Sans',_sans-serif]">
            {t('exportcta.subtitulo')}
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[#D4B57E] text-[38px] sm:text-[48px] font-['Schoolbell',_cursive] leading-none mb-2">
                  {t(stat.numberKey)}
                </div>
                <div className="text-[#C8B8A8] text-xs sm:text-sm font-['Kumbh_Sans',_sans-serif] leading-snug uppercase tracking-wider">
                  {t(stat.labelKey)}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-px h-12 bg-[#D4B57E]/20 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          {/* Separador */}
          <div className="flex items-center gap-4 max-w-lg mx-auto mb-14">
            <div className="flex-1 h-px bg-[#D4B57E]/25" />
            <svg className="w-5 h-5 text-[#D4B57E] opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <div className="flex-1 h-px bg-[#D4B57E]/25" />
          </div>

          {/* Tarjetas de beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                titleKey: 'exportcta.card1Titulo',
                descKey: 'exportcta.card1Desc',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                titleKey: 'exportcta.card2Titulo',
                descKey: 'exportcta.card2Desc',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                titleKey: 'exportcta.card3Titulo',
                descKey: 'exportcta.card3Desc',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-[#D4B57E] flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-[#F2E8DF] text-[17px] mb-2 font-['Handlee',_cursive]">
                  {t(card.titleKey)}
                </h3>
                <p className="text-[#C8B8A8] text-[13px] leading-relaxed font-['Kumbh_Sans',_sans-serif]">
                  {t(card.descKey)}
                </p>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-[#D4B57E] text-[#2C1810] px-10 py-4 rounded-xl font-['Kumbh_Sans',_sans-serif] font-bold text-[16px] hover:bg-[#C9A96A] transition-all shadow-lg shadow-black/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              {t('exportcta.ctaBoton')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-[#C8B8A8]/60 text-xs mt-4 font-['Kumbh_Sans',_sans-serif]">
              {t('exportcta.ctaSubtexto')}
            </p>
          </div>
        </div>
      </div>

      {/* Ola inferior para conectar con la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#F2E8DF" />
        </svg>
      </div>
    </section>
  );
}
