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
      duration: 1.8, ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);
  return <span ref={ref}>{display}{suffix}</span>;
}

/*
  VENTAJAS — Franja de stats + características
  ──────────────────────────────────────────────
  • Franja amarilla (#FFFF00) con 4 números grandes
  • Sección blanca con 4 tarjetas de características
*/

export default function Ventajas() {
  const { t } = useTranslation();

  const stats = [
    { target: 4,   suffix: '+',  labelKey: 'ventajas.stat1', color: '#D11335' },
    { target: 100, suffix: '%',  labelKey: 'ventajas.stat2', color: '#009245' },
    { target: 15,  suffix: '+',  labelKey: 'ventajas.stat3', color: '#F15A24' },
    { target: 20,  suffix: 'k+', labelKey: 'ventajas.stat4', color: '#D11335' },
  ];

  const features = [
    { titleKey: 'ventajas.enfoqueExportador.titulo', descKey: 'ventajas.enfoqueExportador.descripcion', color: '#D11335' },
    { titleKey: 'ventajas.calidadControlada.titulo', descKey: 'ventajas.calidadControlada.descripcion', color: '#009245' },
    { titleKey: 'ventajas.capacidadSuministro.titulo', descKey: 'ventajas.capacidadSuministro.descripcion', color: '#FFFF00' },
    { titleKey: 'ventajas.privateLabel.titulo', descKey: 'ventajas.privateLabel.descripcion', color: '#F15A24' },
  ];

  return (
    <section>
      {/* ── FRANJA AMARILLA — ESTADÍSTICAS ────── */}
      <div style={{ backgroundColor: '#FFFF00', padding: '72px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#603813', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.35em', textTransform: 'uppercase',
              textAlign: 'center', marginBottom: '48px',
            }}
          >
            {t('ventajas.eyebrow')}
          </motion.p>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
            className="stats-row"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '0 20px 24px',
                  borderLeft: i > 0 ? '1px solid rgba(96,56,19,0.15)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#1A1A1A',
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  lineHeight: 1, marginBottom: '6px',
                }}>
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(26,26,26,0.65)',
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>
                  {t(s.labelKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECCIÓN BLANCA — CARACTERÍSTICAS ──── */}
      <div style={{ backgroundColor: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#1A1A1A',
              fontSize: 'clamp(32px, 4vw, 56px)',
              textAlign: 'center', marginBottom: '56px',
            }}
          >
            {t('ventajas.titulo')}
          </motion.h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}
            className="features-row"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  borderTop: `4px solid ${f.color}`,
                  padding: '28px 24px',
                  backgroundColor: '#FAFAFA',
                }}
              >
                <h3 style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#1A1A1A',
                  fontSize: '22px', marginBottom: '10px', lineHeight: 1.2,
                }}>
                  {t(f.titleKey)}
                </h3>
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#666', fontSize: '13px', lineHeight: 1.7,
                }}>
                  {t(f.descKey)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#D11335', color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700, fontSize: '12px',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 32px', borderRadius: '2px',
                textDecoration: 'none',
              }}
            >
              {t('ventajas.ctaBoton')}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          .features-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .stats-row { grid-template-columns: 1fr 1fr !important; }
          .features-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
