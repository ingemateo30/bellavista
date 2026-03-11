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
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);
  return <span ref={ref} style={{ fontFamily: 'Schoolbell, cursive' }}>{display}{suffix}</span>;
}

export default function ExportCTA() {
  const { t } = useTranslation();
  const ticker = t('exportcta.ticker', { returnObjects: true });
  const items = Array.isArray(ticker) ? [...ticker, ...ticker, ...ticker] : [];

  return (
    <section id="exportar" style={{ overflow: 'hidden' }}>

      {/* TICKER — rojo */}
      <div style={{ backgroundColor: '#D11335', padding: '14px 0', overflow: 'hidden' }}>
        <div className="flex whitespace-nowrap marquee-track">
          {items.map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                margin: '0 24px',
                color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              {item}
              <span style={{ color: '#FFFF00', fontSize: '8px' }}>&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      {/* BLOQUE PRINCIPAL — marrón */}
      <div style={{ backgroundColor: '#603813' }}>

        {/* Grid split: texto | imagen */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="export-grid">

          {/* Columna izquierda — texto */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '2px', backgroundColor: '#FFFF00' }} />
              <span style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#FFFF00',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}>
                {t('exportcta.eyebrow')}
              </span>
            </div>

            {/* Título */}
            <h2 style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#fff',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.0,
              marginBottom: '20px',
            }}>
              {t('exportcta.titulo')}
            </h2>

            {/* Línea separadora */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ height: '2px', width: '80px', backgroundColor: '#B8EC3F', marginBottom: '28px', transformOrigin: 'left' }}
            />

            {/* Subtítulo — muy corto */}
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '15px',
              lineHeight: 1.65,
              maxWidth: '400px',
              marginBottom: '36px',
            }}>
              {t('exportcta.subtitulo')}
            </p>

            {/* Stats 2x2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '36px' }}>
              {[
                { target: 4,  suffix: '+',   labelKey: 'exportcta.stat1Label', color: '#FFFF00' },
                { target: 100, suffix: '%',  labelKey: 'exportcta.stat2Label', color: '#B8EC3F' },
                { target: 15, suffix: '+',   labelKey: 'exportcta.stat3Label', color: '#F15A24' },
                { label: 'B2B',              labelKey: 'exportcta.stat4Label', color: '#FFFF00' },
              ].map((s, i) => (
                <div key={i} style={{ borderLeft: `3px solid ${s.color}`, paddingLeft: '14px' }}>
                  <div style={{ fontFamily: 'Schoolbell, cursive', color: s.color, fontSize: '40px', lineHeight: 1 }}>
                    {s.target !== undefined ? <Counter target={s.target} suffix={s.suffix} /> : s.label}
                  </div>
                  <div style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}>
                    {t(s.labelKey)}
                  </div>
                </div>
              ))}
            </div>

            {/* Botón */}
            <div>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFF00',
                  color: '#603813',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 800,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  borderRadius: '3px',
                  textDecoration: 'none',
                }}
              >
                {t('exportcta.ctaBoton')}
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '11px',
                marginTop: '10px',
              }}>
                {t('exportcta.ctaSubtexto')}
              </p>
            </div>
          </motion.div>

          {/* Columna derecha — imagen */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}
          >
            <img
              src="/SINR0002.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => { e.target.src = '/banner1.png'; }}
            />
            {/* Overlay degradado */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #603813 0%, transparent 40%)',
            }} />

            {/* Badge de calidad */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, scale: 0.7 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.6 }}
              style={{
                position: 'absolute',
                bottom: '32px',
                right: '32px',
                backgroundColor: '#009245',
                color: '#fff',
                padding: '14px 20px',
                borderRadius: '3px',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textAlign: 'center',
                lineHeight: 1.4,
              }}
            >
              100%<br/>Natural
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Franja de colores */}
      <div style={{ display: 'flex', height: '6px' }}>
        {['#D11335', '#F15A24', '#FFFF00', '#B8EC3F', '#009245', '#603813'].map((c, i) => (
          <div key={i} style={{ flex: 1, backgroundColor: c }} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .export-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
