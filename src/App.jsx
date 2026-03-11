import './i18n';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', color: '#603813', background: '#fff', minHeight: '100vh' }}>
          <h2 style={{ color: '#D11335', marginBottom: '16px' }}>Error al cargar la página</h2>
          <pre style={{ background: '#f5f5f5', padding: '16px', borderRadius: '4px', overflow: 'auto', fontSize: '12px' }}>
            {this.state.error.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categorias from './components/Categorias';
import Ventajas from './components/Ventajas';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import ExportCTA from './components/ExportCTA';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ProductoDetalle from './components/ProductoDetalle';
import ProcesoProduccion from './components/ProcesoProduccion';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import FloatingSocial from './components/FloatingSocial';

function PaginaPrincipal() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categorias />
      <Ventajas />
      <Productos />
      <Nosotros />
      <ExportCTA />
      <Galeria />
      <ProcesoProduccion />
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
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/producto/:slug" element={<ProductoDetalle />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
