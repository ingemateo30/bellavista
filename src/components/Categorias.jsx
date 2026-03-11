import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  CATEGORIAS — "NUESTRO UNIVERSO"
  ──────────────────────────────────
  • 3 tall color panels side by side (expandable on hover)
  • Full-bleed photography with dark gradient overlay
  • White text reveals from bottom on hover
  • Bold Schoolbell headlines
*/

const PANELS = [
  {
    bg: '#2D1608',
    accentColor: '#D11335',
    tag: 'categorias.panela.tag',
    titulo: 'categorias.panela.titulo',
    desc: 'categorias.panela.desc',
    image: '/banner1.png',
    imagePos: 'center 40%',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8c-8 0-14 5-14 10s6 8 14 8 14-3 14-8-6-10-14-10z"/>
        <path d="M10 18c0 5 6 10 14 12 8-2 14-7 14-12"/>
        <path d="M10 24c0 5 6 10 14 12 8-2 14-7 14-12"/>
        <path d="M10 30c0 5 6 8 14 10 8-2 14-5 14-10"/>
      </svg>
    ),
  },
  {
    bg: '#002916',
    accentColor: '#009245',
    tag: 'categorias.cafe.tag',
    titulo: 'categorias.cafe.titulo',
    desc: 'categorias.cafe.desc',
    image: '/SINR0002.jpg',
    imagePos: 'center 60%',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h24v4a12 12 0 01-12 12A12 12 0 018 26v-4z"/>
        <path d="M32 24h4a4 4 0 000-8h-4"/>
        <path d="M16 10c0-3 4-5 4-8"/>
        <path d="M22 10c0-3 4-5 4-8"/>
      </svg>
    ),
  },
  {
    bg: '#3D1200',
    accentColor: '#F15A24',
    tag: 'categorias.bebidas.tag',
    titulo: 'categorias.bebidas.titulo',
    desc: 'categorias.bebidas.desc',
    image: '/SINR0004.jpg',
    imagePos: 'center 30%',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="28" height="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8h16l-2 28H18L16 8z"/>
        <path d="M13 16h22"/>
        <path d="M20 8V4h8v4"/>
        <path d="M22 20c0 3 4 3 4 6s-4 3-4 6"/>
      </svg>
    ),
  },
];

export default function Categorias() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        backgroundColor: '#0D0806',
        padding: '80px 0 0',
        overflow: 'hidden',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          padding: '0 32px 56px',
        }}
      >
        <p style={{
          fontFamily: 'Kumbh Sans, sans-serif',
          color: 'rgba(255,255,255,0.35)',
          fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.4em', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          {t('categorias.eyebrow')}
        </p>
        <h2 style={{
          fontFamily: 'Schoolbell, cursive',
          color: '#fff',
          fontSize: 'clamp(40px, 6vw, 72px)',
          lineHeight: 0.95,
        }}>
          {t('categorias.titulo')}{' '}
          <span style={{ color: '#FFFF00' }}>—</span>
        </h2>
      </motion.div>

      {/* Panels row */}
      <div
        style={{
          display: 'flex',
          minHeight: '520px',
        }}
        className="cat-panels-row"
      >
        {PANELS.map((panel, i) => (
          <div
            key={i}
            className="cat-panel"
            style={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: panel.bg,
              cursor: 'default',
              minHeight: '480px',
            }}
          >
            {/* Background image */}
            <img
              src={panel.image}
              alt={t(panel.titulo)}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: panel.imagePos,
                opacity: 0.3,
              }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(to top, ${panel.bg} 0%, ${panel.bg}99 40%, transparent 100%)`,
              zIndex: 1,
            }} />

            {/* Accent color line at top */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '4px',
              backgroundColor: panel.accentColor,
              zIndex: 3,
            }} />

            {/* Content */}
            <div
              className="cat-panel-content"
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                zIndex: 2,
                padding: '32px 28px',
              }}
            >
              {/* Tag */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                marginBottom: '16px',
              }}>
                <span style={{
                  backgroundColor: panel.accentColor,
                  color: '#fff',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontSize: '9px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  padding: '4px 10px',
                }}>
                  {t(panel.tag)}
                </span>
              </div>

              {/* Icon */}
              <div style={{
                color: panel.accentColor,
                marginBottom: '12px',
              }}>
                {panel.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#fff',
                fontSize: 'clamp(26px, 3vw, 36px)',
                lineHeight: 1.0,
                marginBottom: '12px',
              }}>
                {t(panel.titulo)}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(255,255,255,0.55)',
                fontSize: '13px', lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                {t(panel.desc)}
              </p>

              {/* Link */}
              <a
                href="/#productos"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: panel.accentColor,
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 700, fontSize: '11px',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                className="cat-link"
              >
                Ver productos
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Index number watermark */}
            <div style={{
              position: 'absolute', top: '24px', right: '24px',
              fontFamily: 'Schoolbell, cursive',
              color: 'rgba(255,255,255,0.08)',
              fontSize: '80px', lineHeight: 1,
              userSelect: 'none', zIndex: 1,
              pointerEvents: 'none',
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cat-panels-row { flex-direction: column !important; }
          .cat-panel { flex: none !important; min-height: 360px !important; }
        }
        .cat-link:hover { gap: 14px !important; }
      `}</style>
    </section>
  );
}
