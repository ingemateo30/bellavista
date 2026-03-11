import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { listaProductos } from '../data/productos';
import WaveDivider from './WaveDivider';

const CAT_COLOR = {
  'productos.endulzantes':  '#E8173A',
  'productos.tradicional':  '#5C2D0A',
  'productos.premium':      '#1B7A2F',
  'productos.proximamente': '#8BC420',
};
const CAT_KEYS = [null,'productos.endulzantes','productos.tradicional','productos.premium'];

export default function Productos() {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);
  const list = active ? listaProductos.filter(p => p.categoriaKey === active) : listaProductos.slice(0, 9);

  return (
    <section id="productos" style={{ backgroundColor: '#F4E800', paddingTop: '0' }}>
      <div style={{ padding: '72px 32px 64px', maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', gap: '20px', flexWrap: 'wrap' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif', color: '#5C2D0A', opacity: 0.55,
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '8px',
            }}>
              {t('productos.seccion') || 'Nuestros Productos'}
            </p>
            <h2 style={{
              fontFamily: 'Schoolbell, cursive', color: '#5C2D0A',
              fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: 0.95, margin: 0,
            }}>
              {t('productos.titulo') || 'Línea de Productos'}
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {CAT_KEYS.map((cat, i) => (
              <button key={i} onClick={() => setActive(cat)} style={{
                fontFamily: 'Kumbh Sans, sans-serif', fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '9px 16px', cursor: 'pointer',
                border: `2px solid ${active === cat ? (cat ? CAT_COLOR[cat] : '#5C2D0A') : 'rgba(92,45,10,0.25)'}`,
                backgroundColor: active === cat ? (cat ? CAT_COLOR[cat] : '#5C2D0A') : 'transparent',
                color: active === cat ? '#fff' : '#5C2D0A',
                borderRadius: '3px', transition: 'all 0.2s',
              }}>
                {cat ? t(cat) : 'Todos'}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="products-bv-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {list.map((product, i) => {
            const accent = CAT_COLOR[product.categoriaKey] || '#5C2D0A';
            return (
              <motion.div key={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: (i % 3) * 0.09, duration: 0.45, ease: [0.16,1,0.3,1] }}
                className="product-card-bv"
              >
                <Link to={`/producto/${product.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    backgroundColor: '#fff', borderRadius: '6px', overflow: 'hidden',
                    border: `2px solid ${accent}22`,
                    boxShadow: '0 2px 12px rgba(92,45,10,0.08)',
                  }}>
                    {/* Accent top border */}
                    <div style={{ height: '4px', backgroundColor: accent }} />

                    {/* Image */}
                    <div style={{
                      backgroundColor: '#FDF8DC', padding: '28px 20px 20px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      height: '200px', overflow: 'hidden', position: 'relative',
                    }}>
                      {/* Etiqueta style from Image 2 */}
                      <div className="etiqueta-bv" style={{
                        position: 'absolute', top: '10px', left: '10px',
                        borderColor: accent, color: accent,
                      }}>
                        {t(product.categoriaKey)}
                      </div>
                      <img src={product.imagen} alt={t(product.nombreKey)}
                        className="product-img-bv"
                        style={{
                          maxHeight: '160px', maxWidth: '100%', objectFit: 'contain',
                          display: 'block', transition: 'transform 0.4s ease',
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ padding: '16px 18px 20px' }}>
                      <h3 style={{
                        fontFamily: 'Schoolbell, cursive', color: '#5C2D0A',
                        fontSize: 'clamp(18px, 2vw, 23px)', lineHeight: 1.1, marginBottom: '10px',
                      }}>
                        {t(product.nombreKey)}
                      </h3>

                      <div className="product-cta-bv" style={{
                        opacity: 0, transform: 'translateY(6px)',
                        transition: 'opacity 0.3s, transform 0.3s',
                        display: 'flex', alignItems: 'center', gap: '6px',
                      }}>
                        <span style={{
                          fontFamily: 'Kumbh Sans, sans-serif', color: '#E8173A',
                          fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                        }}>Ver detalle</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8173A" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="https://wa.me/573184550936?text=Hola%2C%20quiero%20información%20sobre%20el%20catálogo%20completo%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            className="btn-red-bv"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#5C2D0A', color: '#F4E800',
              fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '18px 36px', textDecoration: 'none', borderRadius: '3px',
              transition: 'background 0.2s',
            }}>
            Ver Catálogo Completo
          </a>
        </div>
      </div>

      <WaveDivider fromColor="#F4E800" toColor="#F4E800" height={72} />

      <style>{`
        @media (max-width: 900px) { .products-bv-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 520px) { .products-bv-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
