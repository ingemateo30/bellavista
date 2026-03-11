import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  CONTACTO — Dark dramatic CTA section
  ──────────────────────────────────────
  • Dark background with atmospheric image
  • Left: Large bold white headline
  • Right: Contact cards + CTA buttons
  • Clean, minimal, impactful
*/

export default function Contacto() {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      style={{
        position: 'relative',
        backgroundColor: '#0D0806',
        overflow: 'hidden',
      }}
    >
      {/* Background image dim */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/_DSC0063.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.08,
      }} />

      {/* Diagonal accent right side */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0,
        width: '4px',
        background: 'linear-gradient(to bottom, #009245, #B8EC3F, #FFFF00)',
      }} />

      <div
        className="contacto-grid"
        style={{
          maxWidth: '1360px', margin: '0 auto',
          padding: '96px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}
      >
        {/* LEFT — Headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ height: '2px', width: '32px', backgroundColor: '#D11335' }} />
            <span style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#D11335',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.4em', textTransform: 'uppercase',
            }}>
              {t('contacto.eyebrow')}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#fff',
            fontSize: 'clamp(48px, 7vw, 90px)',
            lineHeight: 0.9,
            margin: '0 0 32px',
            letterSpacing: '-0.02em',
          }}>
            {t('contacto.titulo')}
          </h2>

          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '15px', lineHeight: 1.75,
            maxWidth: '380px',
          }}>
            {t('contacto.subtitulo')}
          </p>
        </motion.div>

        {/* RIGHT — CTA + Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              backgroundColor: '#009245', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700,
              padding: '24px 32px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
            className="contacto-wa"
          >
            <div style={{
              width: '48px', height: '48px', flexShrink: 0,
              backgroundColor: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%',
            }}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px' }}>WhatsApp</p>
              <p style={{ fontSize: '12px', opacity: 0.75, margin: 0, fontWeight: 400 }}>+57 318 455 0936</p>
            </div>
            <svg style={{ marginLeft: 'auto' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Email CTA */}
          <a
            href="mailto:contactenos@panelabellavista.com"
            style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700,
              padding: '24px 32px',
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            className="contacto-email"
          >
            <div style={{
              width: '48px', height: '48px', flexShrink: 0,
              backgroundColor: 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="1"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px' }}>
                {t('contacto.email')}
              </p>
              <p style={{ fontSize: '11px', opacity: 0.55, margin: 0, fontWeight: 400 }}>contactenos@panelabellavista.com</p>
            </div>
            <svg style={{ marginLeft: 'auto' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Location info */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            padding: '20px 32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            marginTop: '8px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D11335" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '13px',
            }}>
              San Gil, Santander, Colombia
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contacto-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .contacto-wa:hover { background: #007a38 !important; transform: translateX(4px); }
        .contacto-email:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.2) !important; }
      `}</style>
    </section>
  );
}
