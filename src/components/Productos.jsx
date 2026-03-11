import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { listaProductos } from '../data/productos';

/*
  PRODUCTOS — Staggered editorial product grid
  ─────────────────────────────────────────────
  • Cream background
  • Large section header with counter
  • 3-column grid, alternating card heights for visual rhythm
  • Each card: white bg, product image, name, category badge
  • Hover: lift + "Ver más" reveal
  • Filter tabs by category
*/

const CATEGORY_COLORS = {
  'productos.endulzantes':  '#D11335',
  'productos.tradicional':  '#603813',
  'productos.premium':      '#F15A24',
  'productos.proximamente': '#B8EC3F',
};

const CATEGORY_KEYS = [
  null,
  'productos.endulzantes',
  'productos.tradicional',
  'productos.premium',
];

export default function Productos() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? listaProductos.filter(p => p.categoriaKey === activeCategory)
    : listaProductos.slice(0, 9);

  const categoryColor = cat => CATEGORY_COLORS[cat] || '#0D0806';

  return (
    <section
      id="productos"
      style={{
        backgroundColor: '#F5E6D3',
        padding: '96px 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '56px',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#603813', opacity: 0.6,
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              {t('productos.seccion') || 'Nuestros Productos'}
            </p>
            <h2 style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#0D0806',
              fontSize: 'clamp(40px, 6vw, 68px)',
              lineHeight: 0.95,
              margin: 0,
            }}>
              {t('productos.titulo') || 'Línea de Productos'}
              <span style={{
                fontFamily: 'Kumbh Sans',
                fontSize: '14px', fontWeight: 700,
                color: '#D11335',
                marginLeft: '16px',
                verticalAlign: 'middle',
                letterSpacing: '0.1em',
              }}>
                {listaProductos.length} SKU
              </span>
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
          >
            {CATEGORY_KEYS.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '9px 18px',
                  border: activeCategory === cat
                    ? `2px solid ${cat ? categoryColor(cat) : '#0D0806'}`
                    : '2px solid rgba(96,56,19,0.2)',
                  backgroundColor: activeCategory === cat
                    ? (cat ? categoryColor(cat) : '#0D0806')
                    : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#603813',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat ? t(cat) : 'Todos'}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Products grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="products-grid-new"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="product-card"
            >
              <Link
                to={`/producto/${product.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  style={{
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: i % 3 === 1 ? '420px' : '380px',
                    position: 'relative',
                  }}
                  className="product-card-inner"
                >
                  {/* Category color bar */}
                  <div style={{
                    height: '3px',
                    backgroundColor: categoryColor(product.categoriaKey),
                  }} />

                  {/* Image area */}
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: '#FBF5ED',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '32px 24px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Subtle number watermark */}
                    <span style={{
                      position: 'absolute', bottom: '8px', right: '12px',
                      fontFamily: 'Schoolbell, cursive',
                      fontSize: '60px', color: 'rgba(96,56,19,0.07)',
                      userSelect: 'none',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <img
                      src={product.imagen}
                      alt={t(product.nombreKey)}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '200px',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                        position: 'relative', zIndex: 1,
                      }}
                      className="product-img-new"
                    />
                  </div>

                  {/* Info */}
                  <div style={{ padding: '20px 24px 24px' }}>
                    {/* Category */}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      marginBottom: '8px',
                    }}>
                      <span style={{
                        width: '8px', height: '8px',
                        backgroundColor: categoryColor(product.categoriaKey),
                        display: 'inline-block',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: 'Kumbh Sans, sans-serif',
                        color: categoryColor(product.categoriaKey),
                        fontSize: '10px', fontWeight: 700,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                      }}>
                        {t(product.categoriaKey)}
                      </span>
                    </div>

                    {/* Product name */}
                    <h3 style={{
                      fontFamily: 'Schoolbell, cursive',
                      color: '#0D0806',
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      lineHeight: 1.1,
                      margin: 0,
                    }}>
                      {t(product.nombreKey)}
                    </h3>

                    {/* CTA hint */}
                    <div
                      className="product-cta-hint"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        marginTop: '12px',
                        opacity: 0,
                        transform: 'translateY(6px)',
                        transition: 'opacity 0.3s, transform 0.3s',
                      }}
                    >
                      <span style={{
                        fontFamily: 'Kumbh Sans',
                        color: '#D11335', fontSize: '11px', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                      }}>
                        Ver detalle
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D11335" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {!activeCategory && listaProductos.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '56px' }}
          >
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20quiero%20información%20sobre%20la%20línea%20completa%20de%20productos%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#0D0806', color: '#FFFF00',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 800, fontSize: '12px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '18px 36px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              className="products-all-cta"
            >
              Ver catálogo completo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid-new { grid-template-columns: repeat(2, 1fr) !important; }
          .product-card-inner { height: 360px !important; }
        }
        @media (max-width: 520px) {
          .products-grid-new { grid-template-columns: 1fr !important; }
        }
        .product-card:hover .product-img-new { transform: scale(1.08) !important; }
        .product-card:hover .product-cta-hint { opacity: 1 !important; transform: translateY(0) !important; }
        .products-all-cta:hover { background: #D11335 !important; }
      `}</style>
    </section>
  );
}
