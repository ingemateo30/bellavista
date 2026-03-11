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
      duration: 2.0, ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function ExportCTA() {
  const { t } = useTranslation();

  const stats = [
    { target: 4,   suffix: '+',  labelKey: 'exportcta.stat1', color: '#D11335',  bg: 'rgba(209,19,53,0.1)' },
    { target: 20,  suffix: 'k+', labelKey: 'exportcta.stat2', color: '#FFFF00',  bg: 'rgba(255,255,0,0.07)' },
    { target: 100, suffix: '%',  labelKey: 'exportcta.stat3', color: '#009245',  bg: 'rgba(0,146,69,0.1)' },
    { target: 15,  suffix: '+',  labelKey: 'exportcta.stat4', color: '#F15A24',  bg: 'rgba(241,90,36,0.1)' },
  ];

  return (
    <section
      id="exportar"
      style={{
        position: 'relative',
        backgroundColor: '#0D0806',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/SINR0004.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.06, zIndex: 0,
      }} />

      <div style={{
        position: 'absolute', right: 0, top: 0,
        width: '40%', height: '100%',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: '4px',
        background: 'linear-gradient(to bottom, #D11335, #F15A24, #FFFF00)',
        zIndex: 1,
      }} />

      <div
        className="export-main-grid"
        style={{
          maxWidth: '1360px', margin: '0 auto',
          padding: '96px 40px 96px 56px',
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ height: '2px', width: '32px', backgroundColor: '#FFFF00' }} />
            <span style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,0,0.7)',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.4em', textTransform: 'uppercase',
            }}>
              {t('exportcta.eyebrow')}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#fff',
            fontSize: 'clamp(48px, 7vw, 88px)',
            lineHeight: 0.9,
            margin: '0 0 28px',
            letterSpacing: '-0.02em',
          }}>
            {t('exportcta.titulo')}
          </h2>

          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '15px', lineHeight: 1.75,
            marginBottom: '44px',
            maxWidth: '400px',
          }}>
            {t('exportcta.subtitulo')}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {['\uD83C\uDDEA\uD83C\uDDF8 España', '\uD83C\uDDFA\uD83C\uDDF8 USA', '\uD83C\uDDE6\uD83C\uDDFC Aruba', '\uD83C\uDDE8\uD83C\uDDE6 Canadá'].map((country, i) => (
              <span key={i} style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '12px', fontWeight: 600,
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '6px 14px',
              }}>
                {country}
              </span>
            ))}
          </div>

          <a
            href="https://wa.me/573184550936?text=Hola%2C%20quiero%20exportar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            className="export-cta-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#FFFF00', color: '#0D0806',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 800, fontSize: '12px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '18px 36px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
          >
            {t('exportcta.cta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              backgroundColor: s.bg,
              border: `1px solid ${s.color}20`,
              padding: '40px 32px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: s.color }} />
              <div style={{
                fontFamily: 'Schoolbell, cursive',
                color: s.color,
                fontSize: 'clamp(44px, 6vw, 72px)',
                lineHeight: 0.9,
                marginBottom: '12px',
              }}>
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                lineHeight: 1.4,
              }}>
                {t(s.labelKey)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .export-main-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 64px 32px !important; }
        }
        .export-cta-btn:hover { background: #e6e600 !important; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}
