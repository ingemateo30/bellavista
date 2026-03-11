import { useTranslation } from 'react-i18next';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2.2, ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);
  return <span ref={ref}>{display}{suffix}</span>;
}

/*
  VENTAJAS — Dark dramatic stats + feature cards
  ──────────────────────────────────────────────
  • Dark background (#0D0806)
  • 4 massive yellow numbers in asymmetric grid
  • Below: cream section with 4 feature cards
*/

const STATS = [
  { target: 4,   suffix: '+',  labelKey: 'ventajas.stat1', color: '#D11335',  note: 'países' },
  { target: 100, suffix: '%',  labelKey: 'ventajas.stat2', color: '#009245',  note: 'natural' },
  { target: 15,  suffix: '+',  labelKey: 'ventajas.stat3', color: '#F15A24',  note: 'años' },
  { target: 20,  suffix: 'k', labelKey: 'ventajas.stat4', color: '#FFFF00',  note: 'kg/año' },
];

const FEATURES = [
  {
    titleKey: 'ventajas.enfoqueExportador.titulo',
    descKey:  'ventajas.enfoqueExportador.descripcion',
    accent: '#D11335',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    titleKey: 'ventajas.calidadControlada.titulo',
    descKey:  'ventajas.calidadControlada.descripcion',
    accent: '#009245',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>
      </svg>
    ),
  },
  {
    titleKey: 'ventajas.capacidadSuministro.titulo',
    descKey:  'ventajas.capacidadSuministro.descripcion',
    accent: '#F15A24',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    titleKey: 'ventajas.privateLabel.titulo',
    descKey:  'ventajas.privateLabel.descripcion',
    accent: '#B8EC3F',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
  },
];

export default function Ventajas() {
  const { t } = useTranslation();

  return (
    <section>
      {/* ── DARK STATS SECTION ─────────────────── */}
      <div
        style={{
          backgroundColor: '#0D0806',
          padding: '96px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              marginBottom: '72px',
            }}
          >
            <div style={{ height: '2px', width: '40px', backgroundColor: '#FFFF00' }} />
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.4)',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.4em', textTransform: 'uppercase',
            }}>
              {t('ventajas.eyebrow')}
            </p>
          </motion.div>

          {/* Stats grid — asymmetric 2x2 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
            }}
            className="stats-grid-new"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16,1,0.3,1] }}
                style={{
                  padding: '48px 32px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderRight: i < STATS.length - 1 ? 'none' : 'none',
                  position: 'relative',
                }}
              >
                {/* Accent top bar */}
                <div style={{
                  height: '3px', width: '32px',
                  backgroundColor: s.color,
                  marginBottom: '24px',
                }} />

                {/* Number */}
                <div style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#FFFF00',
                  fontSize: 'clamp(64px, 9vw, 108px)',
                  lineHeight: 0.9,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}>
                  <Counter target={s.target} suffix={s.suffix} />
                </div>

                {/* Label */}
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  lineHeight: 1.4,
                }}>
                  {t(s.labelKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES SECTION — Cream bg ──────── */}
      <div
        style={{
          backgroundColor: '#F5E6D3',
          padding: '96px 40px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'end',
              marginBottom: '64px',
            }}
            className="ventajas-header-row"
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#0D0806',
                fontSize: 'clamp(36px, 5vw, 60px)',
                lineHeight: 0.95,
              }}
            >
              {t('ventajas.titulo')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ paddingBottom: '8px' }}
            >
              <a
                href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  backgroundColor: '#0D0806', color: '#FFFF00',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 800, fontSize: '12px',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '16px 28px',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                className="ventajas-cta"
              >
                {t('ventajas.ctaBoton')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
            }}
            className="features-grid-new"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
                style={{
                  backgroundColor: '#fff',
                  padding: '32px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Corner accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '40px', height: '3px',
                  backgroundColor: f.accent,
                }} />

                {/* Icon */}
                <div style={{
                  color: f.accent,
                  marginBottom: '20px',
                  marginTop: '8px',
                }}>
                  {f.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#0D0806',
                  fontSize: '22px',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                }}>
                  {t(f.titleKey)}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#603813',
                  fontSize: '13px', lineHeight: 1.7,
                  opacity: 0.75,
                }}>
                  {t(f.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid-new { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid-new { grid-template-columns: repeat(2, 1fr) !important; }
          .ventajas-header-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .stats-grid-new { grid-template-columns: 1fr 1fr !important; }
          .features-grid-new { grid-template-columns: 1fr !important; }
        }
        .ventajas-cta:hover { background: #D11335 !important; }
      `}</style>
    </section>
  );
}
