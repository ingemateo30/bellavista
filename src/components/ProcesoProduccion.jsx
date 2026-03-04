import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    key: 'cultivo',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 34V20" />
        <path d="M20 20C20 20 12 16 10 8c4 0 8 2 10 8" />
        <path d="M20 20C20 20 28 14 32 8c-4-1-10 2-12 12" />
        <path d="M14 34h12" />
      </svg>
    ),
  },
  {
    key: 'cosecha',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32l16-16" />
        <path d="M22 10l8 8-4 4-8-8z" />
        <path d="M8 32l4-8" />
        <circle cx="10" cy="30" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: 'extraccion',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="20" cy="12" rx="10" ry="4" />
        <path d="M10 12v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" />
        <path d="M20 22v6" />
        <path d="M16 28c0 2.2 1.8 4 4 4s4-1.8 4-4" />
      </svg>
    ),
  },
  {
    key: 'coccion',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 28h16l-2-14H14z" />
        <path d="M10 28h20" />
        <path d="M16 10c0-2 2-4 2-6" />
        <path d="M20 10c0-2 2-4 2-6" />
        <path d="M24 10c0-2 2-4 2-6" />
      </svg>
    ),
  },
  {
    key: 'moldeo',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="18" width="20" height="14" rx="2" />
        <path d="M14 18v-4a6 6 0 0112 0v4" />
        <path d="M17 26h6" />
      </svg>
    ),
  },
  {
    key: 'empaque',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14l12-6 12 6v14l-12 6-12-6z" />
        <path d="M20 8v20" />
        <path d="M8 14l12 6 12-6" />
        <path d="M14 11l12 6" />
      </svg>
    ),
  },
];

function StepCard({ step, index, visible }) {
  const { t } = useTranslation();
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className="relative flex flex-col items-start gap-3 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Ghost number */}
      <span
        className="absolute -top-4 -left-1 text-[72px] font-['Schoolbell',_cursive] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(212,181,126,0.12)' }}
      >
        {num}
      </span>

      {/* Icon circle */}
      <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-white"
        style={{ background: 'rgba(93,139,63,0.25)', border: '1.5px solid rgba(93,139,63,0.5)' }}
      >
        <div className="text-[#5D8B3F]">{step.icon}</div>
      </div>

      {/* Step number badge */}
      <span
        className="text-[11px] font-['Kumbh_Sans',_sans-serif] font-bold tracking-[0.15em] uppercase"
        style={{ color: '#D4B57E' }}
      >
        {num}
      </span>

      {/* Title */}
      <h3
        className="text-[19px] leading-snug"
        style={{ fontFamily: "'Handlee', cursive", color: '#F2E8DF' }}
      >
        {t(`proceso.${step.key}.titulo`)}
      </h3>

      {/* Description */}
      <p
        className="text-[13px] leading-relaxed font-['Kumbh_Sans',_sans-serif]"
        style={{ color: 'rgba(242,232,223,0.65)' }}
      >
        {t(`proceso.${step.key}.desc`)}
      </p>
    </div>
  );
}

export default function ProcesoProduccion() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: '#2C1810' }}
    >
      {/* Corte superior - onda de entrada */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C360,60 1080,0 1440,50 L1440,0 Z" fill="#F7EAE4" />
        </svg>
      </div>

      {/* Corte inferior - onda de salida */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 C480,0 960,60 1440,10 L1440,60 Z" fill="#F7EAE4" />
        </svg>
      </div>

      {/* Decorador de hoja fondo */}
      <div className="absolute right-0 top-0 bottom-0 w-72 opacity-[0.03] pointer-events-none select-none">
        <img src="/hojas.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24">

        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          {/* Eyebrow */}
          <span
            className="text-[11px] font-['Kumbh_Sans',_sans-serif] font-bold tracking-[0.25em] uppercase block mb-3"
            style={{ color: '#D4B57E' }}
          >
            {t('proceso.eyebrow')}
          </span>

          <h2
            className="text-[38px] md:text-[46px] leading-tight mb-4"
            style={{ fontFamily: "'Schoolbell', cursive", color: '#F2E8DF' }}
          >
            {t('proceso.titulo')}
          </h2>

          <div className="flex justify-center mb-5">
            <div className="w-16 h-[2px] rounded-full" style={{ background: '#D4B57E' }} />
          </div>

          <p
            className="text-[14px] font-['Kumbh_Sans',_sans-serif] max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(242,232,223,0.6)' }}
          >
            {t('proceso.subtitulo')}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, i) => (
            <StepCard key={step.key} step={step} index={i} visible={visible} />
          ))}
        </div>

        {/* CTA inferior */}
        <div
          className="mt-16 text-center transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '700ms',
          }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-['Kumbh_Sans',_sans-serif] font-semibold tracking-wide"
            style={{ background: 'rgba(93,139,63,0.2)', border: '1px solid rgba(93,139,63,0.4)', color: '#5D8B3F' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            {t('proceso.badge')}
          </div>
        </div>

      </div>
    </section>
  );
}
