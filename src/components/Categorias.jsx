import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const CATS = [
  {
    titleKey: 'categorias.panela.titulo',
    descKey:  'categorias.panela.descripcion',
    tagKey:   'categorias.panela.tag',
    img:      '/_DSC0033.png',
    accent:   '#E8173A',
    labelColor: '#E8173A',
  },
  {
    titleKey: 'categorias.cafe.titulo',
    descKey:  'categorias.cafe.descripcion',
    tagKey:   'categorias.cafe.tag',
    img:      '/SINR0002.jpg',
    accent:   '#1B7A2F',
    labelColor: '#1B7A2F',
  },
  {
    titleKey: 'categorias.bebidas.titulo',
    descKey:  'categorias.bebidas.descripcion',
    tagKey:   'categorias.bebidas.tag',
    img:      '/_DSC0058.png',
    accent:   '#8BC420',
    labelColor: '#5C2D0A',
  },
];

export default function Categorias() {
  const { t } = useTranslation();
  return (
    <section style={{ backgroundColor: '#5C2D0A', paddingTop: '0' }}>
      {/* Marquee strip */}
      <div style={{ backgroundColor: '#E8173A', padding: '12px 0', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ display: 'flex', width: 'max-content', gap: '0' }}>
          {Array(8).fill(null).map((_, i) => (
            <span key={i} style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#fff', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              padding: '0 32px', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: '28px',
            }}>
              100% Natural
              <span style={{ width: '6px', height: '6px', backgroundColor: '#F4E800', display: 'inline-block', borderRadius: '50%' }}/>
              Artesanal · Colombia
              <span style={{ width: '6px', height: '6px', backgroundColor: '#F4E800', display: 'inline-block', borderRadius: '50%' }}/>
              Exportación Global
              <span style={{ width: '6px', height: '6px', backgroundColor: '#F4E800', display: 'inline-block', borderRadius: '50%' }}/>
            </span>
          ))}
        </div>
      </div>

      {/* Categories section */}
      <div style={{ backgroundColor: '#F4E800', padding: '72px 32px 56px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '52px' }}
        >
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#5C2D0A', opacity: 0.6,
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.4em', textTransform: 'uppercase',
            marginBottom: '10px',
          }}>
            {t('categorias.eyebrow')}
          </p>
          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#5C2D0A',
            fontSize: 'clamp(36px, 6vw, 64px)',
            lineHeight: 0.95, margin: 0,
          }}>
            {t('categorias.titulo')}
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className="cat-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            maxWidth: '1180px', margin: '0 auto',
          }}
        >
          {CATS.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="cat-card-bv"
              style={{
                backgroundColor: '#fff',
                borderRadius: '6px',
                overflow: 'hidden',
                border: `3px solid ${cat.accent}`,
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '62%' }}>
                <img
                  src={cat.img}
                  alt={t(cat.titleKey)}
                  className="cat-img-bv"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
                {/* Etiqueta/tag style from Image 2 */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  backgroundColor: cat.accent,
                  color: '#fff',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontSize: '9px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '2px',
                }}>
                  {t(cat.tagKey)}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '20px 20px 24px' }}>
                <h3 style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#5C2D0A',
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  lineHeight: 1.0,
                  marginBottom: '8px',
                }}>
                  {t(cat.titleKey)}
                </h3>
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#5C2D0A', opacity: 0.7,
                  fontSize: '13px', lineHeight: 1.6,
                  marginBottom: '18px',
                }}>
                  {t(cat.descKey)}
                </p>

                {/* COMPRAR button — estilo Image 1 */}
                <a
                  href="/#productos"
                  className="btn-red-bv"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '100%',
                    backgroundColor: '#E8173A', color: '#fff',
                    fontFamily: 'Kumbh Sans, sans-serif',
                    fontWeight: 800, fontSize: '12px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '14px 20px',
                    textDecoration: 'none', borderRadius: '3px',
                    gap: '8px',
                  }}
                >
                  {t('categorias.verProductos') || 'Ver Productos'}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider fromColor="#F4E800" toColor="#F4E800" height={80} />

      <style>{`
        @media (max-width: 768px) {
          .cat-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) and (min-width: 769px) {
          .cat-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
