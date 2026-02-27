import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { listaProductos } from '../data/productos';

// Aspect ratio del fondo de góndola: 7877×3774 → 47.9%
// Se usa 60% para dejar espacio a los letreros que se posicionan en ~111.5%
const GONDOLA_PB = '60%';
const POR_PAGINA = 4;

export default function Productos() {
  const { t } = useTranslation();
  const [pagina, setPagina] = useState(0);

  const totalPaginas = Math.ceil(listaProductos.length / POR_PAGINA);
  const inicio = pagina * POR_PAGINA;
  const productosPagina = listaProductos.slice(inicio, inicio + POR_PAGINA);

  return (
    <section id="productos" className="w-full bg-[#F7EAE4]">

      {/* ── DESKTOP: Góndola con productos posicionados absolutamente ── */}
      <div className="hidden md:block pb-10">
        <div
          className="relative w-full"
          style={{ paddingBottom: GONDOLA_PB, overflow: 'visible' }}
        >
          {/* Fondo de góndola */}
          <img
            src="/PRODUCTOS100-32.png"
            alt="Góndola Bellavista"
            className="absolute inset-0 w-full"
            style={{ height: '100%', objectFit: 'fill' }}
          />

          {/* Productos posicionados absolutamente */}
          {productosPagina.map((prod) => (
            <Link
              key={prod.id}
              to={`/producto/${prod.slug}`}
              className="group"
              style={{
                position: 'absolute',
                top: `${prod.productoTop}%`,
                left: `${prod.productoLeft}%`,
                transform: 'translateX(-50%)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Imagen del producto escalada */}
              <div style={{ position: 'relative' }}>
                <img
                  src={prod.imagen}
                  alt={t(prod.nombreKey)}
                  className="object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  style={{
                    width: '3vw',
                    height: '3vw',
                    transform: `scale(${prod.productoScale})`,
                    transformOrigin: 'bottom center',
                    filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.45))',
                    display: 'block',
                  }}
                />
                {/* Sombra de contacto */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bg-black/20 blur-md rounded-full"
                  style={{ bottom: '-4px', width: '60%', height: '8px' }}
                />
              </div>
            </Link>
          ))}

          {/* Letreros posicionados absolutamente */}
          {productosPagina.map((prod) => (
            <Link
              key={`letrero-${prod.id}`}
              to={`/producto/${prod.slug}`}
              style={{
                position: 'absolute',
                top: `${prod.letreroTop}%`,
                left: `${prod.letreroLeft}%`,
                transform: 'translateX(-50%)',
                textDecoration: 'none',
              }}
            >
              <div
                className="bg-[#F2E8DF] border-b-2 border-l border-r border-[#7A5C41] shadow-md whitespace-nowrap hover:bg-[#EAD9CC] transition-colors"
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

        {/* Navegación de páginas – solo si hay más de 1 página */}
        {totalPaginas > 1 && (
          <div className="flex justify-center items-center gap-6 py-4 bg-[#F7EAE4]">
            <button
              onClick={() => setPagina((p) => Math.max(0, p - 1))}
              disabled={pagina === 0}
              className="text-[#5D8B3F] font-semibold disabled:opacity-30 hover:text-[#4A7032] transition-colors text-sm"
              style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
            >
              ← {t('productos.productosAnteriores')}
            </button>

            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPaginas }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPagina(i)}
                  aria-label={`${t('productos.irAlSlide')} ${i + 1}`}
                  className="rounded-full transition-all"
                  style={{
                    width: i === pagina ? '28px' : '10px',
                    height: '10px',
                    background: i === pagina ? '#5D8B3F' : 'rgba(122,92,65,0.3)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setPagina((p) => Math.min(totalPaginas - 1, p + 1))}
              disabled={pagina === totalPaginas - 1}
              className="text-[#5D8B3F] font-semibold disabled:opacity-30 hover:text-[#4A7032] transition-colors text-sm"
              style={{ fontFamily: 'Kumbh Sans, sans-serif' }}
            >
              {t('productos.siguientesProductos')} →
            </button>
          </div>
        )}
      </div>

      {/* ── MÓVIL: Cards sin góndola ── */}
      <div className="md:hidden bg-[#F7EAE4] px-5 py-10">
        <h2
          className="text-center font-bold text-[#2C1810] mb-8"
          style={{ fontFamily: "'Patrick Hand SC', 'Kalam', cursive", fontSize: '1.6rem' }}
        >
          {t('navbar.productos')}
        </h2>

        <div className="grid grid-cols-2 gap-5">
          {productosPagina.map((prod) => (
            <Link
              key={prod.id}
              to={`/producto/${prod.slug}`}
              className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-5 active:scale-95 transition-transform duration-150"
              style={{ textDecoration: 'none' }}
            >
              <div className="w-full flex justify-center mb-3">
                <img
                  src={prod.imagen}
                  alt={t(prod.nombreKey)}
                  className="object-contain"
                  style={{ width: '100%', maxWidth: '120px', height: '120px' }}
                />
              </div>

              <span
                className="text-[#5D8B3F] font-semibold uppercase tracking-wide mb-1"
                style={{ fontSize: '0.65rem' }}
              >
                {t(prod.categoriaKey)}
              </span>

              <h3
                className="text-[#2C1810] font-bold text-center leading-tight"
                style={{ fontFamily: "'Patrick Hand SC', 'Kalam', cursive", fontSize: '1rem' }}
              >
                {t(prod.nombreKey)}
              </h3>

              <span className="mt-3 text-[#5D8B3F] text-xs font-semibold border border-[#5D8B3F] rounded-full px-3 py-1 group-hover:bg-[#5D8B3F] group-hover:text-white transition-colors">
                {t('productos.verDetalle')}
              </span>
            </Link>
          ))}
        </div>

        {/* Paginación móvil */}
        {totalPaginas > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPagina((p) => Math.max(0, p - 1))}
              disabled={pagina === 0}
              className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#5D8B3F] font-bold disabled:opacity-30"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPaginas }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPagina(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === pagina ? '24px' : '8px',
                    height: '8px',
                    background: i === pagina ? '#5D8B3F' : 'rgba(122,92,65,0.3)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setPagina((p) => Math.min(totalPaginas - 1, p + 1))}
              disabled={pagina === totalPaginas - 1}
              className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[#5D8B3F] font-bold disabled:opacity-30"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
