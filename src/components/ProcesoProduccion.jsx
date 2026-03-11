import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const STEPS = [
  {
    key: 'cultivo',
    color: '#1B7A2F',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 34V20"/><path d="M20 20C20 20 12 16 10 8c4 0 8 2 10 8"/><path d="M20 20C20 20 28 14 32 8c-4-1-10 2-12 12"/><path d="M14 34h12"/>
      </svg>
    ),
  },
  {
    key: 'cosecha',
    color: '#8BC420',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32l16-16"/><path d="M22 10l8 8-4 4-8-8z"/><path d="M8 32l4-8"/><circle cx="10" cy="30" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    key: 'extraccion',
    color: '#E8173A',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="24" height="18" rx="2"/><path d="M14 14V10a6 6 0 0112 0v4"/><path d="M20 22v4"/>
      </svg>
    ),
  },
  {
    key: 'moldeo',
    color: '#5C2D0A',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="12" height="14" rx="1"/><rect x="22" y="18" width="12" height="14" rx="1"/><path d="M12 18V14a8 8 0 0116 0v4"/>
      </svg>
    ),
  },
  {
    key: 'empaque',
    color: '#E8173A',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6l14 8v12l-14 8L6 26V14z"/><path d="M20 6v28"/><path d="M6 14l14 8 14-8"/>
      </svg>
    ),
  },
];

export default function ProcesoProduccion() {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: '#F4E800', paddingTop: '0' }}>
      {/* Heading strip */}
      <div style={{ backgroundColor: '#5C2D0A', padding: '28px 32px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Schoolbell, cursive',
          color: '#F4E800',
          fontSize: 'clamp(28px, 5vw, 52px)',
          lineHeight: 1, margin: 0, letterSpacing: '0.02em',
        }}>
          {t('proceso.titulo') || 'Del Campo a la Mesa'}
        </h2>
      </div>

      <div style={{ padding: '72px 32px 64px', maxWidth: '1360px', margin: '0 auto' }}>
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#5C2D0A', opacity: 0.65,
            fontSize: '13px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto',
          }}>
            {t('proceso.eyebrow') || '5 etapas artesanales certificadas · 100% natural · Santander, Colombia'}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="proceso-steps-bv" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connector */}
          <div className="proceso-line-bv" style={{
            position: 'absolute',
            top: '44px',
            left: '10%', right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, #1B7A2F, #8BC420, #E8173A, #5C2D0A, #E8173A)',
            zIndex: 0, opacity: 0.35,
          }} />

          {STEPS.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16,1,0.3,1] }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', padding: '0 12px 24px',
                position: 'relative', zIndex: 1,
              }}
            >
              {/* Circle */}
              <div style={{
                width: '88px', height: '88px',
                backgroundColor: step.color,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px', color: '#fff', flexShrink: 0,
                boxShadow: `0 6px 24px ${step.color}55`,
                border: '4px solid #F4E800',
              }}>
                {step.icon}
              </div>

              <span style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: step.color, fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.25em', textTransform: 'uppercase',
                marginBottom: '6px', display: 'block',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#5C2D0A', fontSize: '20px', lineHeight: 1.1,
                marginBottom: '8px',
              }}>
                {t(`proceso.${step.key}.titulo`)}
              </h3>

              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#5C2D0A', opacity: 0.65,
                fontSize: '12px', lineHeight: 1.65,
              }}>
                {t(`proceso.${step.key}.descripcion`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '56px',
            backgroundColor: '#1B7A2F',
            padding: '20px 32px',
            borderRadius: '4px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: '16px', flexWrap: 'wrap',
          }}
          className="proceso-bar-bv"
        >
          <span style={{ fontFamily: 'Schoolbell, cursive', color: '#F4E800', fontSize: '20px' }}>
            100% Artesanal · Sin conservantes · Sin azúcar refinada
          </span>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['Sin conservantes', 'Sin colorantes', 'Sin azúcar refinada'].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#F4E800', borderRadius: '50%' }} />
                <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(244,232,0,0.75)', fontSize: '11px', fontWeight: 600 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <WaveDivider fromColor="#F4E800" toColor="#F4E800" height={72} />

      <style>{`
        @media (max-width: 900px) {
          .proceso-steps-bv { grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; }
          .proceso-line-bv { display: none !important; }
        }
        @media (max-width: 560px) {
          .proceso-steps-bv { grid-template-columns: repeat(2, 1fr) !important; }
          .proceso-bar-bv { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
