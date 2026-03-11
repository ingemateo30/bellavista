import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

/*
  NAVBAR — Fondo amarillo #F4E800, franja verde oscuro arriba, borde rojo abajo
  Basado exactamente en el manual de identidad BellaVista
*/

const NAV_LINKS = [
  { key: 'navbar.inicio',      href: '/#inicio'    },
  { key: 'navbar.productos',   href: '/#productos' },
  { key: 'navbar.exportacion', href: '/#exportar'  },
  { key: 'navbar.nosotros',    href: '/#nosotros'  },
  { key: 'navbar.contacto',    href: '/#contacto'  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        backgroundColor: '#F4E800',
        boxShadow: scrolled ? '0 4px 24px rgba(92,45,10,0.18)' : '0 2px 0 rgba(92,45,10,0.08)',
        transition: 'box-shadow 0.3s',
      }}>
        {/* Franja verde oscuro — 6px arriba */}
        <div style={{ height: '6px', backgroundColor: '#1B7A2F' }} />

        {/* Cuerpo principal */}
        <div style={{
          maxWidth: '1360px', margin: '0 auto',
          padding: '0 32px',
          display: 'flex', alignItems: 'center',
          height: '68px', gap: '20px',
        }}>
          {/* LOGO */}
          <a href="/#inicio" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textDecoration: 'none', flexShrink: 0, lineHeight: 1,
            transition: 'transform 0.25s',
          }} className="logo-bv">
            <img
              src="/VERSIONES LOGO-02.png"
              alt="Panela BellaVista"
              style={{ height: '44px', width: 'auto' }}
            />
          </a>

          {/* NAV LINKS — desktop */}
          <nav style={{
            flex: 1, display: 'flex', justifyContent: 'center',
            gap: '4px', alignItems: 'center',
          }} className="desktop-nav-bv">
            {NAV_LINKS.map(link => (
              <a key={link.key} href={link.href}
                className="nav-link-bv"
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontSize: '12px', fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: '#5C2D0A',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  textTransform: 'uppercase',
                }}>
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* DERECHA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}
            className="desktop-cta-bv">
            <LanguageSwitcher />
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              className="btn-red-bv"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                backgroundColor: '#E8173A', color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '11px 20px',
                textDecoration: 'none', borderRadius: '3px',
                whiteSpace: 'nowrap',
              }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              {t('navbar.cta')}
            </a>
          </div>

          {/* HAMBURGER */}
          <button onClick={() => setOpen(o => !o)} aria-label="Menú"
            className="hamburger-bv"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', display: 'none',
              flexDirection: 'column', gap: '5px', marginLeft: 'auto',
            }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                height: '2px', borderRadius: '2px',
                backgroundColor: '#5C2D0A',
                transition: 'transform 0.3s, opacity 0.3s, width 0.3s',
                transformOrigin: 'center',
                width: open && i === 1 ? '0px' : i === 2 ? '18px' : '26px',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(6px,6px)'
                  : i === 2 ? 'rotate(-45deg) translate(4px,-5px)'
                  : 'none' : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>

        {/* Borde rojo — 4px abajo */}
        <div style={{ height: '4px', backgroundColor: '#E8173A' }} />
      </header>

      {/* MENÚ MÓVIL */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#F4E800', zIndex: 999,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.77,0,0.18,1)',
        display: 'flex', flexDirection: 'column',
        padding: '100px 40px 48px',
        overflowY: 'auto',
      }}>
        <div style={{ height: '6px', backgroundColor: '#1B7A2F', position: 'absolute', top: 0, left: 0, right: 0 }} />
        {NAV_LINKS.map((link, i) => (
          <a key={link.key} href={link.href} onClick={() => setOpen(false)}
            style={{
              fontFamily: 'Schoolbell, cursive',
              fontSize: 'clamp(36px, 8vw, 52px)',
              color: i % 2 === 0 ? '#5C2D0A' : '#E8173A',
              textDecoration: 'none',
              padding: '12px 0',
              borderBottom: '2px solid rgba(92,45,10,0.12)',
              display: 'block', lineHeight: 1.1,
            }}>{t(link.key)}</a>
        ))}
        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <LanguageSwitcher />
          <a href="https://wa.me/573184550936" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
              backgroundColor: '#E8173A', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '18px', textDecoration: 'none', borderRadius: '3px',
            }}>
            {t('navbar.cta')}
          </a>
        </div>
      </div>

      <div style={{ height: '78px' }} />

      <style>{`
        .logo-bv:hover { transform: scale(1.05) !important; }
        @media (max-width: 860px) {
          .desktop-nav-bv, .desktop-cta-bv { display: none !important; }
          .hamburger-bv { display: flex !important; }
        }
      `}</style>
    </>
  );
}
