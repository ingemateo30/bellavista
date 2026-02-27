// Datos compartidos entre Productos.jsx y ProductoDetalle.jsx
// gondolaPb: padding-bottom % para mantener el aspect ratio de la imagen individual
// productoTop/Left: % de posición absoluta sobre la góndola principal
// productoScale: escala CSS transform (1.3 = 30% más grande)
// letreroTop/Left: % de posición del letrero de madera
export const listaProductos = [
  {
    id: 0,
    slug: 'panela-pulverizada',
    nombreKey: 'productos.panelaPulverizada',
    categoriaKey: 'productos.endulzantes',
    imagen: '/PRODUCTOS.png',
    // Múltiples imágenes para la galería del detalle
    imagenes: ['/PRODUCTOS.png'],
    // Góndola individual para la página de detalle
    gondola: '/gondolaa.png',
    gondolaPb: '65.2',
    // Posiciones sobre la góndola principal
    productoTop: 65,
    productoLeft: 33,
    productoScale: 1.5,
    letreroTop: 111.5,
    letreroLeft: 28,
  },
  {
    id: 1,
    slug: 'piloncillo',
    nombreKey: 'productos.piloncillo',
    categoriaKey: 'productos.tradicional',
    imagen: '/PRODUCTOS (5).png',
    imagenes: ['/PRODUCTOS (5).png'],
    gondola: '/gondolasi.png',
    gondolaPb: '59.5',
    productoTop: 70,
    productoLeft: 45,
    productoScale: 3.5,
    letreroTop: 111.5,
    letreroLeft: 40,
  },
  {
    id: 2,
    slug: 'cafe-de-origen',
    nombreKey: 'productos.cafe',
    categoriaKey: 'productos.premium',
    imagen: '/PRODUCTOS (3).png',
    imagenes: ['/PRODUCTOS (3).png'],
    gondola: '/gondola55.png',
    gondolaPb: '57.8',
    productoTop: 70,
    productoLeft: 43,
    productoScale: 4.3,
    letreroTop: 111.5,
    letreroLeft: 52,
  },
  {
    id: 3,
    slug: 'nuevos-derivados',
    nombreKey: 'productos.derivados',
    categoriaKey: 'productos.proximamente',
    imagen: '/PRODUCTOS (6).png',
    imagenes: ['/PRODUCTOS (6).png'],
    gondola: '/gondolaa.png',
    gondolaPb: '55.2',
    productoTop: 80,
    productoLeft: 43,
    productoScale: 8.3,
    letreroTop: 111.5,
    letreroLeft: 55,
  },
];
