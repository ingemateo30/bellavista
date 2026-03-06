import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
};

const stepVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 190, damping: 20 }
  }
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }
  }
};

function StepCard({ step, index }) {
  const { t } = useTranslation();
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      variants={stepVariant}
      className="relative flex flex-col items-start gap-3"
    >
      {/* Ghost number */}
      <span
        className="absolute -top-4 -left-1 text-[72px] font-['Schoolbell',_cursive] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(212,181,126,0.12)' }}
      >
        {num}
      </span>

      {/* Icon circle */}
      <motion.div
        variants={iconVariant}
        whileHover={{ scale: 1.15, rotate: 8, transition: { type: 'spring', stiffness: 300 } }}
        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-white cursor-default"
        style={{ background: 'rgba(93,139,63,0.25)', border: '1.5px solid rgba(93,139,63,0.5)' }}
      >
        <div className="text-[#5D8B3F]">{step.icon}</div>
      </motion.div>

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
    </motion.div>
  );
}

export default function ProcesoProduccion() {
  const { t } = useTranslation();

  return (
    <section
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
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[11px] font-['Kumbh_Sans',_sans-serif] font-bold uppercase block mb-3"
            style={{ color: '#D4B57E' }}
          >
            {t('proceso.eyebrow')}
          </motion.span>

          <h2
            className="text-[38px] md:text-[46px] leading-tight mb-4"
            style={{ fontFamily: "'Schoolbell', cursive", color: '#F2E8DF' }}
          >
            {t('proceso.titulo')}
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center mb-5"
            style={{ transformOrigin: 'center' }}
          >
            <div className="w-16 h-[2px] rounded-full" style={{ background: '#D4B57E' }} />
          </motion.div>

          <p
            className="text-[14px] font-['Kumbh_Sans',_sans-serif] max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(242,232,223,0.6)' }}
          >
            {t('proceso.subtitulo')}
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {steps.map((step, i) => (
            <StepCard key={step.key} step={step} index={i} />
          ))}
        </motion.div>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(93,139,63,0.3)' }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-['Kumbh_Sans',_sans-serif] font-semibold tracking-wide cursor-default"
            style={{ background: 'rgba(93,139,63,0.2)', border: '1px solid rgba(93,139,63,0.4)', color: '#5D8B3F' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            {t('proceso.badge')}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
