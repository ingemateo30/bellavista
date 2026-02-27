import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import { listaProductos } from '../data/productos';

export default function ProductoDetalle() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const producto = listaProductos.find((p) => p.slug === slug);

  // Si no existe el producto, redirigir a inicio
  if (!producto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7EAE4]">
        <p className="text-[#2C1810] text-lg mb-4">{t('productos.noEncontrado')}</p>
        <Link to="/" className="text-[#5D8B3F] underline">{t('productos.volverInicio')}</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7EAE4]">
      <Navbar />

      {/* ── DESKTOP: Gondola individual con producto encima ── */}
      <section className="hidden md:block relative w-full overflow-hidden" style={{ paddingBottom: `${producto.gondolaPb}%` }}>

        {/* Gondola individual como fondo – mantiene su aspect ratio */}
        <img
          src={producto.gondola}
          alt={`Gondola ${t(producto.nombreKey)}`}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'fill' }}
        />

        {/* Producto centrado sobre el estante */}
        <div className="absolute inset-0 flex items-end justify-center" style={{ paddingBottom: '12%' }}>
          <div className="flex flex-col items-center">
            <img
              src={producto.imagen}
              alt={t(producto.nombreKey)}
              className="object-contain"
              style={{
                width: 'clamp(140px, 18vw, 340px)',
                height: 'clamp(140px, 18vw, 340px)',
                filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.5))',
              }}
            />
            {/* Sombra de contacto */}
            <div
              className="bg-black/20 blur-xl rounded-full mt-1"
              style={{ width: 'clamp(80px, 10vw, 180px)', height: '10px' }}
            />
            {/* Letrero de madera */}
            <div
              className="mt-4 bg-[#F2E8DF] border-b-2 border-l border-r border-[#7A5C41] shadow-lg"
              style={{ padding: 'clamp(6px, 0.6vw, 12px) clamp(16px, 2vw, 40px)' }}
            >
              <h1
                className="font-bold text-[#2C1810] text-center"
                style={{
                  fontFamily: "'Patrick Hand SC', 'Kalam', cursive",
                  fontSize: 'clamp(16px, 2vw, 32px)',
                }}
              >
                {t(producto.nombreKey)}
              </h1>
              <p
                className="text-[#5D8B3F] font-semibold text-center uppercase tracking-wider mt-0.5"
                style={{ fontSize: 'clamp(10px, 1vw, 16px)' }}
              >
                {t(producto.categoriaKey)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÓVIL: Layout limpio sin gondola ── */}
      <section className="md:hidden flex flex-col items-center px-6 py-10 bg-[#F7EAE4]">
        {/* Imagen del producto */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 w-full max-w-xs flex justify-center">
          <img
            src={producto.imagen}
            alt={t(producto.nombreKey)}
            className="object-contain"
            style={{ width: '160px', height: '160px' }}
          />
        </div>

        {/* Categoría */}
        <span
          className="text-[#5D8B3F] font-semibold uppercase tracking-widest mb-2"
          style={{ fontSize: '0.7rem' }}
        >
          {t(producto.categoriaKey)}
        </span>

        {/* Nombre */}
        <h1
          className="font-bold text-[#2C1810] text-center mb-6"
          style={{
            fontFamily: "'Patrick Hand SC', 'Kalam', cursive",
            fontSize: '1.8rem',
            lineHeight: 1.2,
          }}
        >
          {t(producto.nombreKey)}
        </h1>
      </section>

      {/* ── CTA: Sección de contacto (desktop y móvil) ── */}
      <section className="bg-white py-12 px-6 flex flex-col items-center gap-5">
        <p
          className="text-[#2C1810] text-center font-semibold"
          style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.3rem)', maxWidth: '500px' }}
        >
          {t('productoDetalle.ctaTitulo')}
        </p>

        <a
          href="https://wa.me/573101234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5D8B3F] hover:bg-[#4A7032] text-white font-semibold rounded-xl flex items-center gap-2 shadow-md transition-all hover:scale-105"
          style={{ padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.5vw, 36px)', fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', fontFamily: 'Kumbh Sans, sans-serif' }}
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t('productoDetalle.cotizarWhatsapp')}
        </a>

        <Link
          to="/#productos"
          className="text-[#5D8B3F] font-medium underline underline-offset-2 hover:text-[#4A7032] transition-colors"
          style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: 'clamp(0.8rem, 1vw, 0.95rem)' }}
        >
          {t('productoDetalle.verTodos')}
        </Link>
      </section>

      <Footer />
    </div>
  );
}
