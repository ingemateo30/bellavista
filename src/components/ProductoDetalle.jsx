import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import { listaProductos } from '../data/productos';

function ChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ProductoDetalle() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [imgIdx, setImgIdx] = useState(0);

  const producto = listaProductos.find((p) => p.slug === slug);

  if (!producto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7EAE4]">
        <p className="text-[#2C1810] text-lg mb-4">{t('productos.noEncontrado')}</p>
        <Link to="/" className="text-[#5D8B3F] underline">{t('productos.volverInicio')}</Link>
      </div>
    );
  }

  // Usar imagenes[] si existe y tiene contenido, si no, usar la imagen principal
  const imagenes =
    producto.imagenes && producto.imagenes.length > 0
      ? producto.imagenes
      : [producto.imagen];

  const handlePrev = () =>
    setImgIdx((i) => (i - 1 + imagenes.length) % imagenes.length);
  const handleNext = () =>
    setImgIdx((i) => (i + 1) % imagenes.length);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7EAE4]">
      <Navbar />

      <main className="flex-1 w-full" style={{ fontFamily: 'Kumbh Sans, sans-serif' }}>
        {/* ── Contenedor principal ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-14">

          {/* Volver */}
          <Link
            to="/#productos"
            className="inline-flex items-center gap-1 text-[#5D8B3F] hover:text-[#4A7032] mb-8 font-medium transition-colors text-sm"
          >
            <ChevronLeft />
            {t('productoDetalle.verTodos')}
          </Link>

          {/* ── Layout 2 columnas en desktop ── */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-14 items-start">

            {/* ── GALERÍA DE IMÁGENES ── */}
            <div className="w-full md:w-[48%] flex-shrink-0">

              {/* Imagen principal */}
              <div
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center"
                style={{ aspectRatio: '1 / 1' }}
              >
                <img
                  key={imgIdx}
                  src={imagenes[imgIdx]}
                  alt={`${t(producto.nombreKey)} – imagen ${imgIdx + 1}`}
                  className="object-contain w-full h-full p-8"
                  style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.15))' }}
                />

                {/* Flechas de navegación – solo si hay más de 1 imagen */}
                {imagenes.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all hover:scale-110 text-[#2C1810]"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all hover:scale-110 text-[#2C1810]"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight />
                    </button>

                    {/* Indicador de imagen actual */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {imagenes.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImgIdx(i)}
                          className="rounded-full transition-all"
                          style={{
                            width: i === imgIdx ? '20px' : '6px',
                            height: '6px',
                            background: i === imgIdx ? '#5D8B3F' : 'rgba(0,0,0,0.25)',
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Miniaturas */}
              {imagenes.length > 1 && (
                <div className="flex gap-3 mt-4 flex-wrap">
                  {imagenes.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className="rounded-xl bg-white shadow-md p-2 flex items-center justify-center transition-all"
                      style={{
                        width: '72px',
                        height: '72px',
                        outline: i === imgIdx ? '2px solid #5D8B3F' : '2px solid transparent',
                        opacity: i === imgIdx ? 1 : 0.55,
                        transform: i === imgIdx ? 'scale(1.07)' : 'scale(1)',
                      }}
                      aria-label={`Ver imagen ${i + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${t(producto.nombreKey)} miniatura ${i + 1}`}
                        className="object-contain w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── INFO DEL PRODUCTO ── */}
            <div className="w-full md:flex-1 flex flex-col gap-5">

              {/* Categoría */}
              <span
                className="text-[#5D8B3F] font-semibold uppercase tracking-widest"
                style={{ fontSize: '0.72rem' }}
              >
                {t(producto.categoriaKey)}
              </span>

              {/* Nombre */}
              <h1
                className="font-bold text-[#2C1810] leading-tight"
                style={{
                  fontFamily: "'Patrick Hand SC', 'Kalam', cursive",
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                }}
              >
                {t(producto.nombreKey)}
              </h1>

              {/* Separador */}
              <div className="h-1 w-16 rounded-full bg-[#5D8B3F]" />

              {/* Formatos (si están definidos en el producto) */}
              {producto.formatos && producto.formatos.length > 0 && (
                <div>
                  <p
                    className="text-xs font-bold text-[#2C1810] uppercase tracking-widest mb-2"
                  >
                    {t('productoDetalle.formatos')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {producto.formatos.map((f, i) => (
                      <span
                        key={i}
                        className="bg-[#F2E8DF] border border-[#7A5C41]/30 text-[#2C1810] rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Descripción (si está definida) */}
              {producto.descripcionKey && (
                <p
                  className="text-[#2C1810]/75 leading-relaxed"
                  style={{ fontSize: '0.95rem' }}
                >
                  {t(producto.descripcionKey)}
                </p>
              )}

              {/* CTA */}
              <div className="mt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/573184550936?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Bellavista.%20%C2%BFMe%20pueden%20ayudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5D8B3F] hover:bg-[#4A7032] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105"
                  style={{
                    padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.5vw, 36px)',
                    fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                  }}
                >
                  <WhatsAppIcon />
                  {t('productoDetalle.cotizarWhatsapp')}
                </a>
              </div>

              <p
                className="text-[#2C1810]/60 text-sm leading-relaxed mt-1"
              >
                {t('productoDetalle.ctaTitulo')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
