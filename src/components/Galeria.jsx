import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const imagenes = [
  { src: '/SINR0002.jpg',       alt: 'Instalaciones Bellavista' },
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
    <section style={{ backgroundColor: '#fff', padding: '96px 0 80px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#D11335', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            {t('galeria.eyebrow')}
          </p>
          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#1A1A1A',
            fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: 1, margin: 0,
          }}>
            {t('galeria.titulo')}
          </h2>
        </motion.div>

        {/* Grid de imágenes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.07 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '12px',
          }}
          className="gallery-grid"
        >
          {imagenes.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              onClick={() => setSelected(img)}
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#f5f5f5',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                gridRow: i === 0 ? 'span 2' : 'span 1',
                position: 'relative',
                aspectRatio: i === 0 ? 'auto' : '4/3',
              }}
              className="gallery-item"
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  minHeight: i === 0 ? '400px' : '180px',
                }}
                className="gallery-img"
              />
              <div style={{
                position: 'absolute', inset: 0,
                backgroundColor: '#D11335',
                opacity: 0,
                transition: 'opacity 0.3s',
              }} className="gallery-overlay" />
            </motion.div>
          ))}
        </motion.div>
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
              backgroundColor: 'rgba(0,0,0,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selected.src}
              alt={selected.alt}
              style={{
                maxWidth: '90vw', maxHeight: '85vh',
                objectFit: 'contain',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
              }}
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed', top: '20px', right: '20px',
                background: '#D11335', border: 'none',
                color: '#fff', width: '40px', height: '40px',
                cursor: 'pointer', fontSize: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '2px',
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.06) !important; }
        .gallery-item:hover .gallery-overlay { opacity: 0.20 !important; }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
