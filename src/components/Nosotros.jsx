import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerCards = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 55, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 22 }
  }
};

const arrowVariant = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 0.4, scaleX: 1, transition: { duration: 0.4, delay: 0.5 } }
};

export default function Nosotros() {
  const { t } = useTranslation();

  const pasos = [
    {
      icon: `<img src="/41.svg" alt="icon" class="w-28 h-28" />`,
      titleKey: 'nosotros.paso1.titulo',
      descKey: 'nosotros.paso1.descripcion'
    },
    {
      icon: `<img src="/I3.svg" alt="icon" class="w-28 h-28" />`,
      titleKey: 'nosotros.paso2.titulo',
      descKey: 'nosotros.paso2.descripcion'
    },
    {
      icon: `<img src="/I4.svg" alt="icon" class="w-28 h-28" />`,
      titleKey: 'nosotros.paso3.titulo',
      descKey: 'nosotros.paso3.descripcion'
    },
    {
      icon: `<img src="/I2.svg" alt="icon" class="w-32 h-32" />`,
      titleKey: 'nosotros.paso4.titulo',
      descKey: 'nosotros.paso4.descripcion'
    }
  ];

  return (
    <section id="exportacion" className="relative py-16 bg-[#F7EAE4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[38px] md:text-[44px] text-[#2C1810] mb-2 font-['Schoolbell',_cursive] leading-tight">
            {t('nosotros.titulo')}
          </h2>
          <p className="text-[15px] text-[#2C1810] leading-relaxed font-['Kumbh_Sans',_sans-serif] max-w-2xl mx-auto">
            {t('nosotros.subtitulo')}<br/>
            {t('nosotros.subtitulo2')}
          </p>
        </motion.div>

        {/* Tarjetas de proceso */}
        <motion.div
          variants={containerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {pasos.map((paso, i) => (
            <motion.div key={i} variants={cardVariant} className="relative">
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 18px 38px rgba(44,24,16,0.13)',
                  transition: { type: 'spring', stiffness: 280 }
                }}
                className="bg-[#FDF8F4] rounded-2xl p-6 shadow-sm"
              >
                {/* Número de paso */}
                <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#5D8B3F] text-white rounded-full flex items-center justify-center text-[12px] font-bold font-['Kumbh_Sans',_sans-serif] shadow-md">
                  {i + 1}
                </div>
                <div
                  className="w-20 h-20 mx-auto mb-4 text-[#3D3D3D] opacity-80"
                  dangerouslySetInnerHTML={{ __html: paso.icon }}
                />
                <h3 className="text-[18px] text-[#2C1810] mb-2 text-center font-['Handlee',_cursive] leading-snug">
                  {t(paso.titleKey)}
                </h3>
                <p className="text-[#6B5E55] text-[13px] text-center leading-relaxed font-['Kumbh_Sans',_sans-serif]">
                  {t(paso.descKey)}
                </p>
              </motion.div>
              {/* Flecha entre tarjetas */}
              {i < 3 && (
                <motion.div
                  variants={arrowVariant}
                  style={{ transformOrigin: 'left center' }}
                  className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-[#3D3D3D]"
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="bg-[#F7EAE4] rounded-2xl p-8 text-center shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-[26px] md:text-[30px] text-[#2C1810] mb-3 font-['Handlee',_cursive] leading-snug">
            {t('nosotros.ctaTitulo')}
          </h3>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.06, boxShadow: '0 8px 25px rgba(107,78,61,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#6B4E3D] text-white px-10 py-3 rounded-lg font-['Kumbh_Sans',_sans-serif] font-semibold text-[15px] hover:bg-[#5A3F2F] transition-all shadow-sm"
          >
            {t('nosotros.ctaBoton')}
          </motion.a>
        </motion.div>
      </div>

      {/* Ondas del final */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img
          src="/54.svg"
          alt=""
          className="w-full h-auto object-bottom"
        />
      </div>
    </section>
  );
}
