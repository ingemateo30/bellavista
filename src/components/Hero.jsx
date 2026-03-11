import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import WaveDivider from './WaveDivider';

/*
  HERO — Imagen panorámica con marco rojo, fondo amarillo, montañas de Santander
  Estructura igual a la imagen de referencia 1:
  • Fondo amarillo #F4E800
  • Marco rojo alrededor de la foto
  • Foto full-width con overlay de texto Schoolbell
  • Carousel con dots
  • Wave divider al fondo
*/

const SLIDES = [
  { src: '/banner1.png',   caption: 'Santander · Colombia' },
  { src: '/banner2.png',   caption: 'Del Campo a Tu Mesa' },
  { src: '/SINR0002.jpg',  caption: 'Tradición Artesanal' },
];

// SVG decorativo de caña de azúcar
const CanaIcon = ({ size = 48, color = '#1B7A2F' }) => (
  <svg width={size} height={size} viewBox="0 0 48 80" fill="none">
    <path d="M24 78 C24 78 24 20 24 8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 20 C18 14 10 16 6 12" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 30 C30 22 38 24 42 18" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 42 C16 34 8 36 4 30" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 54 C32 46 40 48 44 42" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <ellipse cx="24" cy="8" rx="4" ry="3" fill={color} opacity="0.7"/>
  </svg>
);

export default function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" style={{ backgroundColor: '#F4E800', marginTop: '-78px', paddingTop: '78px' }}>
      {/* ── HERO AREA ────────────── */}
      <div style={{ position: 'relative', padding: '28px 32px 0' }}>

        {/* Decoraciones de caña (izquierda y derecha) */}
        <div style={{ position: 'absolute', left: '20px', top: '40px', opacity: 0.65 }} className="sway-anim">
          <CanaIcon size={52} color="#1B7A2F" />
        </div>
        <div style={{ position: 'absolute', right: '20px', top: '60px', opacity: 0.55, transform: 'scaleX(-1)' }} className="sway-anim">
          <CanaIcon size={44} color="#8BC420" />
        </div>
        <div style={{ position: 'absolute', right: '70px', top: '30px', opacity: 0.4 }} className="sway-anim">
          <CanaIcon size={36} color="#E8173A" />
        </div>

        {/* Headline arriba del frame */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          <h1 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#5C2D0A',
            fontSize: 'clamp(28px, 5vw, 52px)',
            lineHeight: 1.0,
            margin: 0,
          }}>
            {t('hero.titulo1')}{' '}
            <span style={{ color: '#E8173A' }}>{t('hero.titulo2')}</span>
          </h1>
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#5C2D0A', opacity: 0.7,
            fontSize: 'clamp(11px, 1.2vw, 14px)',
            fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            marginTop: '6px',
          }}>
            {t('hero.eyebrow')}
          </p>
        </motion.div>

        {/* MARCO ROJO + FOTO */}
        <div style={{
          border: '6px solid #E8173A',
          borderRadius: '6px',
          overflow: 'hidden',
          position: 'relative',
          maxWidth: '1180px',
          margin: '0 auto',
          boxShadow: '0 12px 48px rgba(92,45,10,0.25), 0 0 0 3px #F4E800, 0 0 0 9px #5C2D0A',
        }}>
          {/* Slides */}
          <div style={{ position: 'relative', paddingBottom: '42%', minHeight: '280px' }}>
            {SLIDES.map((slide, i) => (
              <div key={i} style={{
                position: 'absolute', inset: 0,
                opacity: i === current ? 1 : 0,
                transition: 'opacity 0.9s ease',
              }}>
                <img src={slide.src} alt={slide.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

                {/* Mountain SVG overlay at bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
                  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', height: '120px' }}>
                    <path d="M0,60 C240,20 480,80 720,50 C960,20 1200,70 1440,40 L1440,120 L0,120 Z" fill="rgba(27,122,47,0.75)"/>
                    <path d="M0,75 C200,40 500,90 800,65 C1100,40 1300,80 1440,60 L1440,120 L0,120 Z" fill="rgba(139,196,32,0.75)"/>
                    <path d="M0,88 C300,60 600,100 900,80 C1150,62 1320,90 1440,78 L1440,120 L0,120 Z" fill="rgba(244,232,0,0.85)"/>
                    <path d="M0,100 C360,78 720,108 1080,92 C1260,84 1380,100 1440,95 L1440,120 L0,120 Z" fill="rgba(232,23,58,0.7)"/>
                    <path d="M0,110 C240,96 480,114 720,106 C960,98 1200,112 1440,108 L1440,120 L0,120 Z" fill="rgba(92,45,10,0.8)"/>
                  </svg>
                </div>

                {/* Gradient overlay para texto */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 30%, rgba(92,45,10,0.6) 100%)',
                }} />

                {/* Caption text on image */}
                <div style={{
                  position: 'absolute', bottom: '24px', left: '28px',
                  zIndex: 2,
                }}>
                  <span style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '11px', fontWeight: 700,
                    letterSpacing: '0.3em', textTransform: 'uppercase',
                    backgroundColor: 'rgba(92,45,10,0.5)',
                    padding: '3px 10px',
                    backdropFilter: 'blur(4px)',
                  }}>
                    {slide.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div style={{
            position: 'absolute', bottom: '16px', right: '24px',
            display: 'flex', gap: '8px', zIndex: 10,
          }}>
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '24px' : '8px', height: '8px',
                backgroundColor: i === current ? '#F4E800' : 'rgba(255,255,255,0.4)',
                border: 'none', padding: 0, cursor: 'pointer',
                borderRadius: '4px',
                transition: 'width 0.3s, background 0.3s',
              }} />
            ))}
          </div>

          {/* Badge "Desde 2002" */}
          <div style={{
            position: 'absolute', top: '20px', right: '20px',
            backgroundColor: '#E8173A',
            padding: '8px 14px',
            zIndex: 5,
            borderRadius: '3px',
          }}>
            <p style={{ fontFamily: 'Schoolbell, cursive', color: '#fff', fontSize: '13px', lineHeight: 1, margin: 0 }}>Desde</p>
            <p style={{ fontFamily: 'Schoolbell, cursive', color: '#F4E800', fontSize: '20px', lineHeight: 1, margin: 0 }}>2002</p>
          </div>
        </div>

        {/* CTA row below frame */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex', justifyContent: 'center', gap: '14px',
            flexWrap: 'wrap',
            padding: '24px 0 32px',
          }}
        >
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            className="btn-red-bv"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#E8173A', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '16px 28px', textDecoration: 'none', borderRadius: '3px',
            }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            {t('hero.ctaPrimario')}
          </a>
          <a href="/#productos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'transparent', color: '#5C2D0A',
              border: '2px solid #5C2D0A',
              fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '14px 24px', textDecoration: 'none', borderRadius: '3px',
              transition: 'background 0.2s, color 0.2s',
            }}
            className="hero-outline-btn">
            {t('hero.ctaSecundario')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Wave separator */}
      <WaveDivider toColor="#5C2D0A" height={80} />

      <style>{`
        .hero-outline-btn:hover { background: #5C2D0A !important; color: #F4E800 !important; }
      `}</style>
    </section>
  );
}
