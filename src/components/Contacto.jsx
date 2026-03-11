import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Contacto() {
  const { t } = useTranslation();
  return (
    <section id="contacto" style={{ overflow: 'hidden' }}>

      {/* Ola de entrada */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', height: '80px', backgroundColor: '#B8EC3F' }}>
        <path d="M0,80 Q360,0 720,40 Q1080,80 1440,0 L1440,80 Z" fill="#fff" />
      </svg>

      {/* Bloque principal — lima */}
      <div style={{ backgroundColor: '#B8EC3F', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#603813',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            {t('contacto.eyebrow', 'COLOMBIA · EXPORTACIÓN · B2B')}
          </motion.p>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#603813',
              fontSize: 'clamp(34px, 6vw, 68px)',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            {t('contacto.titulo')}
          </motion.h2>

          {/* Línea */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              height: '3px',
              width: '80px',
              backgroundColor: '#D11335',
              margin: '0 auto 28px',
              transformOrigin: 'center',
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(96,56,19,0.8)',
              fontSize: '16px',
              lineHeight: 1.65,
              marginBottom: '40px',
              maxWidth: '520px',
              margin: '0 auto 40px',
            }}
          >
            {t('contacto.subtitulo')}
          </motion.p>

          {/* Botones grandes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 16px 32px rgba(209,19,53,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#D11335',
                color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              {t('contacto.cotizarWhatsapp')}
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:contactenos@panelabellavista.com"
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 16px 32px rgba(96,56,19,0.2)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#603813',
                color: '#FFFF00',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {t('contacto.contactoEmail')}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Ola de salida */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', height: '80px', backgroundColor: '#603813' }}>
        <path d="M0,0 Q360,80 720,40 Q1080,0 1440,80 L1440,0 Z" fill="#B8EC3F" />
      </svg>
    </section>
  );
}
