import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import { listaProductos } from '../data/productos';

function ChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

function ChevronLeftLg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export default function ProductoDetalle() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

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

  const handlePrev = () => setImgIdx((i) => (i - 1 + imagenes.length) % imagenes.length);
  const handleNext = () => setImgIdx((i) => (i + 1) % imagenes.length);

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
    <div className="min-h-screen flex flex-col" style={{ background: '#F7EAE4' }}>
      <Navbar />

      {/* ── BREADCRUMB STRIP ── */}
      <div style={{ background: '#2C1810' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2"
          style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: '12px' }}>
          <Link to="/" className="transition-colors" style={{ color: 'rgba(212,181,126,0.7)' }}
            onMouseOver={e => e.target.style.color = '#D4B57E'}
            onMouseOut={e => e.target.style.color = 'rgba(212,181,126,0.7)'}
          >
            Bellavista
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
          <Link to="/#productos" className="transition-colors" style={{ color: 'rgba(212,181,126,0.7)' }}
            onMouseOver={e => e.target.style.color = '#D4B57E'}
            onMouseOut={e => e.target.style.color = 'rgba(212,181,126,0.7)'}
          >
            {t('productoDetalle.verTodos')}
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
          <span style={{ color: '#F2E8DF', fontWeight: 500 }}>{t(producto.nombreKey)}</span>
        </div>
      </div>

      <main className="flex-1 w-full" style={{ fontFamily: 'Kumbh Sans, sans-serif' }}>

        {/* ── CUERPO PRINCIPAL ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">

          {/* Volver */}
          <Link
            to="/#productos"
            className="inline-flex items-center gap-1.5 mb-8 font-medium transition-colors text-sm"
            style={{ color: '#5D8B3F' }}
            onMouseOver={e => e.currentTarget.style.color = '#4A7032'}
            onMouseOut={e => e.currentTarget.style.color = '#5D8B3F'}
          >
            <ChevronLeft />
            {t('productoDetalle.verTodos')}
          </Link>

          {/* ── Layout 2 columnas ── */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

            {/* ── GALERÍA ── */}
            <div className="w-full md:w-[46%] flex-shrink-0">
              {/* Imagen principal con marco decorativo */}
              <div className="relative">
                {/* Marco offset decorativo */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl"
                  style={{ background: 'rgba(93,139,63,0.12)', border: '1.5px solid rgba(93,139,63,0.2)' }} />

                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center"
                  style={{ aspectRatio: '1 / 1' }}>
                  <img
                    key={imgIdx}
                    src={imagenes[imgIdx]}
                    alt={`${t(producto.nombreKey)} – ${imgIdx + 1}`}
                    className="object-contain w-full h-full p-8"
                    style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))' }}
                  />

                  {imagenes.length > 1 && (
                    <>
                      <button onClick={handlePrev} aria-label="Imagen anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all hover:scale-110"
                        style={{ color: '#2C1810' }}>
                        <ChevronLeftLg />
                      </button>
                      <button onClick={handleNext} aria-label="Siguiente imagen"
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all hover:scale-110"
                        style={{ color: '#2C1810' }}>
                        <ChevronRight />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {imagenes.map((_, i) => (
                          <button key={i} onClick={() => setImgIdx(i)}
                            className="rounded-full transition-all"
                            style={{
                              width: i === imgIdx ? '20px' : '6px',
                              height: '6px',
                              background: i === imgIdx ? '#5D8B3F' : 'rgba(0,0,0,0.2)',
                            }} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Miniaturas */}
              {imagenes.length > 1 && (
                <div className="flex gap-3 mt-6 flex-wrap">
                  {imagenes.map((img, i) => (
                    <button key={i} onClick={() => setImgIdx(i)}
                      className="rounded-xl bg-white shadow-md p-1.5 flex items-center justify-center transition-all"
                      style={{
                        width: '68px', height: '68px',
                        outline: i === imgIdx ? '2px solid #5D8B3F' : '2px solid transparent',
                        opacity: i === imgIdx ? 1 : 0.5,
                        transform: i === imgIdx ? 'scale(1.06)' : 'scale(1)',
                      }}>
                      <img src={img} alt={`miniatura ${i + 1}`} className="object-contain w-full h-full" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── COLUMNA INFO ── */}
            <div className="w-full md:flex-1 flex flex-col">

              {/* Categoría + origen inline */}
              <div className="flex items-center flex-wrap gap-3 mb-3">
                <span className="font-bold uppercase tracking-widest" style={{ fontSize: '11px', color: '#5D8B3F' }}>
                  {t(producto.categoriaKey)}
                </span>
                {origen && (
                  <>
                    <span style={{ color: 'rgba(44,24,16,0.2)' }}>·</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                      style={{ background: 'rgba(44,24,16,0.06)', color: '#6B5E55', border: '1px solid rgba(44,24,16,0.1)' }}>
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {origen}
                    </span>
                  </>
                )}
              </div>

              {/* Nombre */}
              <h1 className="leading-tight mb-4"
                style={{
                  fontFamily: "'Schoolbell', cursive",
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  color: '#2C1810',
                }}>
                {t(producto.nombreKey)}
              </h1>

              {/* Divisor dorado */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-[2px] rounded-full" style={{ background: '#D4B57E' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#5D8B3F' }} />
              </div>

              {/* Descripción */}
              {descripcion && (
                <p className="leading-relaxed mb-6" style={{ fontSize: '0.94rem', color: 'rgba(44,24,16,0.72)', lineHeight: 1.8 }}>
                  {descripcion}
                </p>
              )}

              {/* Formatos */}
              {producto.formatos && producto.formatos.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: '#2C1810' }}>
                    {t('productoDetalle.formatos')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {producto.formatos.map((f, i) => (
                      <span key={i} className="rounded-full px-3.5 py-1 text-sm font-medium"
                        style={{ background: '#F2E8DF', border: '1.5px solid rgba(122,92,65,0.25)', color: '#2C1810' }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Separador antes del CTA */}
              <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(212,181,126,0.35)' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#2C1810' }}>
                  {t('productoDetalle.ctaTitulo')}
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(44,24,16,0.55)' }}>
                  {t('productoDetalle.ctaSubtexto') !== 'productoDetalle.ctaSubtexto'
                    ? t('productoDetalle.ctaSubtexto')
                    : t('exportcta.ctaSubtexto')}
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-semibold rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      background: '#5D8B3F', color: 'white',
                      padding: '11px 26px', fontSize: '14px',
                    }}
                    onMouseOver={e => e.currentTarget.style.background = '#4A7032'}
                    onMouseOut={e => e.currentTarget.style.background = '#5D8B3F'}
                  >
                    <svg className="w-4.5 h-4.5 flex-shrink-0" style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t('productoDetalle.cotizarWhatsapp')}
                  </a>
                  <a href="#contacto"
                    className="text-sm font-semibold transition-colors"
                    style={{ color: '#5D8B3F' }}
                    onMouseOver={e => e.target.style.color = '#4A7032'}
                    onMouseOut={e => e.target.style.color = '#5D8B3F'}
                  >
                    {t('exportcta.ctaBoton')} →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ── PANEL INFORMACIÓN TÉCNICA ── */}
          {(caracteristicas.length > 0 || usos.length > 0) && (
            <div className="mt-14">

              {/* Título de sección */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-7 rounded-full" style={{ background: '#5D8B3F' }} />
                <h2 style={{ fontFamily: "'Handlee', cursive", fontSize: '22px', color: '#2C1810' }}>
                  {t('productoDetalle.infoTitle')}
                </h2>
                <div className="flex-1 h-px" style={{ background: 'rgba(212,181,126,0.4)' }} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* Características */}
                {caracteristicas.length > 0 && (
                  <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid rgba(232,220,207,0.8)' }}>
                    <h3 className="text-base font-semibold mb-5 pb-3 flex items-center justify-between"
                      style={{ fontFamily: "'Handlee', cursive", color: '#2C1810', borderBottom: '1px solid rgba(212,181,126,0.3)' }}>
                      {t('productoDetalle.caracteristicasTitle')}
                      <span className="text-xs font-['Kumbh_Sans',sans-serif] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(93,139,63,0.1)', color: '#5D8B3F' }}>
                        {caracteristicas.length}
                      </span>
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {caracteristicas.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(44,24,16,0.78)' }}>
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#5D8B3F', marginTop: '6px' }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Usos */}
                {usos.length > 0 && (
                  <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid rgba(232,220,207,0.8)' }}>
                    <h3 className="text-base font-semibold mb-5 pb-3"
                      style={{ fontFamily: "'Handlee', cursive", color: '#2C1810', borderBottom: '1px solid rgba(212,181,126,0.3)' }}>
                      {t('productoDetalle.usosTitle')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {usos.map((u, i) => (
                        <span key={i} className="rounded-full px-4 py-1.5 text-sm font-medium"
                          style={{ background: '#F2E8DF', border: '1.5px solid rgba(212,181,126,0.5)', color: '#2C1810' }}>
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── BOTTOM CTA STRIP ── */}
          <div className="mt-14 rounded-2xl overflow-hidden" style={{ background: '#2C1810' }}>
            <div className="px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-lg mb-1" style={{ fontFamily: "'Schoolbell', cursive", color: '#F2E8DF' }}>
                  {t('exportcta.titulo')}
                </p>
                <p className="text-sm" style={{ color: 'rgba(242,232,223,0.55)', fontFamily: 'Kumbh Sans, sans-serif' }}>
                  {t('exportcta.ctaSubtexto')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: '#5D8B3F', color: 'white', padding: '10px 22px', fontSize: '13px', fontFamily: 'Kumbh Sans, sans-serif' }}
                  onMouseOver={e => e.currentTarget.style.background = '#4A7032'}
                  onMouseOut={e => e.currentTarget.style.background = '#5D8B3F'}
                >
                  WhatsApp
                </a>
                <Link to="/#contacto"
                  className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(242,232,223,0.1)', border: '1px solid rgba(242,232,223,0.2)', color: '#F2E8DF', padding: '10px 22px', fontSize: '13px', fontFamily: 'Kumbh Sans, sans-serif' }}
                  onMouseOver={e => { e.currentTarget.style.background = 'rgba(242,232,223,0.18)' }}
                  onMouseOut={e => { e.currentTarget.style.background = 'rgba(242,232,223,0.1)' }}
                >
                  {t('exportcta.ctaBoton')}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
