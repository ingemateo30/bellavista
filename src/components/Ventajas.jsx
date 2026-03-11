import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

/* ── Contador animado ──────────────────────── */
function AnimCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));

  useEffect(() => {
    if (inView) {
      const ctrl = animate(count, target, { duration: 1.8, ease: 'easeOut' });
      return ctrl.stop;
    }
  }, [inView, count, target]);

  return (
    <span ref={ref} style={{ fontFamily: 'Schoolbell, cursive', display: 'inline-block' }}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const features = [
  { svgSrc: '/1.svg',   titleKey: 'ventajas.enfoqueExportador.titulo', descKey: 'ventajas.enfoqueExportador.descripcion', accent: '#E8173A' },
  { svgSrc: '/2.svg',   titleKey: 'ventajas.calidadControlada.titulo', descKey: 'ventajas.calidadControlada.descripcion', accent: '#1B7A2F' },
  { svgSrc: '/11.svg',  titleKey: 'ventajas.capacidadSuministro.titulo', descKey: 'ventajas.capacidadSuministro.descripcion', accent: '#F4E800' },
  { svgSrc: '/111.svg', titleKey: 'ventajas.privateLabel.titulo', descKey: 'ventajas.privateLabel.descripcion', accent: '#5C2D0A' },
];

const stats = [
  { target: 4, suffix: '+', labelKey: 'ventajas.stat1', color: '#E8173A' },
  { target: 100, suffix: '%', labelKey: 'ventajas.stat2', color: '#1B7A2F' },
  { target: 15, suffix: '+', labelKey: 'ventajas.stat3', color: '#5C2D0A' },
  { target: 20, suffix: 'k+', labelKey: 'ventajas.stat4', color: '#E8173A' },
];

export default function Ventajas() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">

      {/* ── Bloque de estadísticas — fondo amarillo ─── */}
      <div style={{ backgroundColor: '#F4E800', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center px-4 relative"
              >
                {/* Separador vertical (menos en el último) */}
                {i < stats.length - 1 && (
                  <div
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px"
                    style={{ backgroundColor: 'rgba(27,58,14,0.2)' }}
                  />
                )}
                <div
                  style={{
                    fontFamily: 'Schoolbell, cursive',
                    fontSize: 'clamp(48px, 7vw, 80px)',
                    lineHeight: 1,
                    color: '#1B3A0E',
                    marginBottom: '8px',
                  }}
                >
                  <AnimCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p
                  style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: 'rgba(27,58,14,0.75)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t(stat.labelKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Título por qué elegirnos ─────────────────── */}
      <div style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '0' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#E8173A',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            {t('ventajas.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#1B3A0E',
              fontSize: 'clamp(32px, 5vw, 60px)',
              lineHeight: 1.1,
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}
          >
            {t('ventajas.titulo')}
          </motion.h2>
        </div>
      </div>

      {/* ── Tarjetas de características ──────────────── */}
      <div style={{ backgroundColor: '#fff', paddingBottom: '80px', paddingTop: '16px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.13, delayChildren: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 20 } }
                }}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(27,58,14,0.1)', transition: { type: 'spring', stiffness: 300 } }}
                style={{
                  backgroundColor: '#FAFAFA',
                  border: '1px solid #F0EDE8',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Acento de color superior */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: feat.accent,
                  }}
                />

                {/* Icono */}
                <div className="mb-6 flex justify-center">
                  <img src={feat.svgSrc} alt="" style={{ width: '64px', height: '64px', opacity: 0.85 }} />
                </div>

                {/* Título */}
                <h3
                  style={{
                    fontFamily: 'Schoolbell, cursive',
                    color: '#1B3A0E',
                    fontSize: '22px',
                    lineHeight: 1.2,
                    marginBottom: '10px',
                    textAlign: 'center',
                  }}
                >
                  {t(feat.titleKey)}
                </h3>

                {/* Descripción */}
                <p
                  style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: '#6B5E55',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    textAlign: 'center',
                  }}
                >
                  {t(feat.descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-14 flex flex-col items-center gap-4"
          >
            <p
              style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#1B3A0E',
                fontSize: 'clamp(20px, 3vw, 30px)',
              }}
            >
              {t('ventajas.ctaTitulo')}
            </p>
            <motion.a
              href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista.%20%C2%BFMe%20pueden%20ayudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 14px 32px rgba(232,23,58,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#E8173A',
                color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '14px 32px',
                borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('ventajas.ctaBoton')}
            </motion.a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
