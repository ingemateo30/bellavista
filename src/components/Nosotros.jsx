import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

export default function Nosotros() {
  const { t } = useTranslation();
  return (
    <section id="nosotros" style={{ backgroundColor: '#F4E800', paddingTop: '0' }}>
      {/* DEL CAMPO A TU MESA — heading strip */}
      <div style={{ backgroundColor: '#1B7A2F', padding: '28px 32px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Schoolbell, cursive',
          color: '#F4E800',
          fontSize: 'clamp(28px, 5vw, 52px)',
          lineHeight: 1, margin: 0, letterSpacing: '0.02em',
        }}>
          {t('nosotros.titulo') || 'Del Campo a Tu Mesa'}
        </h2>
      </div>

      {/* Main content */}
      <div style={{
        backgroundColor: '#F4E800',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '1360px', margin: '0 auto',
        gap: '0',
      }} className="nosotros-bv-grid">
        {/* Photo */}
        <div style={{ position: 'relative', minHeight: '480px', overflow: 'hidden' }}>
          <img src="/SINR0002.jpg" alt="BellaVista" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            position: 'absolute', inset: 0,
          }}/>
          {/* Mountain overlay at bottom */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
            <svg viewBox="0 0 600 80" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
              <path d="M0,40 C100,15 200,55 300,35 C400,15 500,55 600,30 L600,80 L0,80 Z" fill="rgba(27,122,47,0.7)"/>
              <path d="M0,52 C150,30 300,60 450,45 C550,35 580,55 600,48 L600,80 L0,80 Z" fill="rgba(244,232,0,0.85)"/>
              <path d="M0,65 C200,50 400,70 600,58 L600,80 L0,80 Z" fill="rgba(92,45,10,0.75)"/>
            </svg>
          </div>
          {/* Year badge */}
          <div style={{
            position: 'absolute', top: '24px', left: '24px',
            backgroundColor: '#E8173A', borderRadius: '50%',
            width: '80px', height: '80px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'Kumbh Sans', color: '#fff', fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Desde</span>
            <span style={{ fontFamily: 'Schoolbell, cursive', color: '#F4E800', fontSize: '22px', lineHeight: 1 }}>2002</span>
          </div>
        </div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          style={{ padding: 'clamp(40px, 6vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ height: '3px', width: '32px', backgroundColor: '#E8173A' }} />
            <span style={{ fontFamily: 'Kumbh Sans', color: '#E8173A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {t('nosotros.eyebrow')}
            </span>
          </div>

          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif', color: '#5C2D0A',
            fontSize: '15px', lineHeight: 1.8, marginBottom: '32px', opacity: 0.85,
          }}>
            {t('nosotros.subtitulo')}
          </p>

          {/* 4 milestones */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
            {[
              { year: '2002', key: 'nosotros.paso1', color: '#E8173A' },
              { year: '2010', key: 'nosotros.paso2', color: '#1B7A2F' },
              { year: '2018', key: 'nosotros.paso3', color: '#8BC420' },
              { year: '2024', key: 'nosotros.paso4', color: '#5C2D0A' },
            ].map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
              >
                <div style={{
                  flexShrink: 0, width: '44px', height: '28px',
                  backgroundColor: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '3px',
                }}>
                  <span style={{ fontFamily: 'Schoolbell, cursive', color: '#fff', fontSize: '13px' }}>{m.year}</span>
                </div>
                <span style={{ fontFamily: 'Kumbh Sans', color: '#5C2D0A', fontSize: '13px', lineHeight: 1.55, paddingTop: '4px', opacity: 0.8 }}>
                  {t(m.key)}
                </span>
              </motion.div>
            ))}
          </div>

          <a href="/#contacto"
            className="btn-green-bv"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start',
              backgroundColor: '#1B7A2F', color: '#fff',
              fontFamily: 'Kumbh Sans', fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '14px 24px', textDecoration: 'none', borderRadius: '3px',
            }}>
            {t('nosotros.cta')}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <WaveDivider fromColor="#F4E800" toColor="#F4E800" height={72} />

      <style>{`
        @media (max-width: 860px) {
          .nosotros-bv-grid { grid-template-columns: 1fr !important; }
          .nosotros-bv-grid > div:first-child { min-height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
