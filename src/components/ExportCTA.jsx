import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));

  useEffect(() => {
    if (inView) {
      const ctrl = animate(count, target, { duration: 1.6, ease: 'easeOut' });
      return ctrl.stop;
    }
  }, [inView, count, target]);

  return (
    <motion.span ref={ref} style={{ fontFamily: 'Schoolbell, cursive' }}>
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

export default function ExportCTA() {
  const { t } = useTranslation();
  const ticker = t('exportcta.ticker', { returnObjects: true });
  const tickerItems = Array.isArray(ticker) ? [...ticker, ...ticker] : [];

  return (
    <section id="exportar" style={{ overflow: 'hidden' }}>

      {/* Ticker */}
      <div style={{ backgroundColor: '#E8173A', padding: '14px 0', overflow: 'hidden' }}>
        <div className="flex whitespace-nowrap marquee-track">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                margin: '0 32px',
                color: 'rgba(255,255,255,0.92)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontFamily: 'Kumbh Sans, sans-serif',
              }}
            >
              {item}
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bloque principal — split editorial */}
      <div style={{ backgroundColor: '#fff' }}>
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Columna izquierda — imagen */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 relative"
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '-16px',
                  right: '32px',
                  bottom: '32px',
                  borderRadius: '12px',
                  backgroundColor: '#F4E800',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1,
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src="/SINR0002.jpg"
                  alt="Exportación Productos Bellavista"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  onError={e => { e.target.src = '/banner1.png'; }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13,31,8,0.75) 0%, transparent 55%)',
                  }}
                />

                {/* Stats sobre imagen */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <div>
                    <div style={{ color: '#F4E800', fontSize: '42px', lineHeight: 1, fontFamily: 'Schoolbell, cursive' }}>
                      <AnimatedCounter target={4} suffix="+" />
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Kumbh Sans, sans-serif' }}>
                      {t('exportcta.stat1Label')}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#F4E800', fontSize: '42px', lineHeight: 1, fontFamily: 'Schoolbell, cursive' }}>
                      <AnimatedCounter target={15} suffix="+" />
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Kumbh Sans, sans-serif' }}>
                      {t('exportcta.stat3Label')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge 100% Natural */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '12px',
                  backgroundColor: '#E8173A',
                  color: '#fff',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span style={{ fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  100% Natural
                </span>
              </motion.div>
            </motion.div>

            {/* Columna derecha — contenido */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#E8173A' }} />
                <span style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#E8173A',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                }}>
                  {t('exportcta.eyebrow')}
                </span>
              </div>

              {/* Titular */}
              <h2 style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#1B3A0E',
                fontSize: 'clamp(36px, 5vw, 60px)',
                lineHeight: 1.05,
                marginBottom: '16px',
              }}>
                {t('exportcta.titulo')}
              </h2>

              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#6B5E55',
                fontSize: '15px',
                lineHeight: 1.75,
                marginBottom: '28px',
                maxWidth: '440px',
              }}>
                {t('exportcta.subtitulo')}
              </p>

              {/* Separador */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  height: '1px',
                  backgroundColor: '#E8DCCF',
                  marginBottom: '28px',
                  transformOrigin: 'left center',
                }}
              />

              {/* Checklist */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { key: 'exportcta.card1Titulo', desc: 'exportcta.card1Desc' },
                  { key: 'exportcta.card2Titulo', desc: 'exportcta.card2Desc' },
                  { key: 'exportcta.card3Titulo', desc: 'exportcta.card3Desc' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                  >
                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: '#1B7A2F',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '1px',
                    }}>
                      <svg width="10" height="10" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: '#1B3A0E', fontWeight: 600, fontSize: '14px' }}>
                        {t(item.key)}
                      </span>
                      <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: '#6B5E55', fontSize: '13px', marginLeft: '4px' }}>
                        — {t(item.desc)}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Botones */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 28px rgba(27,122,47,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#1B7A2F',
                    color: '#fff',
                    fontFamily: 'Kumbh Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    padding: '13px 28px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('exportcta.ctaBoton')}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista.%20%C2%BFMe%20pueden%20ayudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#1B7A2F',
                    fontFamily: 'Kumbh Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </motion.a>
              </div>
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#9A8A7A',
                fontSize: '11px',
                marginTop: '14px',
              }}>
                {t('exportcta.ctaSubtexto')}
              </p>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
