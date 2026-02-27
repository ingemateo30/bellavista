import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { listaProductos } from '../data/productos';

// Aspect ratio del fondo de gondola principal: 7877×3774 → 47.9%
const GONDOLA_PB = '47.9%';

export default function Productos() {
  const { t } = useTranslation();

  return (
    <section id="productos" className="w-full bg-[#F7EAE4]">

      {/* ── DESKTOP: Gondola con productos encima ── */}
      <div className="hidden md:block relative w-full overflow-hidden" style={{ paddingBottom: GONDOLA_PB }}>

        {/* Fondo de gondola – mantiene su aspect ratio exacto */}
        <img
          src="/PRODUCTOS100-32.png"
          alt="Gondola Bellavista"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'fill' }}
        />

        {/* Fila de productos posicionada sobre el estante */}
        <div
          className="absolute inset-0 flex items-end justify-evenly"
          style={{ paddingBottom: '6%', paddingLeft: '8%', paddingRight: '8%' }}
        >
          {listaProductos.map((prod) => (
            <Link
              key={prod.id}
              to={`/producto/${prod.slug}`}
              className="group flex flex-col items-center cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              {/* Imagen del producto */}
              <div className="relative">
                <img
                  src={prod.imagen}
                  alt={t(prod.nombreKey)}
                  className="object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  style={{
                    width: 'clamp(70px, 9vw, 165px)',
                    height: 'clamp(70px, 9vw, 165px)',
                    filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.45))',
                  }}
                />
                {/* Sombra de contacto */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bg-black/20 blur-md rounded-full"
                  style={{ bottom: '-4px', width: '60%', height: '8px' }}
                />
              </div>

              {/* Letrero de madera */}
              <div
                className="mt-2 bg-[#F2E8DF] border-b-2 border-l border-r border-[#7A5C41] shadow-md whitespace-nowrap"
                style={{ padding: 'clamp(4px, 0.4vw, 8px) clamp(8px, 0.9vw, 18px)' }}
              >
                <h3
                  className="font-bold text-[#2C1810] text-center"
                  style={{
                    fontFamily: "'Patrick Hand SC', 'Kalam', cursive",
                    fontSize: 'clamp(10px, 1vw, 16px)',
                  }}
                >
                  {t(prod.nombreKey)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── MÓVIL: Cards sin gondola ── */}
      <div className="md:hidden bg-[#F7EAE4] px-5 py-10">
        <h2
          className="text-center font-bold text-[#2C1810] mb-8"
          style={{ fontFamily: "'Patrick Hand SC', 'Kalam', cursive", fontSize: '1.6rem' }}
        >
          {t('navbar.productos')}
        </h2>

        <div className="grid grid-cols-2 gap-5">
          {listaProductos.map((prod) => (
            <Link
              key={prod.id}
              to={`/producto/${prod.slug}`}
              className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-5 active:scale-95 transition-transform duration-150"
              style={{ textDecoration: 'none' }}
            >
              {/* Imagen */}
              <div className="w-full flex justify-center mb-3">
                <img
                  src={prod.imagen}
                  alt={t(prod.nombreKey)}
                  className="object-contain"
                  style={{ width: '100%', maxWidth: '120px', height: '120px' }}
                />
              </div>

              {/* Categoría */}
              <span
                className="text-[#5D8B3F] font-semibold uppercase tracking-wide mb-1"
                style={{ fontSize: '0.65rem' }}
              >
                {t(prod.categoriaKey)}
              </span>

              {/* Nombre */}
              <h3
                className="text-[#2C1810] font-bold text-center leading-tight"
                style={{
                  fontFamily: "'Patrick Hand SC', 'Kalam', cursive",
                  fontSize: '1rem',
                }}
              >
                {t(prod.nombreKey)}
              </h3>

              {/* Ver más */}
              <span
                className="mt-3 text-[#5D8B3F] text-xs font-semibold border border-[#5D8B3F] rounded-full px-3 py-1 group-hover:bg-[#5D8B3F] group-hover:text-white transition-colors"
              >
                {t('productos.verDetalle')}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
