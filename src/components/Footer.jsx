import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{ backgroundColor: '#603813', overflow: 'hidden' }}>

      {/* Grid principal */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px' }} className="footer-grid">

          {/* Columna 1 — Logo + tagline */}
          <div>
            <img
              src="/VERSIONES LOGO-02.png"
              alt="Productos BellaVista"
              style={{ height: '72px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '20px' }}
            />
            <p style={{
              fontFamily: 'Schoolbell, cursive',
              color: '#FFFF00',
              fontSize: '22px',
              lineHeight: 1.3,
              marginBottom: '14px',
            }}>
              {t('footer.tagline')}
            </p>
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '13.5px',
              lineHeight: 1.7,
            }}>
              {t('footer.descripcion1')}
            </p>
            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '13.5px',
              lineHeight: 1.7,
              marginTop: '6px',
            }}>
              {t('footer.descripcion2')}
            </p>

            {/* Tags de categorías */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
              {[
                { label: t('hero.catPanela'), bg: '#D11335' },
                { label: t('hero.catCafe'),   bg: '#009245' },
                { label: t('hero.catBebidas'), bg: '#F15A24' },
              ].map((c, i) => (
                <span key={i} style={{
                  backgroundColor: c.bg,
                  color: '#fff',
                  fontFamily: 'Kumbh Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '2px',
                }}>
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 2 — Contacto */}
          <div>
            <h4 style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#FFFF00',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              {t('footer.contactoTitulo')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.535 5.877L0 24l6.293-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z', href: 'https://wa.me/573184550936', text: '+57 318 455 0936', color: '#B8EC3F', fill: true },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', href: 'mailto:contactenos@panelabellavista.com', text: 'contactenos@panelabellavista.com', color: '#B8EC3F', fill: false },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontFamily: 'Kumbh Sans, sans-serif', fontSize: '13px', lineHeight: 1.5 }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFFF00'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  <svg width="15" height="15" fill={item.fill ? '#B8EC3F' : 'none'} stroke={item.fill ? 'none' : '#B8EC3F'} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  {item.text}
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <svg width="15" height="15" fill="#B8EC3F" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.5 }}>
                  {t('footer.ubicacion')}
                </span>
              </div>
            </div>
          </div>

          {/* Columna 3 — Redes */}
          <div>
            <h4 style={{
              fontFamily: 'Kumbh Sans, sans-serif',
              color: '#FFFF00',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              {t('footer.redesTitulo')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: 'https://instagram.com/productosbellavista', label: '@productosbellavista', platform: 'Instagram' },
                { href: 'https://facebook.com/ProductosBellaVistaExport', label: 'Productos BellaVista', platform: 'Facebook' },
              ].map((red, i) => (
                <a
                  key={i}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFFF00'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8EC3F', marginBottom: '2px' }}>
                    {red.platform}
                  </div>
                  {red.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pie — franja de colores + copyright */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', height: '5px' }}>
          {['#D11335', '#F15A24', '#FFFF00', '#B8EC3F', '#009245', '#603813'].map((c, i) => (
            <div key={i} style={{ flex: 1, backgroundColor: c }} />
          ))}
        </div>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          textAlign: 'center',
        }}>
          <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>
            © {new Date().getFullYear()} Productos BellaVista · {t('footer.derechos')}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>
            Mogotes, Santander · Colombia
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
