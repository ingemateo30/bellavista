import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { type: 'video', video: '/videobella.mp4', duration: 16000 },
  { type: 'image', image: '/banner1.png', duration: 9000 },
  { type: 'image', image: '/banner2.png', duration: 9000 },
];

const categories = [
  { icon: '🌿', labelKey: 'hero.catPanela', color: '#F4E800', textColor: '#1B3A0E' },
  { icon: '☕', labelKey: 'hero.catCafe', color: '#E8173A', textColor: '#fff' },
  { icon: '🍵', labelKey: 'hero.catBebidas', color: '#1B7A2F', textColor: '#fff' },
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(new Set([0]));

  useEffect(() => {
    const dur = slides[currentSlide].duration ?? 9000;
    const preload = setTimeout(() => {
      const next = (currentSlide + 1) % slides.length;
      setLoaded(prev => new Set([...prev, next]));
    }, Math.max(dur - 2000, 0));
    const timer = setTimeout(() => setCurrentSlide(p => (p + 1) % slides.length), dur);
    return () => { clearTimeout(timer); clearTimeout(preload); };
  }, [currentSlide]);

  return (
    <section id="inicio" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0D1F08]">

      {/* ── Fondos ───────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === i ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.video}
                autoPlay muted loop playsInline preload="metadata"
                className="w-full h-full object-cover"
              />
            ) : (
              loaded.has(i) && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
              )
            )}
          </div>
        ))}

        {/* Overlay oscuro dramático */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F05]/92 via-[#0D1F08]/80 to-[#0D1F08]/50" />

        {/* Franja roja lateral izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E8173A] z-10" />
      </div>

      {/* ── Contenido principal ───────────────────── */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#E8173A]" />
          <span style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
          }}>
            {t('hero.eyebrow')}
          </span>
        </motion.div>

        {/* Título BELLAVISTA enorme */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <h1 style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#F4E800',
              fontSize: 'clamp(72px, 12vw, 160px)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              margin: 0,
            }}>
              Bella
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
          >
            <h1 style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#FFFFFF',
              fontSize: 'clamp(72px, 12vw, 160px)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              margin: 0,
            }}>
              Vista
            </h1>
          </motion.div>
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            maxWidth: '480px',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
          }}
        >
          {t('hero.subtitulo')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap gap-3 sm:gap-4"
        >
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista.%20%C2%BFMe%20pueden%20ayudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#F4E800',
              color: '#1B3A0E',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 800,
              fontSize: '0.85rem',
              padding: '14px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1B3A0E'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F4E800'; e.currentTarget.style.color = '#1B3A0E'; }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t('hero.cotizarWhatsapp')}
          </a>

          <a
            href="#productos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              padding: '14px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.3)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
          >
            {t('hero.verProductos')}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Indicadores de slide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-28 sm:bottom-32 left-8 sm:left-12 md:left-16 lg:left-24 flex gap-2"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: currentSlide === i ? '32px' : '8px',
                height: '3px',
                borderRadius: '2px',
                backgroundColor: currentSlide === i ? '#F4E800' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s',
                padding: 0,
              }}
              aria-label={`${t('hero.goToSlide')} ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* ── Barra inferior de categorías ─────────── */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{ backgroundColor: '#F4E800' }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
          <div className="flex items-stretch divide-x divide-[#1B3A0E]/20">
            {categories.map((cat, i) => (
              <a
                key={i}
                href="#productos"
                className="flex items-center gap-2 sm:gap-3 flex-1 justify-center py-4 sm:py-5 group"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-lg sm:text-xl">{cat.icon}</span>
                <span style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#1B3A0E',
                  fontWeight: 700,
                  fontSize: 'clamp(10px, 1.5vw, 13px)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {t(cat.labelKey)}
                </span>
                <svg
                  className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  fill="none" stroke="#1B3A0E" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
