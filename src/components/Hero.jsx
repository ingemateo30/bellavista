import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

/*
  HERO — Premium food brand style
  ────────────────────────────────────────────────────
  • Full-bleed background con slideshow de imágenes
  • Gradient overlay oscuro a izquierda para legibilidad
  • Headline grande, tagline, 2 CTAs
  • 3 category pills en la parte inferior
*/

const SLIDES = [
  { src: '/banner1.png',    pos: 'center 40%' },
  { src: '/SINR0002.jpg',   pos: 'center 30%' },
  { src: '/_DSC0033.jpg',   pos: 'center 50%' },
  { src: '/_DSC0063.jpg',   pos: 'center 50%' },
];

const CATEGORIES = [
  { labelKey: 'hero.catPanela',  color: '#D11335' },
  { labelKey: 'hero.catCafe',    color: '#009245' },
  { labelKey: 'hero.catBebidas', color: '#F15A24' },
];

export default function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 73px)',
        minHeight: '560px',
        overflow: 'hidden',
        backgroundColor: '#111',
      }}
    >
      {/* ── IMÁGENES DE FONDO (crossfade) ──────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('${slide.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: slide.pos,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.4s ease',
            zIndex: 0,
          }}
        />
      ))}

      {/* ── GRADIENT OVERLAY ────────────────────── */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(105deg, rgba(10,8,5,0.82) 0%, rgba(10,8,5,0.60) 55%, rgba(10,8,5,0.20) 100%)',
        }}
      />

      {/* ── CONTENIDO ───────────────────────────── */}
      <div
        style={{
          position: 'relative', zIndex: 2,
          maxWidth: '1280px', margin: '0 auto',
          padding: '0 40px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        className="hero-content"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#FFFF00',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ display: 'inline-block', width: '28px', height: '2px', backgroundColor: '#FFFF00', flexShrink: 0 }} />
          {t('hero.eyebrow')}
        </motion.p>

        {/* Headline principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#FFFFFF',
            fontSize: 'clamp(48px, 8vw, 100px)',
            lineHeight: 0.95,
            marginBottom: '24px',
            maxWidth: '700px',
          }}
        >
          {t('hero.titulo1')}{' '}
          <span style={{ color: '#FFFF00' }}>{t('hero.titulo2')}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.80)',
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            lineHeight: 1.65,
            maxWidth: '480px',
            marginBottom: '40px',
          }}
        >
          {t('hero.subtitulo')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
        >
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#D11335', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '15px 28px', borderRadius: '2px',
              textDecoration: 'none',
            }}
            className="hero-cta-primary"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            {t('hero.ctaPrimario')}
          </a>
          <a
            href="/#productos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'transparent',
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.6)',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '13px 26px', borderRadius: '2px',
              textDecoration: 'none',
            }}
            className="hero-cta-secondary"
          >
            {t('hero.ctaSecundario')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* ── BARRA INFERIOR: categorías ──────────── */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.70)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px', margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
          className="cat-bar"
        >
          {CATEGORIES.map((cat, i) => (
            <div
              key={i}
              style={{
                padding: '18px 20px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.color, flexShrink: 0 }} />
              <span style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#fff', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.05em',
              }}>
                {t(cat.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── INDICADORES DE SLIDE ─────────────────── */}
      <div
        style={{
          position: 'absolute', right: '32px', top: '50%',
          transform: 'translateY(-50%)', zIndex: 3,
          display: 'flex', flexDirection: 'column', gap: '8px',
        }}
        className="slide-dots"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '3px' : '3px',
              height: i === current ? '32px' : '16px',
              backgroundColor: i === current ? '#FFFF00' : 'rgba(255,255,255,0.35)',
              border: 'none', borderRadius: '2px',
              cursor: 'pointer', padding: 0,
              transition: 'height 0.3s, background 0.3s',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-content { padding: 0 20px !important; }
          .slide-dots { display: none !important; }
          .cat-bar { grid-template-columns: 1fr !important; }
        }
        .hero-cta-primary:hover { background: #B00F2C !important; }
        .hero-cta-secondary:hover { border-color: #fff !important; background: rgba(255,255,255,0.10) !important; }
      `}</style>
    </section>
  );
}
