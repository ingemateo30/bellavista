import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  HERO — Concepto: Color Block Diagonal
  ─────────────────────────────────────
  Panel izquierdo: #D11335 (rojo) con tipografía masiva
  Panel derecho  : imagen del producto / campo
  Divisor diagonal + ola en amarillo al fondo
*/

const IMG_SLIDES = ['/banner1.png', '/SINR0002.jpg', '/_DSC0033.jpg'];

export default function Hero() {
  const { t } = useTranslation();
  const [slide, setSlide] = useState(0);
  const vidRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setSlide(s => (s + 1) % IMG_SLIDES.length), 6000);
    return () => clearTimeout(t);
  }, [slide]);

  return (
    <section
      id="inicio"
      style={{ position: 'relative', width: '100%', minHeight: 'calc(100vh - 73px)', overflow: 'hidden' }}
    >
      {/* ── LAYOUT PRINCIPAL ─────────────────────────── */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 73px)' }} className="flex-col md:flex-row">

        {/* ── PANEL IZQUIERDO — ROJO ─────────────────── */}
        <div
          style={{
            flex: '0 0 52%',
            backgroundColor: '#D11335',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(40px, 6vw, 80px) clamp(32px, 5vw, 72px)',
            zIndex: 2,
            clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)',
          }}
          className="hero-left"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <div style={{ width: '40px', height: '2px', backgroundColor: '#FFFF00' }} />
            <span style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}>
              {t('hero.eyebrow')}
            </span>
          </motion.div>

          {/* Título BELLAVISTA */}
          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#FFFF00',
                fontSize: 'clamp(60px, 9vw, 130px)',
                lineHeight: 0.92,
                margin: 0,
              }}
            >
              Bella
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#FFFFFF',
                fontSize: 'clamp(60px, 9vw, 130px)',
                lineHeight: 0.92,
                margin: 0,
              }}
            >
              Vista
            </motion.h1>
          </div>

          {/* Línea separadora */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              height: '3px',
              width: '80px',
              backgroundColor: '#B8EC3F',
              marginBottom: '24px',
              transformOrigin: 'left',
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.88)',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              lineHeight: 1.6,
              maxWidth: '380px',
              marginBottom: '36px',
            }}
          >
            {t('hero.subtitulo')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}
          >
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista."
              target="_blank"
              rel="noopener noreferrer"
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
                padding: '14px 28px',
                borderRadius: '3px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#FFFF00'; }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              {t('hero.cotizarWhatsapp')}
            </a>

            <a
              href="#productos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'transparent',
                color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                borderRadius: '3px',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.5)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              {t('hero.verProductos')}
            </a>
          </motion.div>

          {/* Indicador de color en la parte inferior */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '5px', display: 'flex' }}>
            {['#FFFF00', '#B8EC3F', '#F15A24', '#009245'].map((c, i) => (
              <div key={i} style={{ flex: 1, backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* ── PANEL DERECHO — IMAGEN ─────────────────── */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            minHeight: '50vh',
          }}
        >
          {/* Video de fondo principal */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/videobella.mp4" type="video/mp4" />
          </video>

          {/* Slideshow encima del video */}
          {IMG_SLIDES.map((src, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: slide === i ? 1 : 0,
                transition: 'opacity 1.2s ease',
              }}
            />
          ))}

          {/* Overlay de gradiente */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(209,19,53,0.2) 0%, transparent 40%)',
          }} />

          {/* Badge esquina superior derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 1.2 }}
            style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              backgroundColor: '#009245',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: '3px',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {t('hero.badgeTexto')}
          </motion.div>

          {/* Indicadores de slide */}
          <div style={{
            position: 'absolute',
            bottom: '28px',
            right: '28px',
            display: 'flex',
            gap: '8px',
          }}>
            {IMG_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                style={{
                  width: slide === i ? '28px' : '8px',
                  height: '3px',
                  borderRadius: '2px',
                  backgroundColor: slide === i ? '#FFFF00' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── BARRA INFERIOR DE CATEGORÍAS ─────────────── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        style={{ backgroundColor: '#FFFF00', position: 'relative', zIndex: 5 }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}>
            {[
              { label: t('hero.catPanela'), color: '#D11335' },
              { label: t('hero.catCafe'),   color: '#009245' },
              { label: t('hero.catBebidas'), color: '#F15A24' },
            ].map((cat, i) => (
              <a
                key={i}
                href="#categorias"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '18px 24px',
                  textDecoration: 'none',
                  borderLeft: i > 0 ? '1px solid rgba(96,56,19,0.15)' : 'none',
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.color, flexShrink: 0 }} />
                <span style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#603813',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}>
                  {cat.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Estilos responsive */}
      <style>{`
        @media (max-width: 767px) {
          .hero-left {
            clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%) !important;
          }
        }
      `}</style>
    </section>
  );
}
