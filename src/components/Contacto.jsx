import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  CONTACTO — Clean, minimal
  ─────────────────────────
  • Fondo blanco
  • Título centrado
  • 2 botones grandes: WhatsApp (verde) y Email (rojo)
  • Info de ubicación
*/

export default function Contacto() {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      style={{ backgroundColor: '#fff', padding: '96px 40px', borderTop: '1px solid rgba(0,0,0,0.06)' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#D11335', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {t('contacto.eyebrow')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#1A1A1A',
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1, marginBottom: '16px',
          }}
        >
          {t('contacto.titulo')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#666', fontSize: '16px', lineHeight: 1.7,
            marginBottom: '48px',
          }}
        >
          {t('contacto.subtitulo')}
        </motion.p>

        {/* Botones de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#009245', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700, fontSize: '13px',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '18px 36px', borderRadius: '2px',
              textDecoration: 'none', minWidth: '220px', justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:contactenos@panelabellavista.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: 'transparent', color: '#1A1A1A',
              border: '2px solid #1A1A1A',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700, fontSize: '13px',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '16px 36px', borderRadius: '2px',
              textDecoration: 'none', minWidth: '220px', justifyContent: 'center',
            }}
            className="email-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="4" width="20" height="16" rx="1"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
            {t('contacto.email')}
          </a>
        </motion.div>

        {/* Ubicación */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap',
            paddingTop: '40px',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {[
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D11335" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              text: 'San Gil, Santander, Colombia',
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D11335" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>,
              text: '+57 318 455 0936',
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D11335" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 7l10 7 10-7"/></svg>,
              text: 'contactenos@panelabellavista.com',
            },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.icon}
              <span style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#555', fontSize: '13px',
              }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .email-btn:hover { background: #1A1A1A !important; color: #fff !important; }
      `}</style>
    </section>
  );
}
