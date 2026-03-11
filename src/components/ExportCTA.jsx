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
      duration: 1.6, ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);
  return <span ref={ref}>{display}{suffix}</span>;
}

/*
  EXPORT CTA — Bold, visual, minimal text
  ─────────────────────────────────────────
  • Fondo rojo (#D11335) con imagen de fondo superpuesta
  • Titular enorme en blanco + Schoolbell
  • 4 stats de exportación
  • CTA amarillo
*/

export default function ExportCTA() {
  const { t } = useTranslation();

  const stats = [
    { target: 4,   suffix: '+',  labelKey: 'exportcta.stat1' },
    { target: 20,  suffix: 'k+', labelKey: 'exportcta.stat2' },
    { target: 100, suffix: '%',  labelKey: 'exportcta.stat3' },
    { target: 15,  suffix: '+',  labelKey: 'exportcta.stat4' },
  ];

  return (
    <section
      id="exportar"
      style={{
        position: 'relative',
        backgroundColor: '#D11335',
        overflow: 'hidden',
        padding: '96px 40px',
      }}
    >
      {/* Imagen de fondo con overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: "url('/banner1.png')",
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.12,
      }} />

      {/* Patrón de puntos decorativo */}
      <div style={{
        position: 'absolute', right: '-40px', top: '-40px',
        width: '320px', height: '320px',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)',
        backgroundSize: '24px 24px',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          className="export-grid"
        >
          {/* IZQUIERDA — Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.35em', textTransform: 'uppercase',
              marginBottom: '20px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#FFFF00', flexShrink: 0 }} />
              {t('exportcta.eyebrow')}
            </p>

            <h2 style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#fff',
              fontSize: 'clamp(42px, 6vw, 80px)',
              lineHeight: 0.95, marginBottom: '28px',
            }}>
              {t('exportcta.titulo')}
            </h2>

            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '15px', lineHeight: 1.7, marginBottom: '40px',
              maxWidth: '420px',
            }}>
              {t('exportcta.subtitulo')}
            </p>

            <a
              href="https://wa.me/573184550936?text=Hola%2C%20quiero%20exportar%20productos%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#FFFF00', color: '#1A1A1A',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700, fontSize: '12px',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '16px 32px', borderRadius: '2px',
                textDecoration: 'none',
              }}
            >
              {t('exportcta.cta')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>

          {/* DERECHA — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: i % 2 === 0 ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.12)',
                  padding: '36px 28px',
                  borderLeft: i % 2 === 1 ? '2px solid rgba(255,255,0,0.3)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#FFFF00',
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  lineHeight: 1, marginBottom: '8px',
                }}>
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.70)',
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>
                  {t(s.labelKey)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .export-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
