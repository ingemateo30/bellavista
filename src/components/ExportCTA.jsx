import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

/* ── Contador animado ──────────────────────────────────── */
function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.6, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, count, target]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded.get() === 0 && !inView ? '0' : null}
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
}

/* ── Variantes ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' } }
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' } }
};

const containerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } }
};

const listItem = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const badgePop = {
  hidden: { opacity: 0, scale: 0.4, rotate: -15 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: 'spring', stiffness: 300, damping: 18, delay: 0.55 }
  }
};

const badgePopLeft = {
  hidden: { opacity: 0, scale: 0.4, x: -20 },
  visible: {
    opacity: 1, scale: 1, x: 0,
    transition: { type: 'spring', stiffness: 280, damping: 18, delay: 0.7 }
  }
};

export default function ExportCTA() {
  const { t } = useTranslation();
  const ticker = t('exportcta.ticker', { returnObjects: true });
  const tickerItems = Array.isArray(ticker) ? [...ticker, ...ticker] : [];

  return (
    <section id="exportar" className="overflow-hidden bg-[#F2E8DF]">

      {/* ── TICKER VERDE ───────────────────────────────────── */}
      <div className="bg-[#5D8B3F] py-2.5 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-8 text-white/90 text-[11px] font-bold uppercase tracking-[0.22em] font-['Kumbh_Sans',_sans-serif]"
            >
              {item}
              <span className="text-white/30">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── CUERPO ─────────────────────────────────────────── */}
      <div className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── Columna izquierda — contenido ── */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="order-2 lg:order-1"
            >
              {/* Eyebrow */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-6 h-px bg-[#5D8B3F]" />
                <span className="text-[#5D8B3F] text-[11px] font-bold tracking-[0.3em] uppercase font-['Kumbh_Sans',_sans-serif]">
                  {t('exportcta.eyebrow')}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#2C1810] text-[38px] sm:text-[48px] md:text-[54px] leading-[1.08] mb-5 font-['Schoolbell',_cursive]"
              >
                {t('exportcta.titulo')}
              </motion.h2>

              {/* Bajada */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#6B5E55] text-[15px] sm:text-[16px] leading-relaxed mb-8 font-['Kumbh_Sans',_sans-serif] max-w-md"
              >
                {t('exportcta.subtitulo')}
              </motion.p>

              {/* Línea divisora animada */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                style={{ transformOrigin: 'left center' }}
                className="border-t border-[#D4B57E]/50 mb-8"
              />

              {/* Checklist */}
              <motion.ul
                variants={containerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-3.5 mb-10"
              >
                {[
                  { key: 'exportcta.card1Titulo', desc: 'exportcta.card1Desc' },
                  { key: 'exportcta.card2Titulo', desc: 'exportcta.card2Desc' },
                  { key: 'exportcta.card3Titulo', desc: 'exportcta.card3Desc' },
                ].map((item, i) => (
                  <motion.li key={i} variants={listItem} className="flex items-start gap-3.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#5D8B3F] flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[#2C1810] font-semibold text-[14px] font-['Kumbh_Sans',_sans-serif]">
                        {t(item.key)}
                      </span>
                      <span className="text-[#6B5E55] text-[13px] font-['Kumbh_Sans',_sans-serif] ml-1">
                        — {t(item.desc)}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Botones */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 28px rgba(93,139,63,0.4)', y: -2 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  className="inline-flex items-center gap-2.5 bg-[#5D8B3F] text-white px-8 py-3.5 rounded-lg font-['Kumbh_Sans',_sans-serif] font-semibold text-[14px] shadow-md transition-colors hover:bg-[#4A7032]"
                >
                  {t('exportcta.ctaBoton')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista.%20%C2%BFMe%20pueden%20ayudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-[#5D8B3F] text-[13px] font-semibold font-['Kumbh_Sans',_sans-serif] hover:text-[#4A7032] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </motion.a>
              </motion.div>

              <p className="text-[#9A8A7A] text-[11px] mt-4 font-['Kumbh_Sans',_sans-serif]">
                {t('exportcta.ctaSubtexto')}
              </p>
            </motion.div>

            {/* ── Columna derecha — imagen ── */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[560px]">

                {/* Marco decorativo verde detrás de la imagen */}
                <motion.div
                  initial={{ opacity: 0, x: 10, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[#5D8B3F]/15 border border-[#5D8B3F]/25"
                />

                {/* Imagen principal */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src="/SINR0002.jpg"
                    alt="Exportación Productos Bellavista"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/banner1.png';
                      e.target.className = 'w-full h-full object-cover object-top';
                    }}
                  />
                  {/* Gradiente inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3010]/65 via-transparent to-transparent" />

                  {/* Stats sobre la imagen — contadores animados */}
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <div className="text-[#F4C430] text-[38px] leading-none font-['Schoolbell',_cursive]">
                        <AnimatedCounter target={4} suffix="+" />
                      </div>
                      <div className="text-white/80 text-[10px] uppercase tracking-wider font-['Kumbh_Sans',_sans-serif]">
                        {t('exportcta.stat1Label')}
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.75, duration: 0.5 }}
                      className="text-right"
                    >
                      <div className="text-[#F4C430] text-[38px] leading-none font-['Schoolbell',_cursive]">
                        <AnimatedCounter target={15} suffix="+" />
                      </div>
                      <div className="text-white/80 text-[10px] uppercase tracking-wider font-['Kumbh_Sans',_sans-serif]">
                        {t('exportcta.stat3Label')}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Badge "100% Natural" — superior */}
                <motion.div
                  variants={badgePop}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="absolute -top-4 left-6 bg-[#F4C430] text-[#1E3A0E] px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 cursor-default"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-['Kumbh_Sans',_sans-serif]">
                    100% Natural
                  </span>
                </motion.div>

                {/* Badge B2B — lateral izquierdo */}
                <motion.div
                  variants={badgePopLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, x: -4 }}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl px-3 py-3 text-center cursor-default"
                >
                  <div className="text-[#5D8B3F] text-[24px] font-['Schoolbell',_cursive] leading-none">B2B</div>
                  <div className="text-[#6B5E55] text-[9px] uppercase tracking-wide font-['Kumbh_Sans',_sans-serif] mt-0.5 whitespace-nowrap">
                    {t('exportcta.stat4Label')}
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Separador sutil al pie */}
      <div className="border-t border-[#D4B57E]/35 mx-8 sm:mx-20" />

    </section>
  );
}
