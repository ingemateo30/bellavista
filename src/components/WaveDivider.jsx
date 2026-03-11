/*
  WAVE DIVIDER — Elemento gráfico principal de marca BellaVista
  ──────────────────────────────────────────────────────────────
  Ondas fluidas superpuestas que simulan el paisaje de Mogotes, Santander.
  Orden de capas (arriba → abajo): marrón → rojo → amarillo → verde limón → verde oscuro
  
  Props:
  - flip: boolean — invierte verticalmente para usar como cabecera de sección
  - fromColor: color de fondo del área de arriba
  - toColor: color de fondo del área de abajo
  - height: altura total del divider en px
*/
export default function WaveDivider({ flip = false, fromColor = '#F4E800', toColor = '#F4E800', height = 90 }) {
  const style = {
    display: 'block',
    width: '100%',
    transform: flip ? 'scaleY(-1)' : 'none',
  };
  return (
    <div style={{ position: 'relative', height: `${height}px`, backgroundColor: toColor, overflow: 'visible', lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        style={{ ...style, position: 'absolute', bottom: 0, left: 0, height: `${height}px` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Verde oscuro — capa trasera */}
        <path d="M0,18 C120,5 240,30 360,18 C480,6 600,35 720,20 C840,5 960,32 1080,18 C1200,4 1320,28 1440,15 L1440,90 L0,90 Z" fill="#1B7A2F"/>
        {/* Verde limón */}
        <path d="M0,28 C160,14 320,42 480,28 C640,14 800,44 960,30 C1080,20 1260,42 1440,26 L1440,90 L0,90 Z" fill="#8BC420"/>
        {/* Amarillo */}
        <path d="M0,38 C200,22 400,52 600,38 C800,24 1000,54 1200,38 C1320,30 1400,44 1440,36 L1440,90 L0,90 Z" fill="#F4E800"/>
        {/* Rojo */}
        <path d="M0,50 C180,36 360,62 540,50 C720,38 900,64 1080,50 C1260,36 1380,56 1440,48 L1440,90 L0,90 Z" fill="#E8173A"/>
        {/* Marrón — capa delantera */}
        <path d="M0,62 C240,48 480,72 720,60 C960,48 1200,68 1440,58 L1440,90 L0,90 Z" fill="#5C2D0A"/>
      </svg>
    </div>
  );
}
