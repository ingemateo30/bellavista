import { useTranslation } from 'react-i18next';

const ticker = [
  '100% Natural',
  'Sin refinar',
  'Sin procesar',
  'Artesanal',
  'Origen Colombia',
  'Para exportar',
  'Calidad certificada',
  'Panela pura',
];

const stats = [
  { num: '4+',    label: 'exportcta.stat1Label' },
  { num: '100%',  label: 'exportcta.stat2Label' },
  { num: '15+',   label: 'exportcta.stat3Label' },
  { num: 'B2B',   label: 'exportcta.stat4Label' },
];

export default function ExportCTA() {
  const { t } = useTranslation();

  const tickerItems = [...ticker, ...ticker]; // duplicar para loop continuo

  return (
    <section id="exportar" className="overflow-hidden">

     

      {/* ── CUERPO PRINCIPAL ────────────────────────────────── */}
      <div className="bg-[#F7EAE4] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Columna izquierda — texto */}
            <div>
              <p className="text-[#5D8B3F] text-xs font-bold tracking-[0.35em] uppercase mb-5 font-['Kumbh_Sans',_sans-serif]">
                {t('exportcta.eyebrow')}
              </p>

              <h2 className="text-[#1E3A0E] text-[42px] sm:text-[54px] md:text-[62px] leading-[1.05] mb-6 font-['Schoolbell',_cursive]">
                {t('exportcta.titulo')}
              </h2>

              {/* Línea verde */}
              <div className="w-14 h-1 bg-[#5D8B3F] rounded-full mb-7" />

              <p className="text-[#4A6040] text-[16px] sm:text-[17px] leading-relaxed mb-10 font-['Kumbh_Sans',_sans-serif] max-w-lg">
                {t('exportcta.subtitulo')}
              </p>

              {/* Beneficios rápidos */}
              <ul className="space-y-3 mb-10">
                {[
                  t('exportcta.card1Titulo'),
                  t('exportcta.card2Titulo'),
                  t('exportcta.card3Titulo'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#2C4A20] font-['Kumbh_Sans',_sans-serif] text-[15px]">
                    <span className="w-5 h-5 rounded-full bg-[#5D8B3F]/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#5D8B3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-[#5D8B3F] text-white px-9 py-4 rounded-xl font-['Kumbh_Sans',_sans-serif] font-bold text-[15px] hover:bg-[#4A7032] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('exportcta.ctaBoton')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <p className="text-[#7A9A6A] text-xs mt-4 font-['Kumbh_Sans',_sans-serif]">
                {t('exportcta.ctaSubtexto')}
              </p>
            </div>

            {/* Columna derecha — estadísticas */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 flex flex-col items-center justify-center text-center ${
                    i === 0
                      ? 'bg-[#5D8B3F] text-white'
                      : i === 1
                      ? 'bg-[#F4C430] text-[#1E3A0E]'
                      : 'bg-[#EEF3E9] text-[#1E3A0E]'
                  }`}
                >
                  <span
                    className={`text-[48px] sm:text-[58px] leading-none font-['Schoolbell',_cursive] mb-2 ${
                      i === 0 ? 'text-white' : i === 1 ? 'text-[#1E3A0E]' : 'text-[#5D8B3F]'
                    }`}
                  >
                    {s.num}
                  </span>
                  <span
                    className={`text-xs sm:text-sm uppercase tracking-widest font-['Kumbh_Sans',_sans-serif] font-bold ${
                      i === 0 ? 'text-white/80' : 'text-[#1E3A0E]/70'
                    }`}
                  >
                    {t(s.label)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FRANJA VERDE INFERIOR ───────────────────────────── */}
      <div className="bg-[#3A6B2E] py-5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {[
              { icon: '', text: '100% Natural' },
              { icon: '', text: t('exportcta.card1Titulo') },
              { icon: '', text: t('exportcta.card3Titulo') },
              { icon: '', text: 'Exportación Global' },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-[#F2E8DF] text-sm font-['Kumbh_Sans',_sans-serif] font-medium"
              >
                <span>{item.icon}</span>
                {item.text}
                {i < 3 && (
                  <span className="hidden sm:inline text-[#F2E8DF]/30 ml-6 text-lg">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
