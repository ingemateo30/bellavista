import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

/*
  GALERIA — Magazine-style asymmetric mosaic
  ────────────────────────────────────────────
  • Light warm background
  • Asymmetric grid: first image large (spans 2), rest fill around
  • Red overlay on hover
  • Lightbox on click
*/

const IMAGES = [
  { src: '/SINR0002.jpg',       alt: 'Instalaciones Bellavista', span: true },
  { src: '/SINR0004.jpg',       alt: 'Proceso de producción' },
  { src: '/_DSC0035.jpg',       alt: 'Productos Bellavista' },
  { src: '/_DSC0042(1).jpg',    alt: 'Panela artesanal' },
  { src: '/_DSC0048.jpg',       alt: 'Exportación' },
  { src: '/_DSC0058(1).jpg',    alt: 'Calidad certificada' },
  { src: '/_DSC0063.jpg',       alt: 'Producto natural' },
];

export default function Galeria() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  return (
    <section
      style={{
        backgroundColor: '#F5E6D3',
        padding: '96px 0',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '56px', gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(96,56,19,0.5)',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              {t('galeria.eyebrow')}
            </p>
            <h2 style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#0D0806',
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 0.95, margin: 0,
            }}>
              {t('galeria.titulo')}
            </h2>
          </div>
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(96,56,19,0.5)',
            fontSize: '13px',
            maxWidth: '280px',
            lineHeight: 1.6,
          }}>
            Producción artesanal desde las montañas de Santander, Colombia
          </p>
        </motion.div>

        {/* Mosaic Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 240px)',
            gap: '8px',
          }}
          className="gallery-mosaic"
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              onClick={() => setSelected(img)}
              className="gallery-item-new"
              style={{
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                gridRow: i === 0 ? 'span 2' : 'span 1',
                cursor: 'pointer',
                backgroundColor: '#e0cdbA',
              }}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay-new" />

              {/* Hover label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '16px',
                background: 'linear-gradient(to top, rgba(13,8,6,0.8), transparent)',
                opacity: 0,
                transition: 'opacity 0.3s',
              }} className="gallery-label">
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#fff', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  margin: 0,
                }}>
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              backgroundColor: 'rgba(13,8,6,0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              src={selected.src}
              alt={selected.alt}
              style={{
                maxWidth: '90vw', maxHeight: '85vh',
                objectFit: 'contain',
                boxShadow: '0 32px 100px rgba(0,0,0,0.8)',
              }}
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed', top: '24px', right: '24px',
                background: '#D11335', border: 'none',
                color: '#fff', width: '44px', height: '44px',
                cursor: 'pointer', fontSize: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-item-new:hover .gallery-overlay-new { opacity: 0.4 !important; }
        .gallery-item-new:hover .gallery-label { opacity: 1 !important; }
        @media (max-width: 768px) {
          .gallery-mosaic {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
          }
          .gallery-mosaic > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 200px !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-mosaic { grid-template-columns: 1fr !important; }
          .gallery-mosaic > div { height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
