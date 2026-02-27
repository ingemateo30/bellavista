import './i18n';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ventajas from './components/Ventajas';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Logo from './components/logo';
import ProductoDetalle from './components/ProductoDetalle';

function PaginaPrincipal() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Logo />
      <div className="-mt-12">
        <Ventajas />
      </div>
      <Productos />
      <Nosotros />
      <Contacto />
      <Footer />
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
