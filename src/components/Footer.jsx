import { useTranslation } from 'react-i18next';
import WaveDivider from './WaveDivider';

const NAV_LINKS = [
  { href: '/#inicio',    labelKey: 'nav.inicio' },
  { href: '/#categorias',labelKey: 'nav.categorias' },
  { href: '/#productos', labelKey: 'nav.productos' },
  { href: '/#nosotros',  labelKey: 'nav.nosotros' },
  { href: '/#contacto',  labelKey: 'nav.contacto' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: '#5C2D0A' }}>
      {/* Brand color stripe at top */}
      <div style={{ display: 'flex', height: '6px' }}>
        <div style={{ flex: 1, backgroundColor: '#E8173A' }} />
        <div style={{ flex: 1, backgroundColor: '#F4E800' }} />
        <div style={{ flex: 1, backgroundColor: '#1B7A2F' }} />
        <div style={{ flex: 1, backgroundColor: '#8BC420' }} />
      </div>

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '56px 32px 32px' }}>
        {/* Main footer grid */}
        <div className="footer-bv-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#F4E800',
                fontSize: '32px', lineHeight: 1,
              }}>
                Panela
              </span>
              <span style={{
                fontFamily: 'Schoolbell, cursive',
                color: '#E8173A',
                fontSize: '32px', lineHeight: 1,
              }}>
                BellaVista
              </span>
            </div>
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(244,232,0,0.55)',
              fontSize: '13px', lineHeight: 1.75,
              marginBottom: '24px', maxWidth: '280px',
            }}>
              {t('footer.descripcion') || 'Panela artesanal colombiana desde los campos de Santander. Calidad, tradición y sabor natural desde 2002.'}
            </p>

            {/* Social / WhatsApp */}
            <a href="https://wa.me/573184550936"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#1B7A2F', color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
                fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '10px 18px', textDecoration: 'none', borderRadius: '3px',
              }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#F4E800', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              {t('footer.navegacion') || 'Navegación'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map((link, i) => (
                <li key={i}>
                  <a href={link.href} style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: 'rgba(244,232,0,0.6)',
                    fontSize: '13px', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="footer-link-bv">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#F4E800', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              {t('footer.contacto') || 'Contacto'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '📍', label: 'Santander, Colombia' },
                { icon: '📱', label: '+57 318 455 0936' },
                { icon: '✉️', label: 'info@panelabellavista.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                  <span style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: 'rgba(244,232,0,0.55)',
                    fontSize: '13px', lineHeight: 1.5,
                  }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Export destinations */}
            <div style={{ marginTop: '24px' }}>
              <p style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: 'rgba(244,232,0,0.4)',
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.25em', textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                Exportamos a
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['USA', 'Canadá', 'España', 'Aruba'].map((country, i) => (
                  <span key={i} style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    color: '#5C2D0A',
                    fontSize: '9px', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    backgroundColor: '#F4E800',
                    padding: '3px 8px', borderRadius: '2px',
                  }}>
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(244,232,0,0.12)',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(244,232,0,0.35)',
            fontSize: '11px',
          }}>
            © {new Date().getFullYear()} Panela BellaVista · Santander, Colombia · {t('footer.derechos') || 'Todos los derechos reservados'}
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(244,232,0,0.25)', fontSize: '10px' }}>
              100% Artesanal
            </span>
            <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(244,232,0,0.25)', fontSize: '10px' }}>
              ·
            </span>
            <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(244,232,0,0.25)', fontSize: '10px' }}>
              Desde 2002
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link-bv:hover { color: #F4E800 !important; }
        @media (max-width: 860px) {
          .footer-bv-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-bv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
