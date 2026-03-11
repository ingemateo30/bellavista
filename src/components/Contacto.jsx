import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const CHANNELS = [
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    labelKey: 'contacto.whatsapp',
    value: '+57 318 455 0936',
    href: 'https://wa.me/573184550936?text=Hola%2C%20quiero%20información%20sobre%20productos%20BellaVista.',
    color: '#1B7A2F',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    labelKey: 'contacto.email',
    value: 'info@panelabellavista.com',
    href: 'mailto:info@panelabellavista.com',
    color: '#E8173A',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    labelKey: 'contacto.ubicacion',
    value: 'Santander, Colombia',
    href: 'https://maps.google.com/?q=Santander,Colombia',
    color: '#8BC420',
  },
];

export default function Contacto() {
  const { t } = useTranslation();

  return (
    <section id="contacto" style={{ backgroundColor: '#F4E800', paddingTop: '0' }}>
      {/* Heading strip */}
      <div style={{ backgroundColor: '#1B7A2F', padding: '28px 32px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Schoolbell, cursive',
          color: '#F4E800',
          fontSize: 'clamp(28px, 5vw, 52px)',
          lineHeight: 1, margin: 0,
        }}>
          {t('contacto.titulo') || 'Contáctanos'}
        </h2>
      </div>

      <div style={{ padding: '72px 32px 64px', maxWidth: '1360px', margin: '0 auto' }}>
        <div className="contacto-bv-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'start',
        }}>
          {/* Left: text + channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ height: '3px', width: '32px', backgroundColor: '#E8173A' }} />
              <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: '#E8173A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {t('contacto.eyebrow') || 'Hablemos'}
              </span>
            </div>
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif', color: '#5C2D0A',
              fontSize: '15px', lineHeight: 1.8, marginBottom: '36px', opacity: 0.85,
            }}>
              {t('contacto.descripcion') || 'Estamos listos para atenderte. Escríbenos para cotizar, preguntar sobre nuestros productos o coordinar exportaciones.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {CHANNELS.map((ch, i) => (
                <motion.a
                  key={i}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    backgroundColor: '#fff', padding: '16px 20px', borderRadius: '4px',
                    borderLeft: `4px solid ${ch.color}`,
                    textDecoration: 'none',
                    boxShadow: '0 2px 10px rgba(92,45,10,0.08)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  className="contacto-card-bv"
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    backgroundColor: ch.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {ch.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Kumbh Sans, sans-serif', color: ch.color, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '3px' }}>
                      {t(ch.labelKey)}
                    </div>
                    <div style={{ fontFamily: 'Schoolbell, cursive', color: '#5C2D0A', fontSize: '18px', lineHeight: 1 }}>
                      {ch.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16,1,0.3,1] }}
            style={{
              backgroundColor: '#5C2D0A',
              borderRadius: '8px',
              padding: 'clamp(32px, 5vw, 56px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative circles */}
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', backgroundColor: '#E8173A', opacity: 0.12 }} />
            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#F4E800', opacity: 0.1 }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(244,232,0,0.6)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
                {t('contacto.ctaEyebrow') || 'Cotización Rápida'}
              </div>
              <h3 style={{
                fontFamily: 'Schoolbell, cursive', color: '#F4E800',
                fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.05, marginBottom: '20px',
              }}>
                {t('contacto.ctaTitulo') || '¿Listo para pedir?'}
              </h3>
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(244,232,0,0.7)',
                fontSize: '13px', lineHeight: 1.7, marginBottom: '28px',
              }}>
                {t('contacto.ctaDescripcion') || 'Escríbenos por WhatsApp y recibe una cotización personalizada para tu negocio.'}
              </p>

              <a href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  backgroundColor: '#F4E800', color: '#5C2D0A',
                  fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
                  fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '18px 32px', textDecoration: 'none', borderRadius: '3px',
                  width: '100%', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                className="contacto-cta-bv"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                {t('contacto.ctaBoton') || 'Cotizar por WhatsApp'}
              </a>

              <div style={{ marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                {['Respuesta rápida', 'Sin compromiso', 'Exportación'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#8BC420' }} />
                    <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(244,232,0,0.5)', fontSize: '10px', fontWeight: 600 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveDivider fromColor="#F4E800" toColor="#5C2D0A" height={72} />

      <style>{`
        .contacto-card-bv:hover { transform: translateX(4px); box-shadow: 0 4px 20px rgba(92,45,10,0.14) !important; }
        .contacto-cta-bv:hover { background-color: #E8173A !important; color: #fff !important; }
        @media (max-width: 860px) {
          .contacto-bv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
