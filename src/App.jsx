import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ventajas from './components/Ventajas';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Ventajas />
      <Productos />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
