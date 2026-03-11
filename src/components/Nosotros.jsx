import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const pasos = [
  {
    icon: `<img src="/41.svg" alt="" style="width:60px;height:60px;filter:brightness(0) invert(1);opacity:0.9;" />`,
    num: '01',
    titleKey: 'nosotros.paso1.titulo',
    descKey: 'nosotros.paso1.descripcion',
    accent: '#F4E800',
  },
  {
    icon: `<img src="/I3.svg" alt="" style="width:60px;height:60px;filter:brightness(0) invert(1);opacity:0.9;" />`,
    num: '02',
    titleKey: 'nosotros.paso2.titulo',
    descKey: 'nosotros.paso2.descripcion',
    accent: '#8BC420',
  },
  {
    icon: `<img src="/I4.svg" alt="" style="width:60px;height:60px;filter:brightness(0) invert(1);opacity:0.9;" />`,
    num: '03',
    titleKey: 'nosotros.paso3.titulo',
    descKey: 'nosotros.paso3.descripcion',
    accent: '#F4E800',
  },
  {
    icon: `<img src="/I2.svg" alt="" style="width:60px;height:60px;filter:brightness(0) invert(1);opacity:0.9;" />`,
    num: '04',
    titleKey: 'nosotros.paso4.titulo',
    descKey: 'nosotros.paso4.descripcion',
    accent: '#E8173A',
  },
];

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <section
      id="nosotros"
      style={{ backgroundColor: '#0D1F08', overflow: 'hidden', position: 'relative' }}
    >
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #E8173A, #F4E800, #1B7A2F)' }} />

      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <p
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#F4E800',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            {t('nosotros.eyebrow')}
          </p>
          <h2
            style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#fff',
              fontSize: 'clamp(36px, 6vw, 68px)',
              lineHeight: 1.05,
              margin: '0 auto 16px',
              maxWidth: '700px',
            }}
          >
            {t('nosotros.titulo')}
          </h2>
          <p
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('nosotros.subtitulo')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              style={{
                padding: '40px 28px',
                borderRight: i < pasos.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  fontFamily: 'Schoolbell, cursive',
                  color: 'rgba(255,255,255,0.05)',
                  fontSize: '72px',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {paso.num}
              </div>

              <div
                style={{
                  width: '38px',
                  height: '38px',
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
                  color: paso.accent === '#F4E800' || paso.accent === '#8BC420' ? '#1B3A0E' : '#fff',
                  fontWeight: 800,
                  fontSize: '12px',
                }}>
                  {paso.num}
                </span>
              </div>

              <div className="mb-5" dangerouslySetInnerHTML={{ __html: paso.icon }} />

              <h3 style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#fff',
                fontSize: '22px',
                lineHeight: 1.25,
                marginBottom: '10px',
              }}>
                {t(paso.titleKey)}
              </h3>

              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                lineHeight: 1.75,
              }}>
                {t(paso.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p style={{
            fontFamily: 'Schoolbell, cursive',
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            marginBottom: '20px',
          }}>
            {t('nosotros.ctaTitulo')}
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, y: -3, boxShadow: '0 14px 32px rgba(244,232,0,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#F4E800',
              color: '#1B3A0E',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 800,
              fontSize: '0.82rem',
              padding: '14px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {t('nosotros.ctaBoton')}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
