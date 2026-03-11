import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/*
  Sección "Nuestro Universo"
  Tres paneles inmersivos que muestran las categorías de productos:
  Panela & Derivados · Café de Origen · Bebidas Naturales
*/

const paneles = [
  {
    tituloKey: 'categorias.panela.titulo',
    descKey: 'categorias.panela.descripcion',
    tagKey: 'categorias.panela.tag',
    image: '/_DSC0033.jpg',
    overlayColor: 'rgba(92,45,10,0.72)',
    accentColor: '#F4E800',
    textColor: '#fff',
    tagBg: '#F4E800',
    tagText: '#1B3A0E',
    numero: '01',
  },
  {
    tituloKey: 'categorias.cafe.titulo',
    descKey: 'categorias.cafe.descripcion',
    tagKey: 'categorias.cafe.tag',
    image: '/_DSC0063.jpg',
    overlayColor: 'rgba(27,62,14,0.78)',
    accentColor: '#F4E800',
    textColor: '#fff',
    tagBg: '#E8173A',
    tagText: '#fff',
    numero: '02',
  },
  {
    tituloKey: 'categorias.bebidas.titulo',
    descKey: 'categorias.bebidas.descripcion',
    tagKey: 'categorias.bebidas.tag',
    image: '/_DSC0042(1).jpg',
    overlayColor: 'rgba(10,30,60,0.78)',
    accentColor: '#F4E800',
    textColor: '#fff',
    tagBg: '#8BC420',
    tagText: '#fff',
    numero: '03',
  },
];

export default function Categorias() {
  const { t } = useTranslation();

  return (
    <section id="universo" className="relative overflow-hidden">

      {/* Header flotante */}
      <div className="bg-white py-16 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#E8173A',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {t('categorias.eyebrow')}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Schoolbell, cursive',
            color: '#1B3A0E',
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 1.05,
            margin: '0 auto 16px',
            maxWidth: '800px',
            padding: '0 24px',
          }}
        >
          {t('categorias.titulo')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: 'Kumbh Sans, sans-serif',
            color: '#6B5E55',
            fontSize: 'clamp(14px, 1.6vw, 17px)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7,
            padding: '0 24px',
          }}
        >
          {t('categorias.subtitulo')}
        </motion.p>

        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            height: '3px',
            background: 'linear-gradient(90deg, #F4E800, #E8173A, #1B7A2F)',
            maxWidth: '120px',
            margin: '24px auto 0',
            transformOrigin: 'center',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Paneles de categorías */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          minHeight: '580px',
        }}
        className="grid-cols-1 sm:grid-cols-3"
      >
        {paneles.map((panel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative overflow-hidden cursor-pointer"
            style={{ minHeight: '500px' }}
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
              style={{
                backgroundImage: `url('${panel.image}')`,
                transform: 'scale(1)',
              }}
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `${panel.overlayColor}`,
              }}
            />
            {/* Hover overlay más oscuro */}
            <div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
            />

            {/* Número decorativo */}
            <div
              className="absolute top-6 right-6"
              style={{
                fontFamily: 'Schoolbell, cursive',
                color: 'rgba(255,255,255,0.15)',
                fontSize: '80px',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              {panel.numero}
            </div>

            {/* Contenido */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10" style={{ minHeight: '500px' }}>

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="mb-4"
              >
                <span
                  style={{
                    backgroundColor: panel.tagBg,
                    color: panel.tagText,
                    fontFamily: 'Kumbh Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.62rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: '3px',
                    display: 'inline-block',
                  }}
                >
                  {t(panel.tagKey)}
                </span>
              </motion.div>

              {/* Título */}
              <h3
                style={{
                  fontFamily: 'Schoolbell, cursive',
                  color: '#fff',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                }}
              >
                {t(panel.tituloKey)}
              </h3>

              {/* Descripción — aparece en hover en desktop */}
              <p
                className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500"
                style={{
                  fontFamily: 'Kumbh Sans, sans-serif',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '13.5px',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                {t(panel.descKey)}
              </p>

              {/* Línea separadora animada */}
              <div
                className="w-12 h-0.5 mb-0 group-hover:w-20 transition-all duration-500"
                style={{ backgroundColor: panel.accentColor }}
              />
            </div>

            {/* Borde inferior de color */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ backgroundColor: panel.accentColor }}
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #universo > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          #universo > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .group:hover .bg-cover {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
