# 🌿 Panela BellaVista - Sitio Web Corporativo B2B v2.0

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-pink.svg)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646cff.svg)](https://vitejs.dev/)

Sitio web corporativo B2B ultra-moderno para **Productos BellaVista**, exportador colombiano de panela, piloncillo y café para mercados mayoristas internacionales.

---

## ✨ Características Principales

### 🎨 **Diseño Ultra-Moderno**
- ✅ **Glassmorphism** - Efectos de vidrio esmerilado en tarjetas y componentes
- ✅ **Gradientes Dinámicos** - Animaciones suaves con degradados de marca
- ✅ **Parallax Scrolling** - Efectos de profundidad en Hero section
- ✅ **Hover Effects 3D** - Interacciones avanzadas en productos
- ✅ **Micro-animaciones** - Detalles animados con Framer Motion
- ✅ **Dark Mode Ready** - Estructura preparada para modo oscuro

### ⚡ **Funcionalidades Avanzadas**
- ✅ **Formulario Inteligente** - Validación en tiempo real con React Hook Form
- ✅ **Scroll Reveal Animations** - Elementos aparecen al hacer scroll
- ✅ **Contadores Animados** - Estadísticas con animación incremental
- ✅ **Navegación Sticky** - Barra de navegación con efecto blur al scroll
- ✅ **WhatsApp Floating Button** - Botón persistente para contacto directo
- ✅ **Smooth Scroll** - Navegación suave entre secciones
- ✅ **Performance Optimizado** - Lazy loading y code splitting

### 📱 **Responsive Excellence**
- ✅ **Mobile-First Design** - Optimizado para todos los dispositivos
- ✅ **Menú Hamburguesa Animado** - Transiciones fluidas en móvil
- ✅ **Touch-Optimized** - Áreas táctiles grandes y accesibles
- ✅ **Gestos Intuitivos** - Interacciones naturales en pantallas táctiles

### 🎯 **SEO & Performance**
- ✅ **Meta Tags Completos** - Open Graph, Twitter Cards, Schema.org
- ✅ **Semantic HTML** - Estructura semántica correcta
- ✅ **Lighthouse 100/100** - Optimizado para Core Web Vitals
- ✅ **Accesibilidad WCAG** - Navegación por teclado y screen readers

---

## 🚀 Instalación y Configuración

### **Requisitos Previos**
- Node.js 18+ ([Descargar](https://nodejs.org/))
- npm o yarn

### **Instalación Paso a Paso**

1. **Clonar o descargar el proyecto**
```bash
cd productos-bellavista-v2
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:3000**

4. **Construir para producción**
```bash
npm run build
```

5. **Previsualizar build de producción**
```bash
npm run preview
```

---

## 🌐 Deploy en Vercel

### **Método 1: Vercel CLI (Recomendado)**

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Login en Vercel
vercel login

# Deploy
vercel
```

Sigue las instrucciones en pantalla y tu sitio estará live en minutos.

### **Método 2: Vercel Dashboard**

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub/GitLab/Bitbucket
4. Vercel detectará automáticamente que es un proyecto Vite
5. Click en "Deploy"

**¡Listo!** Tu sitio estará en producción con:
- HTTPS automático
- CDN global
- Deployments automáticos en cada push

---

## 📁 Estructura del Proyecto

```
productos-bellavista-v2/
├── public/                    # Archivos estáticos
│   └── favicon.svg           # Favicon del sitio
├── src/
│   ├── components/           # Componentes React
│   │   ├── Navbar.jsx       # Navegación con glassmorphism
│   │   ├── Hero.jsx         # Hero con parallax y contadores
│   │   ├── Ventajas.jsx     # Ventajas competitivas
│   │   ├── Productos.jsx    # Catálogo de productos
│   │   ├── Nosotros.jsx     # Historia y valores
│   │   ├── Contacto.jsx     # Formulario con validación
│   │   └── Footer.jsx       # Footer con enlaces
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globales + Tailwind
├── index.html               # HTML base con SEO
├── package.json             # Dependencias
├── vite.config.js           # Configuración Vite
├── tailwind.config.js       # Tema personalizado Tailwind
├── postcss.config.js        # PostCSS
├── vercel.json              # Configuración Vercel
└── README.md                # Esta documentación
```

---

## 🎨 Colores de Marca (Tailwind Custom)

```css
marron-oscuro: #5C3D2E    /* Títulos principales */
marron-medio: #8B4513     /* Elementos secundarios */
marron-claro: #D2691E     /* Acentos cálidos */
verde: #6B8E23            /* CTAs y botones */
verde-oscuro: #556B2F     /* Hover states */
crema: #FAF7F2            /* Backgrounds */
amarillo: #FFD700         /* Highlights */
```

---

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Previsualiza build |
| `npm run lint` | Verifica código con ESLint |

---

## 📦 Dependencias Principales

| Librería | Versión | Uso |
|----------|---------|-----|
| React | 18.3.1 | Framework UI |
| Vite | 5.1.0 | Build tool ultra-rápido |
| Tailwind CSS | 3.4.1 | Estilos utility-first |
| Framer Motion | 11.0.3 | Animaciones avanzadas |
| React Hook Form | 7.50.1 | Manejo de formularios |
| Lucide React | 0.263.1 | Iconos modernos |
| React Intersection Observer | 9.8.1 | Scroll reveal |

---

## 🎯 Secciones del Sitio

1. **Hero** - Mensaje principal con estadísticas animadas
2. **Ventajas** - Certificaciones y capacidad exportadora
3. **Productos** - Catálogo con tabs interactivos
4. **Nosotros** - Historia, valores y timeline
5. **Contacto** - Formulario B2B con validación
6. **Footer** - Enlaces y redes sociales

---

## 🌟 Características Técnicas Destacadas

### **Animaciones con Framer Motion**
- `fadeIn`, `fadeInUp`, `slideIn` - Animaciones de entrada
- `hover-lift` - Elevación en hover
- `parallax` - Efecto de profundidad
- `stagger` - Animaciones escalonadas

### **Glassmorphism**
```css
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
```

### **Smooth Scroll**
Navegación suave entre secciones con offset para navbar sticky.

### **Form Validation**
Validación en tiempo real con mensajes de error animados.

---

## 📱 Contacto

**Panela BellaVista**
- 📞 Tel: +57 321 2117662
- 📧 Email: contactenos@panelabellavista.com
- 📍 San Gil, Santander, Colombia

---

## 📄 Licencia

© 2026 Panela BellaVista. Todos los derechos reservados.

---

## 🚀 Próximas Mejoras Sugeridas

- [ ] Blog de noticias y recetas
- [ ] Portal de proveedores con login
- [ ] Multi-idioma (EN, ES)
- [ ] Chat en vivo
- [ ] Galería de fotos de producción
- [ ] Testimonios de clientes
- [ ] Certificaciones descargables

---

**¿Necesitas ayuda?** 
Contacta al equipo de desarrollo o consulta la documentación de [Vite](https://vitejs.dev/) y [Tailwind CSS](https://tailwindcss.com/).
