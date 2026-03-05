import React from 'react';
import { useTranslation } from 'react-i18next';

const AnnotationLeft = ({ title, desc }) => (
  <div className="flex items-center gap-3">
    <div className="text-right flex-1">
      <h4 className="text-[17px] font-['Handlee',_cursive] text-[#2C1810] leading-snug mb-1">
        {title}
      </h4>
      <p className="text-[12px] font-['Kumbh_Sans',_sans-serif] text-[#6B5E55] leading-relaxed">
        {desc}
      </p>
    </div>
    <div className="flex-shrink-0">
      <svg width="64" height="32" viewBox="0 0 64 32" fill="none" className="text-[#D4B57E]">
        <path d="M2 16 Q20 6, 50 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M44 10 L52 16 L44 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  </div>
);

const AnnotationRight = ({ title, desc }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0">
      <svg width="64" height="32" viewBox="0 0 64 32" fill="none" className="text-[#D4B57E]">
        <path d="M62 16 Q44 6, 14 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M20 10 L12 16 L20 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
    <div className="text-left flex-1">
      <h4 className="text-[17px] font-['Handlee',_cursive] text-[#2C1810] leading-snug mb-1">
        {title}
      </h4>
      <p className="text-[12px] font-['Kumbh_Sans',_sans-serif] text-[#6B5E55] leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const AnnotationMobile = ({ title, desc, icon }) => (
  <div className="flex items-start gap-3 bg-[#FDF8F4] rounded-xl px-4 py-3 shadow-sm">
    <span className="text-2xl mt-0.5">{icon}</span>
    <div>
      <h4 className="text-[15px] font-['Handlee',_cursive] text-[#2C1810] leading-snug mb-0.5">
        {title}
      </h4>
      <p className="text-[12px] font-['Kumbh_Sans',_sans-serif] text-[#6B5E55] leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const ImageSection = () => {
  const { t } = useTranslation();

  const leftAnnotations = [
    { title: t('imageSection.izq1Titulo'), desc: t('imageSection.izq1Desc'), icon: '' },
    { title: t('imageSection.izq2Titulo'), desc: t('imageSection.izq2Desc'), icon: '' },
  ];

  const rightAnnotations = [
    { title: t('imageSection.der1Titulo'), desc: t('imageSection.der1Desc'), icon: '' },
    { title: t('imageSection.der2Titulo'), desc: t('imageSection.der2Desc'), icon: '' },
  ];

  return (
    <section className="bg-[#F7EAE4] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-[38px] md:text-[44px] text-[#2C1810] mb-3 text-center font-['Schoolbell',_cursive] leading-tight tracking-wide">
          {t('imageSection.titulo')}
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-16 h-[2px] bg-[#D4B57E]"></div>
        </div>

        {/* Desktop: anotaciones | imagen | anotaciones */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_340px_1fr] gap-6 items-center">

          <div className="flex flex-col gap-16 pr-4">
            {leftAnnotations.map((a, i) => (
              <AnnotationLeft key={i} title={a.title} desc={a.desc} />
            ))}
          </div>

          {/* Imagen central con efecto 3D */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-2xl bg-[#C4A56E] opacity-40" style={{ transform: 'translate(10px, 12px)' }} />
            <div className="absolute inset-0 rounded-2xl bg-[#D4B57E] opacity-25" style={{ transform: 'translate(18px, 20px)' }} />
            <div
              className="relative rounded-2xl overflow-hidden w-[300px] h-[380px] border-4 border-white"
              style={{
                transform: 'perspective(900px) rotateY(-4deg) rotateX(2deg)',
                boxShadow: '0 20px 60px rgba(44, 24, 16, 0.35)',
              }}
            >
              <img
                src="/banbu.png"
                loading="lazy"
                alt={t('imageSection.imgAlt')}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#2C1810]/30 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="bg-white/90 text-[#2C1810] text-[11px] font-['Kumbh_Sans',_sans-serif] font-semibold px-3 py-1 rounded-full tracking-wide shadow-sm">
                  {t('imageSection.etiqueta')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-16 pl-4">
            {rightAnnotations.map((a, i) => (
              <AnnotationRight key={i} title={a.title} desc={a.desc} />
            ))}
          </div>
        </div>

        {/* Móvil: imagen + tarjetas */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-2xl bg-[#C4A56E] opacity-40" style={{ transform: 'translate(8px, 10px)' }} />
            <div
              className="relative rounded-2xl overflow-hidden w-[280px] h-[320px] border-4 border-white"
              style={{
                transform: 'perspective(700px) rotateY(-3deg) rotateX(2deg)',
                boxShadow: '0 16px 48px rgba(44, 24, 16, 0.35)',
              }}
            >
              <img
                src="/banbu.png"
                loading="lazy"
                alt={t('imageSection.imgAlt')}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#2C1810]/30 to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                <span className="bg-white/90 text-[#2C1810] text-[10px] font-['Kumbh_Sans',_sans-serif] font-semibold px-3 py-1 rounded-full tracking-wide shadow-sm">
                  {t('imageSection.etiqueta')}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm flex flex-col gap-3">
            {[...leftAnnotations, ...rightAnnotations].map((a, i) => (
              <AnnotationMobile key={i} title={a.title} desc={a.desc} icon={a.icon} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImageSection;
