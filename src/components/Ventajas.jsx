import { useTranslation } from 'react-i18next';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import WaveDivider from './WaveDivider';

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

const STATS = [
  { target: 4,   suffix: '+',  labelKey: 'ventajas.stat1', color: '#E8173A' },
  { target: 100, suffix: '%',  labelKey: 'ventajas.stat2', color: '#1B7A2F' },
  { target: 15,  suffix: '+',  labelKey: 'ventajas.stat3', color: '#5C2D0A' },
  { target: 20,  suffix: 'k', labelKey: 'ventajas.stat4', color: '#8BC420' },
];

const FEATURES = [
  { titleKey: 'ventajas.enfoqueExportador.titulo', descKey: 'ventajas.enfoqueExportador.descripcion', color: '#E8173A' },
  { titleKey: 'ventajas.calidadControlada.titulo',  descKey: 'ventajas.calidadControlada.descripcion',  color: '#1B7A2F' },
  { titleKey: 'ventajas.capacidadSuministro.titulo',descKey: 'ventajas.capacidadSuministro.descripcion',color: '#8BC420' },
  { titleKey: 'ventajas.privateLabel.titulo',       descKey: 'ventajas.privateLabel.descripcion',       color: '#5C2D0A' },
];

export default function Ventajas() {
  const { t } = useTranslation();
  return (
    <section style={{ backgroundColor: '#F4E800' }}>
      {/* Stats strip */}
      <div style={{
        backgroundColor: '#5C2D0A',
        padding: '56px 40px',
      }}>
        <div style={{
          maxWidth: '1180px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }} className="stats-strip-bv">
          {STATS.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                textAlign: 'center', padding: '24px 20px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(244,232,0,0.15)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'Schoolbell, cursive',
                color: s.color === '#8BC420' ? '#8BC420' : s.color === '#E8173A' ? '#E8173A' : s.color === '#1B7A2F' ? '#8BC420' : '#F4E800',
                fontSize: 'clamp(48px, 7vw, 80px)',
                lineHeight: 0.9, marginBottom: '8px',
              }}>
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(244,232,0,0.65)',
                fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
              }}>
                {t(s.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <div style={{ padding: '72px 40px 64px', backgroundColor: '#F4E800' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#5C2D0A',
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 0.95, margin: 0,
          }}>
            {t('ventajas.titulo')}
          </h2>
        </motion.div>

        <div
          className="features-bv-grid"
          style={{
            maxWidth: '1180px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {FEATURES.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                backgroundColor: '#fff',
                padding: '28px 24px',
                borderRadius: '6px',
                borderTop: `4px solid ${f.color}`,
                boxShadow: '0 4px 20px rgba(92,45,10,0.10)',
              }}
            >
              <div style={{
                width: '36px', height: '36px',
                backgroundColor: f.color,
                borderRadius: '50%',
                marginBottom: '16px',
              }} />
              <h3 style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#5C2D0A',
                fontSize: '22px', lineHeight: 1.1, marginBottom: '10px',
              }}>
                {t(f.titleKey)}
              </h3>
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#5C2D0A', opacity: 0.7,
                fontSize: '13px', lineHeight: 1.65,
              }}>
                {t(f.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            className="btn-red-bv"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#E8173A', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '18px 36px', textDecoration: 'none', borderRadius: '3px',
            }}
          >
            {t('ventajas.ctaBoton')}
          </a>
        </div>
      </div>

      <WaveDivider fromColor="#F4E800" toColor="#F4E800" height={72} />

      <style>{`
        @media (max-width: 900px) {
          .stats-strip-bv { grid-template-columns: repeat(2, 1fr) !important; }
          .features-bv-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .stats-strip-bv { grid-template-columns: 1fr 1fr !important; }
          .features-bv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
