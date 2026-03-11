import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  PROCESO DE PRODUCCIÓN — Clean numbered steps
  ──────────────────────────────────────────────
  • Fondo oscuro (#1A1A1A) para contraste
  • 5 pasos en fila con ícono SVG, número y título
  • Línea conectora entre pasos
*/

const STEPS = [
  {
    key: 'cultivo',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 34V20"/><path d="M20 20C20 20 12 16 10 8c4 0 8 2 10 8"/><path d="M20 20C20 20 28 14 32 8c-4-1-10 2-12 12"/><path d="M14 34h12"/>
      </svg>
    ),
  },
  {
    key: 'cosecha',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32l16-16"/><path d="M22 10l8 8-4 4-8-8z"/><path d="M8 32l4-8"/><circle cx="10" cy="30" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    key: 'extraccion',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="24" height="18" rx="2"/><path d="M14 14V10a6 6 0 0112 0v4"/><path d="M20 22v4"/>
      </svg>
    ),
  },
  {
    key: 'moldeo',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="12" height="14" rx="1"/><rect x="22" y="18" width="12" height="14" rx="1"/><path d="M12 18V14a8 8 0 0116 0v4"/>
      </svg>
    ),
  },
  {
    key: 'empaque',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6l14 8v12l-14 8L6 26V14z"/><path d="M20 6v28"/><path d="M6 14l14 8 14-8"/>
      </svg>
    ),
  },
];

const STEP_COLORS = ['#D11335', '#F15A24', '#FFFF00', '#009245', '#B8EC3F'];

export default function ProcesoProduccion() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        backgroundColor: '#111',
        padding: '96px 40px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#FFFF00', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            {t('proceso.eyebrow')}
          </p>
          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#fff',
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1, margin: 0,
          }}>
            {t('proceso.titulo')}
          </h2>
        </motion.div>

        {/* 5 pasos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0',
            position: 'relative',
          }}
          className="proceso-grid"
        >
          {/* Línea conectora */}
          <div style={{
            position: 'absolute',
            top: '40px', left: '10%', right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg,#D11335,#F15A24,#FFFF00,#009245,#B8EC3F)',
            zIndex: 0,
          }} className="proceso-line" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', padding: '0 16px',
                position: 'relative', zIndex: 1,
              }}
            >
              {/* Círculo con ícono */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                backgroundColor: STEP_COLORS[i],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px',
                color: i === 2 ? '#1A1A1A' : '#fff',
                flexShrink: 0,
              }}>
                {step.icon}
              </div>

              {/* Número */}
              <div style={{
                fontFamily: 'Schoolbell, cursive',
                color: STEP_COLORS[i],
                fontSize: '13px', fontWeight: 400,
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Título */}
              <h3 style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#fff',
                fontSize: '18px', marginBottom: '8px', lineHeight: 1.2,
              }}>
                {t(`proceso.${step.key}.titulo`)}
              </h3>

              {/* Descripción */}
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(255,255,255,0.50)',
                fontSize: '12px', lineHeight: 1.6,
              }}>
                {t(`proceso.${step.key}.descripcion`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .proceso-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .proceso-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .proceso-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
