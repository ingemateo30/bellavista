import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import WaveDivider from './WaveDivider';

const PHOTOS = [
  { src: '/banner1.png',   alt: 'galeria.foto1', span: 'wide' },
  { src: '/_DSC0033.png',  alt: 'galeria.foto2', span: 'normal' },
  { src: '/SINR0002.jpg',  alt: 'galeria.foto3', span: 'normal' },
  { src: '/_DSC0058.png',  alt: 'galeria.foto4', span: 'wide' },
  { src: '/banner2.png',   alt: 'galeria.foto5', span: 'normal' },
  { src: '/_DSC0033.png',  alt: 'galeria.foto6', span: 'normal' },
];

export default function Galeria() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null);

  return (
    <section style={{ backgroundColor: '#F4E800', paddingTop: '0' }}>
      {/* Heading strip */}
      <div style={{ backgroundColor: '#8BC420', padding: '28px 32px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Schoolbell, cursive',
          color: '#5C2D0A',
          fontSize: 'clamp(28px, 5vw, 52px)',
          lineHeight: 1, margin: 0,
        }}>
          {t('galeria.titulo') || 'Nuestra Galería'}
        </h2>
      </div>

      <div style={{ padding: '72px 32px 64px', maxWidth: '1360px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#5C2D0A', opacity: 0.6,
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.4em', textTransform: 'uppercase',
          }}>
            {t('galeria.eyebrow') || 'Del campo colombiano · Artesanal · Natural'}
          </p>
        </motion.div>

        {/* Mosaic grid */}
        <div className="galeria-bv-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '12px',
        }}>
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className={`gallery-item-bv ${photo.span === 'wide' ? 'galeria-wide' : ''}`}
              style={{
                position: 'relative', overflow: 'hidden',
                borderRadius: '6px', cursor: 'pointer',
                paddingBottom: photo.span === 'wide' ? '45%' : '70%',
                border: '2px solid rgba(92,45,10,0.12)',
                gridColumn: photo.span === 'wide' ? 'span 2' : 'span 1',
              }}
              onClick={() => setLightbox(photo.src)}
            >
              <img src={photo.src} alt={t(photo.alt) || photo.alt}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="gallery-img-bv"
              />
              {/* Hover overlay */}
              <div className="gallery-overlay-bv" style={{
                position: 'absolute', inset: 0,
                backgroundColor: 'rgba(27,122,47,0.0)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.3s',
              }}>
                <div style={{
                  opacity: 0, transform: 'scale(0.8)',
                  transition: 'all 0.3s',
                  backgroundColor: '#F4E800',
                  borderRadius: '50%', width: '48px', height: '48px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }} className="gallery-zoom-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5C2D0A" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              backgroundColor: 'rgba(92,45,10,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              style={{
                maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain',
                borderRadius: '6px', border: '4px solid #F4E800',
              }}
            />
            <button onClick={() => setLightbox(null)} style={{
              position: 'absolute', top: '20px', right: '20px',
              backgroundColor: '#E8173A', border: 'none', cursor: 'pointer',
              borderRadius: '50%', width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <WaveDivider fromColor="#F4E800" toColor="#F4E800" height={72} />

      <style>{`
        .gallery-img-bv { transition: transform 0.5s ease; }
        .gallery-item-bv:hover .gallery-img-bv { transform: scale(1.05); }
        .gallery-item-bv:hover .gallery-overlay-bv { background-color: rgba(27,122,47,0.35) !important; }
        .gallery-item-bv:hover .gallery-zoom-icon { opacity: 1 !important; transform: scale(1) !important; }
        @media (max-width: 768px) {
          .galeria-bv-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .galeria-wide { grid-column: span 2 !important; }
        }
        @media (max-width: 480px) {
          .galeria-bv-grid { grid-template-columns: 1fr !important; }
          .galeria-wide { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
