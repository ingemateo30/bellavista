import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

/*
  COLORES EXACTOS — Manual de Identidad BellaVista
  Rojo   : #D11335  Verde  : #009245  Marrón : #603813
  Amarillo: #FFFF00  Lima   : #B8EC3F  Naranja: #F15A24
*/

const links = [
  { key: 'navbar.inicio',    href: '/#inicio'    },
  { key: 'navbar.productos', href: '/#productos' },
  { key: 'navbar.exportacion', href: '/#exportar' },
  { key: 'navbar.nosotros',  href: '/#nosotros'  },
  { key: 'navbar.contacto',  href: '/#contacto'  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <>
      {/* Franja de colores institucionales */}
      <div className="brand-stripe fixed top-0 left-0 right-0 z-50" />

      {/* Barra de navegación */}
      <header
        style={{
          position: 'fixed',
          top: '5px',
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : '#fff',
          borderBottom: scrolled ? '1px solid rgba(96,56,19,0.12)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          {/* Logo */}
          <a href="/#inicio" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img
              src="/VERSIONES LOGO-02.png"
              alt="Productos BellaVista"
              style={{ height: '44px', width: 'auto' }}
            />
          </a>

          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <a
                key={link.key}
                href={link.href}
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#603813',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#D11335';
                  e.currentTarget.style.backgroundColor = 'rgba(209,19,53,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#603813';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Derecha: idioma + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: '#D11335',
                color: '#fff',
                textDecoration: 'none',
                padding: '10px 22px',
                borderRadius: '4px',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#603813'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#D11335'; }}
            >
              {t('navbar.cotizar')}
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(o => !o)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#603813',
              padding: '4px',
            }}
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu móvil */}
        {open && (
          <div
            style={{
              backgroundColor: '#fff',
              borderTop: '3px solid #D11335',
              padding: '16px 24px 24px',
            }}
          >
            {links.map(link => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#603813',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(96,56,19,0.1)',
                }}
              >
                {t(link.key)}
              </a>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '20px' }}>
              <LanguageSwitcher />
              <a
                href="https://wa.me/573184550936"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  backgroundColor: '#D11335',
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                }}
              >
                {t('navbar.cotizar')}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Espaciador */}
      <div style={{ height: '73px' }} />
    </>
  );
}
