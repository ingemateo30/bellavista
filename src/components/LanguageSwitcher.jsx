import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { 
      code: 'es', 
      name: 'Español', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#c60b1e"/>
          <rect width="900" height="200" y="200" fill="#ffc400"/>
        </svg>
      )
    },
    { 
      code: 'en-US', 
      name: 'English', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 7410 3900" xmlns="http://www.w3.org/2000/svg">
          <rect width="7410" height="3900" fill="#b22234"/>
          <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
          <rect width="2964" height="2100" fill="#3c3b6e"/>
        </svg>
      )
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#ED2939"/>
          <rect width="600" height="600" fill="#fff"/>
          <rect width="300" height="600" fill="#002395"/>
        </svg>
      )
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#F2E8DF] text-[#2C1810] px-4 py-2 rounded-lg hover:bg-[#E8DCCF] transition-all font-medium shadow-sm border border-[#D4B57E]"
        style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
        aria-label="Cambiar idioma"
      >
        
        <div className="hidden sm:flex items-center gap-2.5">
          <div className="flex-shrink-0">{currentLanguage.flag}</div>
          <span style={{ fontFamily: 'Kumbh Sans, sans-serif' }}>{currentLanguage.name}</span>
        </div>
        <div className="sm:hidden flex items-center flex-shrink-0">
          {currentLanguage.flag}
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E8DCCF] z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F7EAE4] transition-colors text-left ${
                i18n.language === lang.code ? 'bg-[#F7EAE4] font-semibold' : ''
              }`}
              style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
            >
              <div className="flex-shrink-0">{lang.flag}</div>
              <span className="text-[#2C1810]" style={{ fontFamily: 'Kumbh Sans, sans-serif' }}>
                {lang.name}
              </span>
              {i18n.language === lang.code && (
                <svg
                  className="w-5 h-5 ml-auto text-[#5D8B3F]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}