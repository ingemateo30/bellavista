export default function Productos() {
  return (
    <section id="productos" className="relative py-20 bg-gradient-to-b from-[#8B7355] via-[#A0826D] to-[#8B7355]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Letrero de madera */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gray-700 rounded"></div>
            <div className="bg-[#D4A574] px-12 py-6 rounded-lg shadow-2xl border-8 border-[#8B6F47] relative"
                 style={{boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 -2px 5px rgba(0,0,0,0.2)'}}>
              <div className="absolute top-3 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute bottom-3 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
              <h2 className="handwriting-title text-5xl text-[#3E2723]">
                Nuestros Productos
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-verde-oscuro text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:bg-opacity-90 transition-all">
              Ver Todos
            </button>
          </div>
        </div>

        {/* Estantería con fondo de montañas */}
        <div className="relative bg-[#A0826D] p-8 rounded-3xl shadow-2xl"
             style={{boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 -5px 15px rgba(0,0,0,0.2)'}}>
          {/* Fondo de paisaje */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-sky-300 via-green-200 to-green-300 opacity-50"></div>
          </div>

          {/* Productos en estantes */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Panela */}
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl hover:scale-105 transition-transform">
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-3 flex items-center justify-center border-4 border-amber-200">
                <p className="text-gray-400 text-xs text-center">Panela</p>
              </div>
              <div className="bg-[#D4A574] px-3 py-2 rounded-lg text-center border-4 border-[#8B6F47] shadow-md">
                <p className="handwriting-title text-lg text-[#3E2723]">• Panela •</p>
              </div>
            </div>

            {/* Piloncillo */}
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl hover:scale-105 transition-transform">
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-3 flex items-center justify-center border-4 border-amber-200">
                <p className="text-gray-400 text-xs text-center">Piloncillo</p>
              </div>
              <div className="bg-[#D4A574] px-3 py-2 rounded-lg text-center border-4 border-[#8B6F47] shadow-md">
                <p className="handwriting-title text-lg text-[#3E2723]">• Piloncillo •</p>
              </div>
            </div>

            {/* Café */}
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl hover:scale-105 transition-transform">
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-3 flex items-center justify-center border-4 border-amber-200">
                <p className="text-gray-400 text-xs text-center">Café</p>
              </div>
              <div className="bg-[#D4A574] px-3 py-2 rounded-lg text-center border-4 border-[#8B6F47] shadow-md">
                <p className="handwriting-title text-lg text-[#3E2723]">• Café •</p>
              </div>
            </div>

            {/* Próximamente */}
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl hover:scale-105 transition-transform border-4 border-dashed border-[#8B6F47]">
              <div className="aspect-square bg-crema rounded-lg mb-3 flex items-center justify-center">
                <span className="text-6xl">❓</span>
              </div>
              <div className="bg-crema px-3 py-2 rounded-lg text-center border-4 border-dashed border-[#8B6F47]">
                <p className="handwriting text-sm text-marron">Próximamente</p>
                <p className="handwriting-title text-xs text-gray-600 mt-1">• Nuevo Producto •</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
