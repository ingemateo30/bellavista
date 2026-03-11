import { useTranslation } from 'react-i18next';

/*
  FOOTER — Sophisticated dark with rainbow bar
  ─────────────────────────────────────────────
  • #0D0806 background
  • Rainbow gradient bar top
  • 3 columns: Brand | Nav | Contact
  • Product category tags
  • Social icons
  • Copyright bar
*/

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { key: 'navbar.inicio',      href: '/#inicio'    },
    { key: 'navbar.productos',   href: '/#productos' },
    { key: 'navbar.exportacion', href: '/#exportar'  },
    { key: 'navbar.nosotros',    href: '/#nosotros'  },
    { key: 'navbar.contacto',    href: '/#contacto'  },
  ];

  return (
    <footer style={{ backgroundColor: '#080503', color: '#fff' }}>
      {/* Rainbow bar */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(90deg,#D11335 0%,#F15A24 20%,#FFFF00 40%,#B8EC3F 60%,#009245 80%,#603813 100%)',
      }} />

      {/* Main footer body */}
      <div
        className="footer-main-grid"
        style={{
          maxWidth: '1360px', margin: '0 auto',
          padding: '72px 40px 56px',
          display: 'grid',
          gridTemplateColumns: '2.5fr 1fr 1.5fr',
          gap: '56px',
        }}
      >
        {/* Col 1 — Brand */}
        <div>
          <img
            src="/VERSIONES LOGO-02.png"
            alt="BellaVista"
            style={{
              height: '48px', width: 'auto',
              marginBottom: '20px',
              filter: 'brightness(0) invert(1)',
            }}
          />
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '13px', lineHeight: 1.8,
            marginBottom: '28px', maxWidth: '300px',
          }}>
            {t('footer.descripcion')}
          </p>

          {/* Product category tags */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {[
              { label: 'Panela', color: '#D11335' },
              { label: 'Café',   color: '#009245' },
              { label: 'Bebidas', color: '#F15A24' },
            ].map(tag => (
              <span key={tag.label} style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                color: '#fff', backgroundColor: tag.color,
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '4px 10px',
              }}>
                {tag.label}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { href: 'https://www.instagram.com/panelabellavista', label: 'Instagram',
                path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19h11a2 2 0 002-2V7a2 2 0 00-2-2h-11a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { href: 'https://www.facebook.com/panelabellavista', label: 'Facebook',
                path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social"
                style={{
                  width: '38px', height: '38px',
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <h4 style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            {t('footer.navTitulo')}
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className="footer-nav-link"
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '13px', textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontWeight: 500,
                }}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            {t('footer.contactoTitulo')}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                color: '#D11335',
                text: 'San Gil, Santander, Colombia',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              },
              {
                color: '#009245',
                text: '+57 318 455 0936',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>,
              },
              {
                color: '#F15A24',
                text: 'contactenos@panelabellavista.com',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 7l10 7 10-7"/></svg>,
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: item.color, marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                <span style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '13px', lineHeight: 1.5,
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* WhatsApp quick link */}
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '28px',
              backgroundColor: '#009245', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif',
              fontWeight: 700, fontSize: '11px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '12px 20px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            className="footer-wa-link"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Cotizar ahora
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1360px', margin: '0 auto',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{
          fontFamily: 'Kumbh Sans, sans-serif',
          color: 'rgba(255,255,255,0.2)',
          fontSize: '12px',
        }}>
          © {new Date().getFullYear()} Productos BellaVista · San Gil, Colombia
        </p>
        <p style={{
          fontFamily: 'Kumbh Sans, sans-serif',
          color: 'rgba(255,255,255,0.15)',
          fontSize: '11px',
        }}>
          panelabellavista.com
        </p>
      </div>

      <style>{`
        .footer-nav-link:hover { color: #FFFF00 !important; }
        .footer-social:hover { background: #D11335 !important; }
        .footer-wa-link:hover { background: #007a38 !important; }
        @media (max-width: 900px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-main-grid > div:first-child { grid-column: 1 / -1 !important; }
        }
        @media (max-width: 560px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
