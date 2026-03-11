import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  NOSOTROS — Full bleed editorial with asymmetric split
  ──────────────────────────────────────────────────────
  • Left: Full-height atmospheric photography
  • Right: Dark panel with editorial text + timeline
  • Diagonal split accent
  • Large year watermark
*/

const MILESTONES = [
  { year: '2002', keyText: 'nosotros.paso1' },
  { year: '2010', keyText: 'nosotros.paso2' },
  { year: '2018', keyText: 'nosotros.paso3' },
  { year: '2024', keyText: 'nosotros.paso4' },
];

const HIGHLIGHTS = [
  { value: '100%', label: 'Natural & Artesanal', color: '#009245' },
  { value: '20K',  label: 'kg capacidad anual',  color: '#FFFF00' },
  { value: '4+',   label: 'Países exportando',   color: '#D11335' },
];

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <section
      id="nosotros"
      style={{ overflow: 'hidden', backgroundColor: '#0D0806' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          minHeight: '720px',
        }}
        className="nosotros-grid"
      >
        {/* LEFT — Photography */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
          {/* Main image */}
          <img
            src="/banner1.png"
            alt="Finca BellaVista"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              position: 'absolute', inset: 0,
            }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(13,8,6,0.7) 0%, rgba(13,8,6,0.3) 60%, rgba(13,8,6,0.6) 100%)',
            zIndex: 1,
          }} />

          {/* Floating highlights */}
          <div style={{
            position: 'absolute', bottom: '40px', left: '40px',
            zIndex: 2,
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  backgroundColor: 'rgba(13,8,6,0.75)',
                  backdropFilter: 'blur(8px)',
                  padding: '12px 20px',
                  borderLeft: `3px solid ${h.color}`,
                }}
              >
                <span style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: h.color,
                  fontSize: '28px', lineHeight: 1,
                }}>
                  {h.value}
                </span>
                <span style={{
                  fontFamily: 'Kumbh Sans',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>
                  {h.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Year watermark */}
          <div style={{
            position: 'absolute', top: '-30px', right: '-20px', zIndex: 1,
            fontFamily: 'Schoolbell, cursive',
            color: 'rgba(255,255,255,0.05)',
            fontSize: '180px', lineHeight: 1,
            userSelect: 'none', pointerEvents: 'none',
          }}>
            2002
          </div>
        </div>

        {/* RIGHT — Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{
            backgroundColor: '#0D0806',
            padding: 'clamp(60px, 8vw, 96px) clamp(32px, 5vw, 72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '32px',
          }}>
            <div style={{ height: '2px', width: '32px', backgroundColor: '#009245' }} />
            <span style={{
              fontFamily: 'Kumbh Sans',
              color: '#009245',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.35em', textTransform: 'uppercase',
            }}>
              {t('nosotros.eyebrow')}
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#fff',
            fontSize: 'clamp(38px, 5vw, 60px)',
            lineHeight: 0.95, marginBottom: '24px',
          }}>
            {t('nosotros.titulo')}
          </h2>

          {/* Red accent line */}
          <div style={{ height: '3px', width: '56px', backgroundColor: '#D11335', marginBottom: '28px' }} />

          {/* Description */}
          <p style={{
            fontFamily: 'Kumbh Sans',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '15px', lineHeight: 1.8,
            marginBottom: '48px',
            maxWidth: '420px',
          }}>
            {t('nosotros.subtitulo')}
          </p>

          {/* Timeline */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '0',
            marginBottom: '48px',
            position: 'relative',
          }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '20px', top: '12px', bottom: '12px',
              width: '1px', backgroundColor: 'rgba(255,255,255,0.08)',
            }} />

            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  padding: '16px 0',
                }}
              >
                {/* Year dot */}
                <div style={{ flexShrink: 0, width: '40px', paddingTop: '4px', textAlign: 'center' }}>
                  <div style={{
                    width: '10px', height: '10px',
                    border: `2px solid ${i === 0 ? '#D11335' : i === MILESTONES.length - 1 ? '#FFFF00' : 'rgba(255,255,255,0.3)'}`,
                    borderRadius: '50%',
                    backgroundColor: i === 0 ? '#D11335' : 'transparent',
                    margin: '0 auto',
                  }} />
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{
                    fontFamily: 'Schoolbell, cursive',
                    color: i === 0 ? '#D11335' : i === MILESTONES.length - 1 ? '#FFFF00' : 'rgba(255,255,255,0.3)',
                    fontSize: '13px',
                    display: 'block',
                    marginBottom: '4px',
                  }}>
                    {m.year}
                  </span>
                  <span style={{
                    fontFamily: 'Kumbh Sans',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '13px', lineHeight: 1.5,
                  }}>
                    {t(m.keyText)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/#contacto"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#009245', color: '#fff',
              fontFamily: 'Kumbh Sans',
              fontWeight: 800, fontSize: '12px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '16px 28px',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              transition: 'background 0.2s',
            }}
            className="nosotros-cta"
          >
            {t('nosotros.cta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .nosotros-grid { grid-template-columns: 1fr !important; }
          .nosotros-grid > div:first-child { min-height: 400px !important; }
        }
        .nosotros-cta:hover { background: #007a38 !important; }
      `}</style>
    </section>
  );
}
