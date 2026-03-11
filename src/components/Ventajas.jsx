import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

/* Contador animado */
function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const val = useMotionValue(0);
  const rounded = useTransform(val, v => Math.round(v));
  useEffect(() => {
    if (inView) { const c = animate(val, target, { duration: 1.8, ease: 'easeOut' }); return c.stop; }
  }, [inView, val, target]);
  return <motion.span ref={ref}>{rounded}{suffix}</motion.span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Ventajas() {
  const { t } = useTranslation();

  return (
    <section style={{ overflow: 'hidden' }}>

      {/* ── BLOQUE DE ESTADÍSTICAS — AMARILLO ───────────── */}
      <div style={{ backgroundColor: '#FFFF00', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Label superior */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#603813',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            {t('ventajas.eyebrow')}
          </motion.p>

          {/* Cuatro estadísticas gigantes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.12 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
            }}
            className="stats-grid"
          >
            {[
              { target: 4,   suffix: '+',  labelKey: 'ventajas.stat1', accent: '#D11335' },
              { target: 100, suffix: '%',  labelKey: 'ventajas.stat2', accent: '#009245' },
              { target: 15,  suffix: '+',  labelKey: 'ventajas.stat3', accent: '#F15A24' },
              { target: 20,  suffix: 'k+', labelKey: 'ventajas.stat4', accent: '#D11335' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  textAlign: 'center',
                  padding: '0 24px 24px',
                  borderLeft: i > 0 ? '1px solid rgba(96,56,19,0.15)' : 'none',
                  position: 'relative',
                }}
              >
                {/* Número gigante */}
                <div
                  style={{
                    fontFamily: 'Schoolbell, cursive',
                    color: '#603813',
                    fontSize: 'clamp(64px, 9vw, 108px)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  <Counter target={stat.target} suffix={stat.suffix} />
                </div>
                {/* Label */}
                <p
                  style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: 'rgba(96,56,19,0.75)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t(stat.labelKey)}
                </p>
                {/* Dot de color */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: stat.accent,
                    margin: '12px auto 0',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Franja de transición */}
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', height: '60px', backgroundColor: '#fff' }}>
        <path d="M0,0 L1440,0 L1440,60 Q720,0 0,60 Z" fill="#FFFF00" />
      </svg>

      {/* ── CARACTERÍSTICAS — FONDO BLANCO ──────────── */}
      <div style={{ backgroundColor: '#fff', padding: '16px 24px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#603813',
              fontSize: 'clamp(32px, 5vw, 60px)',
              lineHeight: 1.05,
              textAlign: 'center',
              marginBottom: '52px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {t('ventajas.titulo')}
          </motion.h2>

          {/* 4 tarjetas de características */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
            className="features-grid"
          >
            {[
              { imgSrc: '/1.svg',   titleKey: 'ventajas.enfoqueExportador.titulo', descKey: 'ventajas.enfoqueExportador.descripcion', top: '#D11335' },
              { imgSrc: '/2.svg',   titleKey: 'ventajas.calidadControlada.titulo', descKey: 'ventajas.calidadControlada.descripcion', top: '#009245' },
              { imgSrc: '/11.svg',  titleKey: 'ventajas.capacidadSuministro.titulo', descKey: 'ventajas.capacidadSuministro.descripcion', top: '#FFFF00' },
              { imgSrc: '/111.svg', titleKey: 'ventajas.privateLabel.titulo', descKey: 'ventajas.privateLabel.descripcion', top: '#F15A24' },
            ].map((feat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 20 } },
                }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(96,56,19,0.12)' }}
                style={{
                  backgroundColor: '#fff',
                  border: '1.5px solid rgba(96,56,19,0.1)',
                  borderTop: `4px solid ${feat.top}`,
                  borderRadius: '4px',
                  padding: '32px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Ícono */}
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <img src={feat.imgSrc} alt="" style={{ width: '56px', height: '56px' }} />
                </div>
                {/* Título */}
                <h3 style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#603813',
                  fontSize: '22px',
                  textAlign: 'center',
                  marginBottom: '10px',
                  lineHeight: 1.2,
                }}>
                  {t(feat.titleKey)}
                </h3>
                {/* Descripción */}
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(96,56,19,0.7)',
                  fontSize: '13px',
                  lineHeight: 1.7,
                  textAlign: 'center',
                }}>
                  {t(feat.descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#603813',
                fontSize: 'clamp(22px, 3vw, 34px)',
                marginBottom: '20px',
              }}
            >
              {t('ventajas.ctaTitulo')}
            </motion.h3>
            <motion.a
              href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 28px rgba(209,19,53,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#D11335',
                color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              {t('ventajas.ctaBoton')}
            </motion.a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
