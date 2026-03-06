import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 30, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 220, damping: 18 }
  }
};

const LogoSection = () => {
  const badges = [
    { src: "/EXPORTACIÓN.png", alt: "Sello de Exportación" },
    { src: "/CALIDAD CERTIFICADA.png", alt: "Calidad Certificada" },
    { src: "/ABASTECIMIENTO.png", alt: "Abastecimiento Garantizado" },
  ];

  return (
    <section className="bg-[#F7EAE4] py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center items-end gap-8 md:gap-16"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={badgeVariants}
              whileHover={{ scale: 1.1, rotate: 2, transition: { type: 'spring', stiffness: 300 } }}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-50 h-42 md:w-56 md:h-40 flex items-center justify-center">
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="max-w-full max-h-full object-contain drop-shadow-md animate-float-slow"
                  style={{ animationDelay: `${index * 0.8}s` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;
