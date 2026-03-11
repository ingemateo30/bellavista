import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  CATEGORIAS — Tres universos de producto
  ─────────────────────────────────────────
  3 paneles de alto impacto visual, mínimo texto,
  cada uno en un color institucional diferente.
*/

export default function Categorias() {
  const { t } = useTranslation();

  const paneles = [
    {
      bgColor: '#D11335',
      accentColor: '#FFFF00',
      image: '/_DSC0033.jpg',
      tituloKey: 'categorias.panela.titulo',
      tagKey: 'categorias.panela.tag',
      num: '01',
    },
    {
      bgColor: '#009245',
      accentColor: '#B8EC3F',
      image: '/_DSC0063.jpg',
      tituloKey: 'categorias.cafe.titulo',
      tagKey: 'categorias.cafe.tag',
      num: '02',
    },
    {
      bgColor: '#F15A24',
      accentColor: '#FFFF00',
      image: '/_DSC0042(1).jpg',
      tituloKey: 'categorias.bebidas.titulo',
      tagKey: 'categorias.bebidas.tag',
      num: '03',
    },
  ];

  return (
    <section id="categorias" style={{ overflow: 'hidden' }}>

      {/* Header — muy compacto, solo eyebrow + título */}
      <div
        style={{
          backgroundColor: '#603813',
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#FFFF00',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {t('categorias.eyebrow')}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#fff',
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 1,
            margin: 0,
          }}
        >
          {t('categorias.titulo')}
        </motion.h2>
      </div>

      {/* 3 paneles de color */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
        className="cat-grid"
      >
        {paneles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: '520px',
              cursor: 'pointer',
            }}
            className="group cat-panel"
          >
            {/* Imagen de fondo */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('${p.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'scale(1)',
                transition: 'transform 0.7s ease',
              }}
              className="cat-img"
            />

            {/* Overlay de color sólido */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: p.bgColor,
                opacity: 0.82,
                transition: 'opacity 0.5s ease',
              }}
              className="cat-overlay"
            />

            {/* Número decorativo */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontFamily: 'Schoolbell, cursive',
                color: 'rgba(255,255,255,0.12)',
                fontSize: '96px',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {p.num}
            </div>

            {/* Contenido */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                minHeight: '520px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '36px 32px',
              }}
            >
              {/* Tag */}
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: p.accentColor,
                  color: '#603813',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '2px',
                  marginBottom: '16px',
                  alignSelf: 'flex-start',
                }}
              >
                {t(p.tagKey)}
              </div>

              {/* Título */}
              <h3
                style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#fff',
                  fontSize: 'clamp(32px, 3.5vw, 52px)',
                  lineHeight: 1.05,
                  marginBottom: '20px',
                }}
              >
                {t(p.tituloKey)}
              </h3>

              {/* Línea decorativa de color */}
              <div
                style={{
                  height: '3px',
                  width: '48px',
                  backgroundColor: p.accentColor,
                  transition: 'width 0.4s ease',
                }}
                className="cat-line"
              />
            </div>

            {/* Borde superior de color */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: p.accentColor,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Franja de colores institucionales */}
      <div style={{ display: 'flex', height: '8px' }}>
        {['#D11335', '#F15A24', '#FFFF00', '#B8EC3F', '#009245', '#603813'].map((c, i) => (
          <div key={i} style={{ flex: 1, backgroundColor: c }} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: 1fr !important; }
          .cat-panel { min-height: 380px !important; }
        }
        .group:hover .cat-img { transform: scale(1.08) !important; }
        .group:hover .cat-overlay { opacity: 0.65 !important; }
        .group:hover .cat-line { width: 80px !important; }
      `}</style>
    </section>
  );
}
