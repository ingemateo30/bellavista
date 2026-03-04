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

  const imagenes =
    producto.imagenes && producto.imagenes.length > 0
      ? producto.imagenes
      : [producto.imagen];

  const handlePrev = () =>
    setImgIdx((i) => (i - 1 + imagenes.length) % imagenes.length);
  const handleNext = () =>
    setImgIdx((i) => (i + 1) % imagenes.length);

  // Datos del producto desde traducciones
  const dk = producto.dataKey;
  const descripcion = dk ? t(`productosData.${dk}.descripcion`) : '';
  const rawCarac = dk ? t(`productosData.${dk}.caracteristicas`, { returnObjects: true }) : [];
  const caracteristicas = Array.isArray(rawCarac) ? rawCarac : [];
  const rawUsos = dk ? t(`productosData.${dk}.usos`, { returnObjects: true }) : [];
  const usos = Array.isArray(rawUsos) ? rawUsos : [];
  const origen = dk ? t(`productosData.${dk}.origen`) : '';

  const waMsg = `Hola, me interesa cotizar ${t(producto.nombreKey)}. ¿Me pueden dar más información?`;
  const waUrl = `https://wa.me/573184550936?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7EAE4]">
      <Navbar />

      <main className="flex-1 w-full" style={{ fontFamily: 'Kumbh Sans, sans-serif' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-14">

          {/* Volver */}
          <Link
            to="/#productos"
            className="inline-flex items-center gap-1 text-[#5D8B3F] hover:text-[#4A7032] mb-8 font-medium transition-colors text-sm"
          >
            <ChevronLeft />
            {t('productoDetalle.verTodos')}
          </Link>

          {/* ── Layout 2 columnas desktop ── */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-14 items-start">

            {/* ── GALERÍA ── */}
            <div className="w-full md:w-[48%] flex-shrink-0">
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

            {/* ── INFO ── */}
            <div className="w-full md:flex-1 flex flex-col gap-5">

              <span className="text-[#5D8B3F] font-semibold uppercase tracking-widest" style={{ fontSize: '0.72rem' }}>
                {t(producto.categoriaKey)}
              </span>

              <h1
                className="font-bold text-[#2C1810] leading-tight"
                style={{
                  fontFamily: "'Patrick Hand SC', 'Kalam', cursive",
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                }}
              >
                {t(producto.nombreKey)}
              </h1>

              <div className="h-1 w-16 rounded-full bg-[#5D8B3F]" />

              {producto.formatos && producto.formatos.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-[#2C1810] uppercase tracking-widest mb-2">
                    {t('productoDetalle.formatos')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {producto.formatos.map((f, i) => (
                      <span key={i} className="bg-[#F2E8DF] border border-[#7A5C41]/30 text-[#2C1810] rounded-full px-3 py-1 text-sm font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {descripcion && (
                <p className="text-[#2C1810]/75 leading-relaxed" style={{ fontSize: '0.95rem' }}>
                  {descripcion}
                </p>
              )}

              <div className="mt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={waUrl}
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

              <p className="text-[#2C1810]/60 text-sm leading-relaxed mt-1">
                {t('productoDetalle.ctaTitulo')}
              </p>
            </div>
          </div>

          {/* ── PANEL DE INFORMACIÓN DEL PRODUCTO ── */}
          {(caracteristicas.length > 0 || usos.length > 0) && (
            <div className="mt-10 bg-[#FDF8F4] rounded-2xl border border-[#E8DCCF] shadow-sm overflow-hidden">

              {/* Cabecera del panel */}
              <div className="bg-[#F2E8DF] border-b border-[#E8DCCF] px-6 py-4 flex items-center gap-3">
                <div className="w-1 h-6 rounded-full bg-[#5D8B3F]" />
                <h2
                  className="text-[#2C1810] text-xl"
                  style={{ fontFamily: "'Handlee', cursive" }}
                >
                  {t('productoDetalle.infoTitle')}
                </h2>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-8">

                {/* Características */}
                {caracteristicas.length > 0 && (
                  <div>
                    <h3
                      className="text-[#2C1810] text-[17px] mb-4 flex items-center gap-2"
                      style={{ fontFamily: "'Handlee', cursive" }}
                    >
                      <svg className="w-5 h-5 text-[#5D8B3F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      {t('productoDetalle.caracteristicasTitle')}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {caracteristicas.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]/80 font-['Kumbh_Sans',_sans-serif]">
                          <svg className="w-4 h-4 text-[#5D8B3F] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Usos */}
                {usos.length > 0 && (
                  <div>
                    <h3
                      className="text-[#2C1810] text-[17px] mb-4 flex items-center gap-2"
                      style={{ fontFamily: "'Handlee', cursive" }}
                    >
                      <svg className="w-5 h-5 text-[#D4B57E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {t('productoDetalle.usosTitle')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {usos.map((u, i) => (
                        <span
                          key={i}
                          className="bg-[#F2E8DF] border border-[#D4B57E]/60 text-[#2C1810] rounded-full px-4 py-1.5 text-sm font-medium font-['Kumbh_Sans',_sans-serif]"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Origen */}
              {origen && (
                <div className="border-t border-[#E8DCCF] px-6 py-4 flex items-center gap-3 bg-[#F7EAE4]/60">
                  <svg className="w-5 h-5 text-[#5D8B3F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-['Kumbh_Sans',_sans-serif] text-[#2C1810]/70">
                    <strong className="text-[#2C1810]/90">{t('productoDetalle.origenTitle')}:</strong>{' '}
                    {origen}
                  </span>
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
