import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  HERO — "FUEGO Y CAÑA" — Editorial Split Design
  ────────────────────────────────────────────────
  • Left 55%: Deep dark bg, oversized stacked typography, CTAs
  • Right 45%: Warm cream/brown panel, product floating image
  • Bottom: Red marquee band
  • Navbar is transparent over hero
*/

const PRODUCTS_HERO = [
  '/Piloncillo.png',
  '/pulverizada.png',
  '/_DSC0058.png',
  '/_DSC0033.png',
];

const MARQUEE_ITEMS = [
  '100% Natural',
  'Panela Artesanal',
  'Exportación Global',
  'Desde 2002',
  'San Gil, Santander',
  'Colombia',
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentProduct(p => (p + 1) % PRODUCTS_HERO.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '-75px',
      }}
    >
      {/* ── MAIN SPLIT CONTENT ───────────────── */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          minHeight: 'calc(100vh - 56px)',
        }}
        className="hero-grid"
      >
        {/* LEFT — Dark panel, typography */}
        <div
          style={{
            backgroundColor: '#0D0806',
            padding: 'clamp(120px, 14vw, 160px) clamp(32px, 5vw, 80px) 64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle texture pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }} />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              marginBottom: '32px', position: 'relative', zIndex: 1,
            }}
          >
            <div style={{
              display: 'flex', gap: '4px',
            }}>
              {['#D11335','#F15A24','#FFFF00','#B8EC3F','#009245'].map((c,i) => (
                <div key={i} style={{ width: '18px', height: '3px', backgroundColor: c }} />
              ))}
            </div>
            <span style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.35em', textTransform: 'uppercase',
            }}>
              {t('hero.eyebrow')}
            </span>
          </motion.div>

          {/* MASSIVE STACKED HEADLINES */}
          <div style={{ position: 'relative', zIndex: 1, marginBottom: '40px' }}>
            {/* Line 1: Outline text */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16,1,0.3,1] }}
              style={{
                fontFamily: 'Schoolbell, cursive',
                fontSize: 'clamp(72px, 10vw, 130px)',
                lineHeight: 0.88,
                margin: 0,
                WebkitTextStroke: '2px rgba(255,255,255,0.25)',
                color: 'transparent',
                display: 'block',
                letterSpacing: '-0.02em',
              }}
            >
              {t('hero.titulo1')}
            </motion.h1>

            {/* Line 2: Filled yellow */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.16,1,0.3,1] }}
              style={{
                fontFamily: 'Schoolbell, cursive',
                fontSize: 'clamp(72px, 10vw, 130px)',
                lineHeight: 0.88,
                margin: 0,
                color: '#FFFF00',
                display: 'block',
                letterSpacing: '-0.02em',
              }}
            >
              {t('hero.titulo2')}
            </motion.h1>

            {/* Line 3: White smaller */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                marginTop: '16px',
              }}
            >
              <div style={{ width: '40px', height: '2px', backgroundColor: '#D11335', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(255,255,255,0.7)',
                fontSize: 'clamp(13px, 1.5vw, 17px)',
                fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              }}>
                Colombia · Exportación
              </span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              lineHeight: 1.75,
              maxWidth: '420px',
              marginBottom: '44px',
              position: 'relative', zIndex: 1,
            }}
          >
            {t('hero.subtitulo')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.67 }}
            style={{
              display: 'flex', gap: '14px', flexWrap: 'wrap',
              position: 'relative', zIndex: 1,
            }}
          >
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#D11335', color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 800, fontSize: '12px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '16px 28px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
              }}
              className="hero-btn-primary"
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
                color: 'rgba(255,255,255,0.75)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700, fontSize: '12px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '14px 24px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
              className="hero-btn-secondary"
            >
              {t('hero.ctaSecundario')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>

          {/* Bottom badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            style={{
              position: 'absolute', bottom: '40px', left: 'clamp(32px, 5vw, 80px)',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}
            className="hero-badge-bottom"
          >
            <div style={{
              width: '36px', height: '36px',
              backgroundColor: '#D11335',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: 'Kumbh Sans', color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1px' }}>Producido en</p>
              <p style={{ fontFamily: 'Kumbh Sans', color: 'rgba(255,255,255,0.75)', fontSize: '12px', fontWeight: 700 }}>San Gil, Santander · Colombia</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Warm product panel */}
        <div
          style={{
            background: 'linear-gradient(160deg, #8B4A1A 0%, #603813 40%, #3D2008 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '500px',
          }}
        >
          {/* Background texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,200,100,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }} />

          {/* Large decorative year */}
          <div style={{
            position: 'absolute',
            bottom: '-20px', right: '-20px',
            fontFamily: 'Schoolbell, cursive',
            fontSize: '200px', lineHeight: 1,
            color: 'rgba(255,255,255,0.04)',
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            2002
          </div>

          {/* Product images cycling */}
          <div style={{ position: 'relative', zIndex: 2, width: '70%', maxWidth: '360px' }}>
            {PRODUCTS_HERO.map((src, i) => (
              <div
                key={i}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  inset: i === 0 ? 'auto' : 0,
                  opacity: i === currentProduct ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                }}
              >
                <img
                  src={src}
                  alt="Producto BellaVista"
                  className="float-product"
                  style={{
                    width: '100%', height: 'auto',
                    filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Product dots indicator */}
          <div style={{
            position: 'absolute', bottom: '32px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', gap: '8px', zIndex: 3,
          }}>
            {PRODUCTS_HERO.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentProduct(i)}
                style={{
                  width: i === currentProduct ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: i === currentProduct ? '#FFFF00' : 'rgba(255,255,255,0.25)',
                  border: 'none', padding: 0, cursor: 'pointer',
                  transition: 'width 0.3s, background 0.3s',
                }}
              />
            ))}
          </div>

          {/* Top label */}
          <div style={{
            position: 'absolute', top: '32px', left: '32px', zIndex: 3,
          }}>
            <span style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase',
            }}>
              Panela · Piloncillo · Derivados
            </span>
          </div>
        </div>
      </div>

      {/* ── MARQUEE BAND (Red) ─────────────────── */}
      <div
        style={{
          backgroundColor: '#D11335',
          padding: '14px 0',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex', gap: '0',
            width: 'max-content',
          }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#fff',
                fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '0 32px',
                display: 'flex', alignItems: 'center', gap: '32px',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
              <span style={{ width: '6px', height: '6px', backgroundColor: '#FFFF00', display: 'inline-block', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero-btn-primary:hover { background: #B00F2C !important; transform: translateY(-2px); }
        .hero-btn-secondary:hover { border-color: rgba(255,255,255,0.6) !important; color: #fff !important; background: rgba(255,255,255,0.07) !important; }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { min-height: 320px !important; }
          .hero-badge-bottom { display: none !important; }
        }
        @media (max-width: 520px) {
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
