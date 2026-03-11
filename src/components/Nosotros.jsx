import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  NOSOTROS — Split layout estilo editorial
  ─────────────────────────────────────────
  • Verde (#009245) fondo a la izquierda con imagen
  • Blanco a la derecha con la historia
  • Minimal, mucho espacio en blanco
*/

const PASOS = [
  { num: '01', key: 'nosotros.paso1' },
  { num: '02', key: 'nosotros.paso2' },
  { num: '03', key: 'nosotros.paso3' },
  { num: '04', key: 'nosotros.paso4' },
];

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <section id="nosotros" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '640px' }}
        className="nosotros-grid"
      >
        {/* PANEL IZQUIERDO — Imagen sobre fondo verde */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#009245',
            overflow: 'hidden',
            minHeight: '500px',
          }}
        >
          <img
            src="/banner1.png"
            alt="BellaVista campo"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block', opacity: 0.55,
            }}
          />
          {/* Badge encima de imagen */}
          <div style={{
            position: 'absolute', bottom: '40px', left: '40px',
            backgroundColor: '#FFFF00',
            padding: '14px 20px',
          }}>
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#1A1A1A', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              margin: 0,
            }}>
              {t('nosotros.badge')}
            </p>
          </div>
        </div>

        {/* PANEL DERECHO — Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          style={{
            padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow */}
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#009245', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            marginBottom: '16px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#009245', flexShrink: 0 }} />
            {t('nosotros.eyebrow')}
          </p>

          {/* Título */}
          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#1A1A1A',
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.0, marginBottom: '24px',
          }}>
            {t('nosotros.titulo')}
          </h2>

          {/* Línea roja */}
          <div style={{ height: '3px', width: '48px', backgroundColor: '#D11335', marginBottom: '24px' }} />

          {/* Descripción */}
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#444', fontSize: '15px', lineHeight: 1.75,
            marginBottom: '40px',
          }}>
            {t('nosotros.subtitulo')}
          </p>

          {/* 4 pasos rápidos */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            {PASOS.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#D11335', fontSize: '20px',
                  lineHeight: 1, flexShrink: 0, marginTop: '2px',
                }}>
                  {p.num}
                </span>
                <span style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#333', fontSize: '13px', lineHeight: 1.5, fontWeight: 500,
                }}>
                  {t(p.key)}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/#contacto"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#009245', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '14px 28px', borderRadius: '2px',
              textDecoration: 'none', alignSelf: 'flex-start',
            }}
          >
            {t('nosotros.cta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nosotros-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
