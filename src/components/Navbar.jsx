import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

/*
  NAVBAR — Inspirado en Goya.com
  ─────────────────────────────────────────────────────
  • Franja de 5 colores institucionales arriba (fija)
  • Fondo blanco, logo izquierda, links centro, CTA derecha
  • Al hacer scroll → sombra sutil
  • Mobile: hamburger → menú overlay
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
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── FRANJA SUPERIOR DE COLORES (5 px) ─── */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: '5px', zIndex: 1001,
          background: 'linear-gradient(90deg,#D11335 0%,#F15A24 20%,#FFFF00 40%,#B8EC3F 60%,#009245 80%,#603813 100%)',
        }}
      />

      {/* ── BARRA PRINCIPAL ───────────────────── */}
      <header
        style={{
          position: 'fixed', top: '5px', left: 0, right: 0, zIndex: 1000,
          backgroundColor: '#fff',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.10)' : '0 1px 0 rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px', margin: '0 auto',
            display: 'flex', alignItems: 'center',
            padding: '0 24px', height: '68px',
            gap: '24px',
          }}
        >
          {/* LOGO */}
          <a href="/#inicio" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/VERSIONES LOGO-02.png"
              alt="BellaVista"
              style={{ height: '44px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* NAV LINKS — desktop */}
          <nav
            style={{
              flex: 1, display: 'flex', justifyContent: 'center',
              gap: '4px', alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.key}
                href={link.href}
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontSize: '13px', fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#1A1A1A',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '2px',
                  transition: 'color 0.2s, background 0.2s',
                  position: 'relative',
                }}
                className="nav-link"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* DERECHA: LanguageSwitcher + CTA */}
          <div
            style={{
              flexShrink: 0, display: 'flex',
              alignItems: 'center', gap: '12px',
            }}
            className="desktop-cta"
          >
            <LanguageSwitcher />
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                backgroundColor: '#D11335', color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700, fontSize: '12px',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '10px 20px', borderRadius: '2px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
                whiteSpace: 'nowrap',
              }}
              className="cta-btn"
            >
              {t('navbar.cta')}
            </a>
          </div>

          {/* HAMBURGER — mobile */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
            className="hamburger"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', display: 'none',
              flexDirection: 'column', gap: '5px',
              marginLeft: 'auto',
            }}
          >
            {[0,1,2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block', width: '24px', height: '2px',
                  backgroundColor: '#1A1A1A', borderRadius: '2px',
                  transition: 'transform 0.25s, opacity 0.25s',
                  transformOrigin: 'center',
                  transform: open
                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                    : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                    : 'scaleX(0)'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── MENÚ MÓVIL OVERLAY ────────────────── */}
      <div
        style={{
          position: 'fixed', top: '73px', left: 0, right: 0, bottom: 0,
          backgroundColor: '#fff', zIndex: 999,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', flexDirection: 'column',
          padding: '32px 24px', gap: '8px',
          overflowY: 'auto',
        }}
      >
        {/* Franja de color en top del menú */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg,#D11335,#FFFF00,#009245)', borderRadius: '2px', marginBottom: '16px' }} />

        {NAV_LINKS.map(link => (
          <a
            key={link.key}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              fontSize: '22px', fontWeight: 700,
              color: '#1A1A1A', textDecoration: 'none',
              padding: '14px 0',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              transition: 'color 0.2s',
            }}
          >
            {t(link.key)}
          </a>
        ))}

        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <LanguageSwitcher />
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
              backgroundColor: '#D11335', color: '#fff',
              fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '16px', borderRadius: '2px', textDecoration: 'none',
            }}
          >
            {t('navbar.cta')}
          </a>
        </div>
      </div>

      {/* ── SPACER para compensar navbar fijo ── */}
      <div style={{ height: '73px' }} />

      <style>{`
        .nav-link:hover { color: #D11335 !important; background: rgba(209,19,53,0.06) !important; }
        .cta-btn:hover { background: #B00F2C !important; }
        @media (max-width: 860px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
