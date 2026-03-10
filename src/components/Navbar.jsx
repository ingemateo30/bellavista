import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

/*
  PALETA — Manual de Identidad Panela BellaVista
  ─────────────────────────────────────────────
  Amarillo principal : #F4E800
  Rojo               : #E8173A
  Verde oscuro       : #1B7A2F
  Verde limón        : #8BC420
  Marrón             : #5C2D0A
  Blanco             : #FFFFFF

  TIPOGRAFÍA
  ──────────
  Schoolbell Regular → títulos / logo (Google Fonts)
  Kumbh Sans         → texto corrido / links
*/

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const navHref = (hash) => (isHome ? hash : `/${hash}`);

  const linkStyle = {
    fontFamily: 'Kumbh Sans, sans-serif',
    color: '#5C2D0A',
    fontWeight: '600',
    fontSize: '0.95rem',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    transition: 'color 0.2s',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
  };

  return (
    <>
      {/* Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Schoolbell&family=Kumbh+Sans:wght@400;600;700&display=swap');

        .bv-link:hover {
          color: #E8173A !important;
          border-bottom-color: #E8173A !important;
        }
        .bv-link-mobile:hover {
          background-color: #E8173A !important;
          color: #F4E800 !important;
        }
        .bv-cta:hover {
          background-color: #1B7A2F !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(27,122,47,0.45) !important;
        }
        .bv-logo:hover {
          transform: scale(1.08);
        }
        .bv-logo {
          transition: transform 0.25s ease;
        }
      `}</style>

      {/* Franja superior — verde oscuro */}
      <div style={{ position: 'fixed', top: 0, width: '100%', height: '6px', backgroundColor: '#1B7A2F', zIndex: 50 }} />

      <nav style={{
        position: 'fixed',
        top: '6px',
        width: '100%',
        backgroundColor: '#F4E800',
        borderBottom: '4px solid #E8173A',
        zIndex: 50,
        boxShadow: '0 3px 14px rgba(92,45,10,0.18)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '88px' }}>

            {/* Logo */}
            <a href={navHref('#inicio')} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/VERSIONES LOGO-02.png"
                alt="Panela BellaVista"
                className="bv-logo"
                style={{ height: '142px', width: 'auto' }}
              />
            </a>

            {/* Links desktop */}
            <div className="bv-desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'center' }}>
              {[
                { key: 'navbar.inicio',      hash: '#inicio' },
                { key: 'navbar.productos',   hash: '#productos' },
                { key: 'navbar.exportacion', hash: '#exportacion' },
                { key: 'navbar.nosotros',    hash: '#nosotros' },
                { key: 'navbar.contacto',    hash: '#contacto' },
              ].map(({ key, hash }) => (
                <a
                  key={key}
                  href={navHref(hash)}
                  className="bv-link"
                  style={linkStyle}
                >
                  {t(key)}
                </a>
              ))}
            </div>

            {/* CTA + idioma — desktop */}
            <div className="bv-desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <LanguageSwitcher />
              <a
                href={navHref('#contacto')}
                className="bv-cta"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#E8173A',
                  color: '#ffffff',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 8px rgba(232,23,58,0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('navbar.cotizar')}
              </a>
            </div>

            {/* Botón hamburguesa — mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bv-hamburger"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#5C2D0A',
                padding: '4px',
              }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Menú mobile */}
        {isOpen && (
          <div style={{
            backgroundColor: '#F4E800',
            borderTop: '2px solid #E8173A',
          }}>
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                <LanguageSwitcher />
              </div>
              {[
                { key: 'navbar.inicio',      hash: '#inicio' },
                { key: 'navbar.productos',   hash: '#productos' },
                { key: 'navbar.exportacion', hash: '#exportacion' },
                { key: 'navbar.nosotros',    hash: '#nosotros' },
                { key: 'navbar.contacto',    hash: '#contacto' },
              ].map(({ key, hash }) => (
                <a
                  key={key}
                  href={navHref(hash)}
                  className="bv-link-mobile"
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: 'Kumbh Sans, sans-serif',
                    fontWeight: '600',
                    color: '#5C2D0A',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'background 0.15s',
                  }}
                >
                  {t(key)}
                </a>
              ))}
              <a
                href={navHref('#contacto')}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginTop: '8px',
                  backgroundColor: '#E8173A',
                  color: '#FFFFFF',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: '700',
                  padding: '12px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                {t('navbar.cotizar')}
              </a>
            </div>
          </div>
        )}

        {/* Responsive styles via <style> */}
        <style>{`
          @media (max-width: 768px) {
            .bv-desktop-menu,
            .bv-desktop-actions { display: none !important; }
            .bv-hamburger { display: block !important; }
          }
        `}</style>
      </nav>

      {/* Espaciador */}
      <div style={{ height: '94px' }} />
    </>
  );
}