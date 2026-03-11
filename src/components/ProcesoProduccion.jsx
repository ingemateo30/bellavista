import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  PROCESO DE PRODUCCIÓN — Bold numbered cards on cream
  ──────────────────────────────────────────────────────
  • Cream background (#F5E6D3)
  • 5 horizontal cards
  • Giant background number per card (decorative)
  • Bold title + description
  • Connected by colored dots/line
  • Colored accent per step
*/

const STEPS = [
  {
    key: 'cultivo',
    color: '#009245',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 34V20"/><path d="M20 20C20 20 12 16 10 8c4 0 8 2 10 8"/><path d="M20 20C20 20 28 14 32 8c-4-1-10 2-12 12"/><path d="M14 34h12"/>
      </svg>
    ),
  },
  {
    key: 'cosecha',
    color: '#B8EC3F',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32l16-16"/><path d="M22 10l8 8-4 4-8-8z"/><path d="M8 32l4-8"/><circle cx="10" cy="30" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    key: 'extraccion',
    color: '#FFFF00',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="24" height="18" rx="2"/><path d="M14 14V10a6 6 0 0112 0v4"/><path d="M20 22v4"/>
      </svg>
    ),
  },
  {
    key: 'moldeo',
    color: '#F15A24',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="12" height="14" rx="1"/><rect x="22" y="18" width="12" height="14" rx="1"/><path d="M12 18V14a8 8 0 0116 0v4"/>
      </svg>
    ),
  },
  {
    key: 'empaque',
    color: '#D11335',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6l14 8v12l-14 8L6 26V14z"/><path d="M20 6v28"/><path d="M6 14l14 8 14-8"/>
      </svg>
    ),
  },
];

export default function ProcesoProduccion() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '96px 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '72px', gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'Kumbh Sans',
              color: 'rgba(96,56,19,0.5)',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              {t('proceso.eyebrow')}
            </p>
            <h2 style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#0D0806',
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 0.95, margin: 0,
            }}>
              {t('proceso.titulo')}
            </h2>
          </div>

          {/* Steps count badge */}
          <div style={{
            backgroundColor: '#D11335',
            padding: '12px 24px',
            alignSelf: 'center',
          }}>
            <span style={{
              fontFamily: 'Kumbh Sans',
              color: '#fff',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>
              5 etapas artesanales
            </span>
          </div>
        </motion.div>

        {/* Steps grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0',
            position: 'relative',
          }}
          className="proceso-steps-new"
        >
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '44px',
            left: '10%', right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, #009245, #B8EC3F, #FFFF00, #F15A24, #D11335)',
            zIndex: 0,
            opacity: 0.4,
          }} className="proceso-line-new" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center',
                padding: '0 12px 24px',
                position: 'relative', zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: '88px', height: '88px',
                backgroundColor: step.color,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '28px',
                color: i === 2 || i === 1 ? '#0D0806' : '#fff',
                flexShrink: 0,
                boxShadow: `0 8px 32px ${step.color}40`,
              }}>
                {step.icon}
              </div>

              {/* Step number */}
              <span style={{
                fontFamily: 'Kumbh Sans',
                color: step.color,
                fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.25em', textTransform: 'uppercase',
                marginBottom: '8px',
                display: 'block',
              }}>
                Paso {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#0D0806',
                fontSize: '20px', lineHeight: 1.1,
                marginBottom: '10px',
              }}>
                {t(`proceso.${step.key}.titulo`)}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'Kumbh Sans',
                color: 'rgba(96,56,19,0.65)',
                fontSize: '12px', lineHeight: 1.65,
              }}>
                {t(`proceso.${step.key}.descripcion`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '72px',
            backgroundColor: '#0D0806',
            padding: '28px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
          className="proceso-bottom-bar"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#FFFF00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D0806" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'Kumbh Sans', color: '#fff', fontSize: '13px', fontWeight: 600 }}>
              Proceso 100% artesanal certificado
            </span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Sin conservantes', 'Sin colorantes', 'Sin azúcar refinada'].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#009245', borderRadius: '50%' }} />
                <span style={{ fontFamily: 'Kumbh Sans', color: 'rgba(255,255,255,0.55)', fontSize: '12px' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proceso-steps-new { grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; }
          .proceso-line-new { display: none !important; }
        }
        @media (max-width: 600px) {
          .proceso-steps-new { grid-template-columns: repeat(2, 1fr) !important; }
          .proceso-bottom-bar { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 400px) {
          .proceso-steps-new { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
