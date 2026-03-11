import { useTranslation } from 'react-i18next';

/*
  FOOTER — Oscuro, limpio, profesional (estilo Goya)
  ────────────────────────────────────────────────────
  • Fondo oscuro (#1A1A1A) con franja de colores al tope
  • 3 columnas: logo + sobre nosotros | navegación | contacto
  • Franja de copyright al fondo
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
    <footer style={{ backgroundColor: '#111', color: '#fff' }}>
      {/* Franja de colores institucionales */}
      <div style={{
        height: '5px',
        background: 'linear-gradient(90deg,#D11335 0%,#F15A24 20%,#FFFF00 40%,#B8EC3F 60%,#009245 80%,#603813 100%)',
      }} />

      {/* Cuerpo del footer */}
      <div
        style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '72px 40px 56px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '56px',
        }}
        className="footer-grid"
      >
        {/* Columna 1 — Logo + descripción */}
        <div>
          <img
            src="/VERSIONES LOGO-02.png"
            alt="BellaVista"
            style={{ height: '48px', width: 'auto', marginBottom: '20px', filter: 'brightness(0) invert(1)' }}
          />
          <p style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '13px', lineHeight: 1.75, marginBottom: '28px',
            maxWidth: '300px',
          }}>
            {t('footer.descripcion')}
          </p>
          {/* Tags de productos */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { label: 'Panela', color: '#D11335' },
              { label: 'Café',   color: '#009245' },
              { label: 'Bebidas', color: '#F15A24' },
            ].map(tag => (
              <span
                key={tag.label}
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: '#fff',
                  backgroundColor: tag.color,
                  fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '4px 10px', borderRadius: '2px',
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Columna 2 — Navegación */}
        <div>
          <h4 style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#fff', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            {t('footer.navTitulo')}
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '13px', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="footer-link"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
        </div>

        {/* Columna 3 — Contacto */}
        <div>
          <h4 style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#fff', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            {t('footer.contactoTitulo')}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: '📍', text: 'San Gil, Santander, Colombia' },
              { icon: '📞', text: '+57 318 455 0936' },
              { icon: '✉️', text: 'contactenos@panelabellavista.com' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                <span style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: 1.5,
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Redes sociales */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
            {[
              { href: 'https://www.instagram.com/panelabellavista', label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19h11a2 2 0 002-2V7a2 2 0 00-2-2h-11a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { href: 'https://www.facebook.com/panelabellavista', label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: '36px', height: '36px',
                  backgroundColor: 'rgba(255,255,255,0.10)',
                  borderRadius: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                className="social-icon"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 40px',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}>
        <p style={{
          fontFamily: 'Kumbh Sans, sans-serif',
          color: 'rgba(255,255,255,0.35)',
          fontSize: '12px', textAlign: 'center',
        }}>
          © {new Date().getFullYear()} Productos BellaVista · San Gil, Colombia
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: #FFFF00 !important; }
        .social-icon:hover { background: #D11335 !important; }
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
