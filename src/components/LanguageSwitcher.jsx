import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    {
      code: 'es',
      short: 'ES',
      name: 'Español',
      flag: (
        <svg width="20" height="14" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: '3px', display: 'block', flexShrink: 0 }}>
          <rect width="900" height="600" fill="#c60b1e"/>
          <rect width="900" height="200" y="200" fill="#ffc400"/>
        </svg>
      )
    },
    {
      code: 'en-US',
      short: 'EN',
      name: 'English',
      flag: (
        <svg width="20" height="14" viewBox="0 0 7410 3900" xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: '3px', display: 'block', flexShrink: 0 }}>
          <rect width="7410" height="3900" fill="#b22234"/>
          <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
          <rect width="2964" height="2100" fill="#3c3b6e"/>
        </svg>
      )
    },
    {
      code: 'fr',
      short: 'FR',
      name: 'Français',
      flag: (
        <svg width="20" height="14" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: '3px', display: 'block', flexShrink: 0 }}>
          <rect width="900" height="600" fill="#ED2939"/>
          <rect width="600" height="600" fill="#fff"/>
          <rect width="300" height="600" fill="#002395"/>
        </svg>
      )
    }
  ];

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <style>{`
        /* ── Trigger ── */
        .bvls-trigger {
          display: flex;
          align-items: center;
          gap: 7px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 10px 6px 6px;
          border-radius: 999px;
          transition: background 0.18s;
          position: relative;
        }
        .bvls-trigger:hover {
          background: rgba(92, 45, 10, 0.10);
        }

        /* flag wrapper — círculo con borde marrón */
        .bvls-flag-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #5C2D0A;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #fff;
          flex-shrink: 0;
          transition: border-color 0.18s, transform 0.18s;
        }
        .bvls-trigger:hover .bvls-flag-wrap {
          border-color: #E8173A;
          transform: scale(1.08);
        }

        /* código de idioma */
        .bvls-code {
          font-family: 'Kumbh Sans', sans-serif;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #5C2D0A;
          line-height: 1;
        }

        /* chevron */
        .bvls-chevron {
          color: #5C2D0A;
          transition: transform 0.2s, color 0.18s;
          flex-shrink: 0;
        }
        .bvls-chevron.open { transform: rotate(180deg); }
        .bvls-trigger:hover .bvls-chevron { color: #E8173A; }

        /* ── Dropdown ── */
        .bvls-panel {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: #5C2D0A;
          border-radius: 14px;
          overflow: hidden;
          min-width: 148px;
          box-shadow: 0 8px 28px rgba(92,45,10,0.30);
          animation: bvls-in 0.16s ease;
          z-index: 200;
        }
        @keyframes bvls-in {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .bvls-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 11px 16px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Kumbh Sans', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: #F4E800;
          letter-spacing: 0.03em;
          transition: background 0.14s;
          border-bottom: 1px solid rgba(244,232,0,0.10);
        }
        .bvls-option:last-child { border-bottom: none; }
        .bvls-option:hover { background: rgba(244,232,0,0.12); }
        .bvls-option.active {
          background: #E8173A;
          color: #fff;
        }

        .bvls-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8BC420;
          margin-left: auto;
          flex-shrink: 0;
        }
      `}</style>

      <div style={{ position: 'relative' }} ref={dropdownRef}>
        <button className="bvls-trigger" onClick={() => setIsOpen(v => !v)} aria-label="Cambiar idioma">
          <span className="bvls-flag-wrap">{current.flag}</span>
          <span className="bvls-code">{current.short}</span>
          <svg className={`bvls-chevron${isOpen ? ' open' : ''}`} width="12" height="12"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        {isOpen && (
          <div className="bvls-panel">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`bvls-option${i18n.language === lang.code ? ' active' : ''}`}
                onClick={() => { i18n.changeLanguage(lang.code); setIsOpen(false); }}
              >
                {lang.flag}
                {lang.name}
                {i18n.language === lang.code && <span className="bvls-dot" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}