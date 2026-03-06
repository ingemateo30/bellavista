import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const imagenes = [
  { src: '/SINR0002.jpg', alt: 'Instalaciones Bellavista' },
  { src: '/SINR0004.jpg', alt: 'Proceso de producción' },
  { src: '/_DSC0035.jpg', alt: 'Productos Bellavista' },
  { src: '/_DSC0042(1).jpg', alt: 'Panela artesanal' },
  { src: '/_DSC0048.jpg', alt: 'Exportación' },
  { src: '/_DSC0058(1).jpg', alt: 'Calidad certificada' },
  { src: '/_DSC0063.jpg', alt: 'Producto natural' },
];

const headerVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } }
};

const gridItem = {
  hidden: { opacity: 0, scale: 0.84, y: 30 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 22 }
  }
};

export default function Galeria() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null);

  const abrirLightbox = (index) => setLightbox(index);
  const cerrarLightbox = () => setLightbox(null);
  const anterior = () => setLightbox((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  const siguiente = () => setLightbox((prev) => (prev + 1) % imagenes.length);

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-[#F2E8DF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-[#6B4423] text-xs font-bold tracking-[0.3em] uppercase mb-3 font-['Kumbh_Sans',_sans-serif]">
            {t('galeria.eyebrow')}
          </p>
          <h2 className="text-[38px] md:text-[44px] text-[#2C1810] mb-3 font-['Schoolbell',_cursive] leading-tight">
            {t('galeria.titulo')}
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center mb-4"
            style={{ transformOrigin: 'center' }}
          >
            <div className="w-16 h-[2px] bg-[#D4B57E]" />
          </motion.div>
          <p className="text-[15px] text-[#6B5E55] leading-relaxed font-['Kumbh_Sans',_sans-serif] max-w-xl mx-auto">
            {t('galeria.subtitulo')}
          </p>
        </motion.div>

        {/* Grid de galería */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]"
        >
          {imagenes.map((img, i) => {
            const isWide = i === 0 || i === 5;
            const isTall = i === 2 || i === 7;

            return (
              <motion.div
                key={i}
                variants={gridItem}
                onClick={() => abrirLightbox(i)}
                whileHover={{ scale: 1.03, zIndex: 10, transition: { duration: 0.22 } }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${
                  isWide ? 'col-span-2' : ''
                } ${isTall ? 'row-span-2' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-[#2C1810]/0 group-hover:bg-[#2C1810]/40 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-['Kumbh_Sans',_sans-serif] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
                {/* Ícono de zoom */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/0 group-hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox con AnimatePresence */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={cerrarLightbox}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imagenes[lightbox].src}
                alt={imagenes[lightbox].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Cerrar */}
              <button
                onClick={cerrarLightbox}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Anterior */}
              <button
                onClick={anterior}
                className="absolute left-0 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
                aria-label="Imagen anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Siguiente */}
              <button
                onClick={siguiente}
                className="absolute right-0 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
                aria-label="Siguiente imagen"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Contador */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm font-['Kumbh_Sans',_sans-serif]">
                {lightbox + 1} / {imagenes.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
