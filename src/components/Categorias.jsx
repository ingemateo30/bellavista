import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  CATEGORIAS — Estilo Nela: limpio, blanco, premium
  ──────────────────────────────────────────────────
  • Fondo blanco
  • Header centrado: eyebrow + título grande
  • 3 tarjetas de imagen con hover elegante
  • Línea de color institucional debajo de cada imagen
*/

const PANELES = [
  {
    image: '/_DSC0033.jpg',
    accent: '#D11335',
    tituloKey: 'categorias.panela.titulo',
    tagKey: 'categorias.panela.tag',
    descKey: 'categorias.panela.desc',
  },
  {
    image: '/_DSC0063.jpg',
    accent: '#009245',
    tituloKey: 'categorias.cafe.titulo',
    tagKey: 'categorias.cafe.tag',
    descKey: 'categorias.cafe.desc',
  },
  {
    image: '/_DSC0042(1).jpg',
    accent: '#F15A24',
    tituloKey: 'categorias.bebidas.titulo',
    tagKey: 'categorias.bebidas.tag',
    descKey: 'categorias.bebidas.desc',
  },
];

export default function Categorias() {
  const { t } = useTranslation();

  return (
    <section id="categorias" style={{ backgroundColor: '#FAFAFA', padding: '96px 0 80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#D11335', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            {t('categorias.eyebrow')}
          </p>
          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#1A1A1A',
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1, margin: 0,
          }}>
            {t('categorias.titulo')}
          </h2>
        </motion.div>

        {/* 3 tarjetas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="cat-cards"
        >
          {PANELES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                backgroundColor: '#fff',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
              }}
              className="cat-card"
            >
              {/* Imagen */}
              <div style={{ overflow: 'hidden', height: '320px', position: 'relative' }}>
                <div
                  style={{
                    width: '100%', height: '100%',
                    backgroundImage: `url('${p.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s ease',
                  }}
                  className="cat-card-img"
                />
              </div>

              {/* Línea de color */}
              <div style={{ height: '4px', backgroundColor: p.accent }} />

              {/* Texto */}
              <div style={{ padding: '24px 28px 28px' }}>
                {/* Tag */}
                <span style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: p.accent,
                  fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  display: 'block', marginBottom: '8px',
                }}>
                  {t(p.tagKey)}
                </span>
                {/* Título */}
                <h3 style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#1A1A1A',
                  fontSize: 'clamp(26px, 2.5vw, 34px)',
                  lineHeight: 1.1, marginBottom: '10px',
                }}>
                  {t(p.tituloKey)}
                </h3>
                {/* Descripción breve */}
                <p style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#666', fontSize: '13px', lineHeight: 1.65,
                }}>
                  {t(p.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cat-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.12) !important; transform: translateY(-4px) !important; }
        .cat-card:hover .cat-card-img { transform: scale(1.06) !important; }
        @media (max-width: 860px) { .cat-cards { grid-template-columns: 1fr !important; } }
        @media (max-width: 1100px) { .cat-cards { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 700px) { .cat-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
