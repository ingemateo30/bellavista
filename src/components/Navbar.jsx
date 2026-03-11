import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

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
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isTransparent = !scrolled && !open;

  return (
    <>
      {/* ── BARRA PRINCIPAL ───────────────────── */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          backgroundColor: isTransparent ? 'transparent' : '#fff',
          backdropFilter: isTransparent ? 'none' : 'blur(12px)',
          boxShadow: scrolled ? '0 2px 32px rgba(0,0,0,0.14)' : 'none',
          transition: 'background 0.4s ease, box-shadow 0.4s ease',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(0,0,0,0.06)',
        }}
      >
        {/* Rainbow accent bar at very top */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(90deg,#D11335 0%,#F15A24 20%,#FFFF00 40%,#B8EC3F 60%,#009245 80%,#603813 100%)',
        }} />

        <div
          style={{
            maxWidth: '1360px', margin: '0 auto',
            display: 'flex', alignItems: 'center',
            padding: '0 32px', height: '72px',
            gap: '24px',
          }}
        >
          {/* LOGO */}
          <a href="/#inicio" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', textDecoration: 'none', zIndex: 2 }}>
            <img
              src="/VERSIONES LOGO-02.png"
              alt="BellaVista"
              style={{
                height: '46px', width: 'auto', display: 'block',
                filter: isTransparent ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.4s ease',
              }}
            />
          </a>

          {/* NAV LINKS — desktop */}
          <nav
            style={{
              flex: 1, display: 'flex', justifyContent: 'center',
              gap: '6px', alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.key}
                href={link.href}
                className="nav-link-new"
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontSize: '12px', fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: isTransparent ? 'rgba(255,255,255,0.85)' : '#1A1A1A',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* DERECHA: LanguageSwitcher + CTA */}
          <div
            style={{
              flexShrink: 0, display: 'flex',
              alignItems: 'center', gap: '16px',
            }}
            className="desktop-cta"
          >
            <div style={{ filter: isTransparent ? 'invert(1) brightness(2)' : 'none', transition: 'filter 0.4s' }}>
              <LanguageSwitcher />
            </div>
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                backgroundColor: '#FFFF00', color: '#0D0806',
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 800, fontSize: '11px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '11px 22px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                transition: 'background 0.2s, transform 0.15s',
              }}
              className="navbar-cta"
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
              flexDirection: 'column', gap: '6px',
              marginLeft: 'auto',
            }}
          >
            {[0,1,2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: '2px',
                  backgroundColor: isTransparent ? '#fff' : '#0D0806',
                  borderRadius: '2px',
                  transition: 'transform 0.3s, opacity 0.3s, width 0.3s',
                  transformOrigin: 'center',
                  width: open && i === 1 ? '0px' : i === 2 ? '18px' : '26px',
                  transform: open
                    ? i === 0 ? 'rotate(45deg) translate(6px,6px)'
                    : i === 2 ? 'rotate(-45deg) translate(4px,-5px)'
                    : 'none'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── MENÚ MÓVIL ────────────────── */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: '#0D0806', zIndex: 999,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.77,0,0.18,1)',
          display: 'flex', flexDirection: 'column',
          padding: '100px 40px 48px',
          gap: '0',
          overflowY: 'auto',
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.key}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'Schoolbell, cursive',
              fontSize: 'clamp(36px, 8vw, 52px)', fontWeight: 400,
              color: i % 2 === 0 ? '#FFFF00' : '#fff',
              textDecoration: 'none',
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              transition: 'color 0.2s, transform 0.2s',
              display: 'block',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
            className="mobile-nav-link"
          >
            {t(link.key)}
          </a>
        ))}

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <LanguageSwitcher />
          <a
            href="https://wa.me/573184550936?text=Hola%2C%20quiero%20cotizar%20productos%20BellaVista."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
              backgroundColor: '#FFFF00', color: '#0D0806',
              fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 800,
              fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '18px', textDecoration: 'none',
            }}
          >
            {t('navbar.cta')}
          </a>
        </div>
      </div>

      {/* ── SPACER ── */}
      <div style={{ height: '75px' }} />

      <style>{`
        .navbar-cta:hover { background: #e6e600 !important; transform: translateY(-1px); }
        .mobile-nav-link:hover { transform: translateX(8px) !important; }
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
