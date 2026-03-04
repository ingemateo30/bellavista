import './i18n';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ventajas from './components/Ventajas';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import ExportCTA from './components/ExportCTA';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Logo from './components/logo';
import ImageSection from './components/ImageSection';
import ProductoDetalle from './components/ProductoDetalle';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import FloatingSocial from './components/FloatingSocial';

function PaginaPrincipal() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Logo />
      <ImageSection />
      <div className="-mt-12">
        <Ventajas />
      </div>
      <Productos />
      <Nosotros />
      <ExportCTA />
      <Galeria />
      <Contacto />
      <Footer />

      {/* Botones flotantes */}
      <FloatingWhatsApp />
      <FloatingSocial />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/producto/:slug" element={<ProductoDetalle />} />
    </Routes>
  );
}

export default App;
