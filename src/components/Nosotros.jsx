import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Nosotros() {
  const { t } = useTranslation();
  const pasos = [
    { num: '01', titleKey: 'nosotros.paso1.titulo', descKey: 'nosotros.paso1.descripcion', accent: '#FFFF00' },
    { num: '02', titleKey: 'nosotros.paso2.titulo', descKey: 'nosotros.paso2.descripcion', accent: '#B8EC3F' },
    { num: '03', titleKey: 'nosotros.paso3.titulo', descKey: 'nosotros.paso3.descripcion', accent: '#FFFF00' },
    { num: '04', titleKey: 'nosotros.paso4.titulo', descKey: 'nosotros.paso4.descripcion', accent: '#F15A24' },
  ];

  return (
    <section id="nosotros" style={{ overflow: 'hidden' }}>

      {/* Ola de entrada (blanco → verde) */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', height: '80px', backgroundColor: '#009245' }}>
        <path d="M0,80 Q360,0 720,40 Q1080,80 1440,0 L1440,80 Z" fill="#fff" />
      </svg>

      {/* Bloque principal — verde */}
      <div style={{ backgroundColor: '#009245', padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#FFFF00',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            {t('nosotros.eyebrow')}
          </motion.p>

          {/* Título grande */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#fff',
              fontSize: 'clamp(36px, 6vw, 72px)',
              lineHeight: 1,
              textAlign: 'center',
              marginBottom: '56px',
            }}
          >
            {t('nosotros.titulo')}
          </motion.h2>

          {/* Pasos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="steps-grid">
            {pasos.map((paso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{
                  padding: '0 28px 0',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  position: 'relative',
                }}
              >
                {/* Número */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: paso.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <span style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: '#603813',
                    fontWeight: 800,
                    fontSize: '14px',
                  }}>
                    {paso.num}
                  </span>
                </div>

                {/* Título del paso */}
                <h3 style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#fff',
                  fontSize: '26px',
                  lineHeight: 1.15,
                  marginBottom: '12px',
                }}>
                  {t(paso.titleKey)}
                </h3>

                {/* Descripción */}
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '13px',
                  lineHeight: 1.7,
                }}>
                  {t(paso.descKey)}
                </p>

                {/* Línea de acento inferior */}
                <div style={{
                  marginTop: '24px',
                  height: '3px',
                  width: '36px',
                  backgroundColor: paso.accent,
                  borderRadius: '2px',
                }} />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 28px rgba(0,0,0,0.2)' }}
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
                padding: '14px 36px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              {t('nosotros.ctaBoton')}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Ola de salida (verde → blanco) */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', height: '80px', backgroundColor: '#fff' }}>
        <path d="M0,0 Q360,80 720,40 Q1080,0 1440,80 L1440,0 Z" fill="#009245" />
      </svg>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
