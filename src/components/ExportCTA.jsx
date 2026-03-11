import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

/*
  EXPORT CTA — SVG World Map with export destinations
  Colombia (origin) → USA, Canada, España, Aruba
  Map style: yellow land on cream background, curved arrows
*/

const DESTINATIONS = [
  {
    id: 'usa',
    label: 'Estados Unidos',
    sublabel: 'EE.UU.',
    color: '#E8173A',
    // SVG coords (approx on 800x400 map)
    x: 190, y: 145,
  },
  {
    id: 'canada',
    label: 'Canadá',
    sublabel: 'Canada',
    color: '#1B7A2F',
    x: 185, y: 110,
  },
  {
    id: 'espana',
    label: 'España',
    sublabel: 'España',
    color: '#8BC420',
    x: 450, y: 120,
  },
  {
    id: 'aruba',
    label: 'Aruba',
    sublabel: 'Aruba',
    color: '#5C2D0A',
    x: 245, y: 175,
  },
];

// Colombia approx position
const COLOMBIA = { x: 238, y: 192 };

function WorldMapSVG() {
  return (
    <svg
      viewBox="0 0 800 400"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-label="Mapa de exportaciones BellaVista"
    >
      {/* Ocean background */}
      <rect width="800" height="400" fill="#EAF4FB" rx="6" />

      {/* ── CONTINENTS (simplified paths) ── */}

      {/* North America */}
      <path d="M100,60 L200,55 L260,75 L280,95 L270,130 L240,160 L220,175 L210,165 L200,145 L180,130 L160,140 L140,130 L120,110 L90,95 Z"
        fill="#F4E800" stroke="#E8173A" strokeWidth="1" opacity="0.9"/>
      {/* Central America + Caribbean */}
      <path d="M220,175 L240,185 L235,195 L220,198 L210,188 Z" fill="#F4E800" stroke="#5C2D0A" strokeWidth="0.8" opacity="0.9"/>
      {/* Greenland */}
      <path d="M280,30 L330,25 L345,50 L325,65 L290,60 Z" fill="#F4E800" stroke="#5C2D0A" strokeWidth="0.8" opacity="0.7"/>

      {/* South America */}
      <path d="M210,200 L250,195 L275,210 L280,235 L270,270 L255,295 L245,320 L230,330 L215,320 L200,290 L195,260 L200,230 L205,210 Z"
        fill="#F4E800" stroke="#5C2D0A" strokeWidth="1" opacity="0.9"/>

      {/* Europe */}
      <path d="M420,55 L480,50 L510,70 L500,100 L480,115 L455,110 L435,95 L415,80 Z"
        fill="#F4E800" stroke="#5C2D0A" strokeWidth="1" opacity="0.9"/>
      {/* Iberian Peninsula (Spain) */}
      <path d="M430,95 L465,90 L470,115 L450,125 L430,118 Z"
        fill="#F4E800" stroke="#1B7A2F" strokeWidth="1.2" opacity="0.9"/>

      {/* Africa */}
      <path d="M435,130 L490,125 L520,150 L525,200 L510,250 L490,285 L465,290 L445,265 L430,230 L425,185 L430,155 Z"
        fill="#F4E800" stroke="#5C2D0A" strokeWidth="1" opacity="0.9"/>

      {/* Asia (simplified) */}
      <path d="M510,50 L650,45 L700,75 L720,110 L700,140 L660,155 L620,150 L580,130 L545,115 L510,100 L500,75 Z"
        fill="#F4E800" stroke="#5C2D0A" strokeWidth="0.8" opacity="0.85"/>

      {/* Australia */}
      <path d="M640,230 L700,225 L730,250 L720,285 L690,295 L655,280 L640,255 Z"
        fill="#F4E800" stroke="#5C2D0A" strokeWidth="0.8" opacity="0.8"/>

      {/* ── COLOMBIA (origin) — highlighted in red ── */}
      <circle cx={COLOMBIA.x} cy={COLOMBIA.y} r="8" fill="#E8173A" opacity="0.9" />
      <circle cx={COLOMBIA.x} cy={COLOMBIA.y} r="14" fill="none" stroke="#E8173A" strokeWidth="1.5" opacity="0.4" className="map-marker-pulse" />
      <text x={COLOMBIA.x} y={COLOMBIA.y + 26} textAnchor="middle"
        style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: '8px', fontWeight: 700, fill: '#5C2D0A', letterSpacing: '0.08em' }}>
        COLOMBIA
      </text>

      {/* ── CURVED ARROWS FROM COLOMBIA TO DESTINATIONS ── */}

      {/* → Canada */}
      <path d={`M${COLOMBIA.x},${COLOMBIA.y} Q${COLOMBIA.x - 30},${DESTINATIONS[1].y} ${DESTINATIONS[1].x},${DESTINATIONS[1].y}`}
        fill="none" stroke="#1B7A2F" strokeWidth="1.8" strokeDasharray="5,3" opacity="0.7"
        markerEnd="url(#arrowGreen)" />

      {/* → USA */}
      <path d={`M${COLOMBIA.x},${COLOMBIA.y} Q${COLOMBIA.x - 10},${DESTINATIONS[0].y + 10} ${DESTINATIONS[0].x},${DESTINATIONS[0].y}`}
        fill="none" stroke="#E8173A" strokeWidth="1.8" strokeDasharray="5,3" opacity="0.7"
        markerEnd="url(#arrowRed)" />

      {/* → España */}
      <path d={`M${COLOMBIA.x},${COLOMBIA.y} Q350,80 ${DESTINATIONS[2].x},${DESTINATIONS[2].y}`}
        fill="none" stroke="#8BC420" strokeWidth="1.8" strokeDasharray="5,3" opacity="0.7"
        markerEnd="url(#arrowLime)" />

      {/* → Aruba */}
      <path d={`M${COLOMBIA.x},${COLOMBIA.y} Q${(COLOMBIA.x + DESTINATIONS[3].x)/2},${COLOMBIA.y - 10} ${DESTINATIONS[3].x},${DESTINATIONS[3].y}`}
        fill="none" stroke="#5C2D0A" strokeWidth="1.8" strokeDasharray="5,3" opacity="0.7"
        markerEnd="url(#arrowBrown)" />

      {/* Arrow markers */}
      <defs>
        <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#E8173A" />
        </marker>
        <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1B7A2F" />
        </marker>
        <marker id="arrowLime" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8BC420" />
        </marker>
        <marker id="arrowBrown" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#5C2D0A" />
        </marker>
      </defs>

      {/* ── DESTINATION MARKERS ── */}
      {DESTINATIONS.map((dest) => (
        <g key={dest.id}>
          <circle cx={dest.x} cy={dest.y} r="6" fill={dest.color} opacity="0.9" />
          <circle cx={dest.x} cy={dest.y} r="11" fill="none" stroke={dest.color} strokeWidth="1" opacity="0.4" />
          <text x={dest.x} y={dest.y - 15} textAnchor="middle"
            style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: '7.5px', fontWeight: 700, fill: dest.color, letterSpacing: '0.06em' }}>
            {dest.sublabel.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Aruba label adjusted (close to Colombia, push label down) */}
      <text x={DESTINATIONS[3].x + 12} y={DESTINATIONS[3].y + 4} textAnchor="start"
        style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: '7px', fontWeight: 700, fill: '#5C2D0A' }}>
        ARUBA
      </text>
    </svg>
  );
}

export default function ExportCTA() {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: '#F4E800', paddingTop: '0' }}>
      {/* Heading strip */}
      <div style={{ backgroundColor: '#E8173A', padding: '28px 32px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Schoolbell, cursive',
          color: '#fff',
          fontSize: 'clamp(28px, 5vw, 52px)',
          lineHeight: 1, margin: 0,
        }}>
          {t('exportacion.titulo') || 'Exportamos al Mundo'}
        </h2>
      </div>

      <div style={{ padding: '72px 32px 64px', maxWidth: '1360px', margin: '0 auto' }}>
        <div className="export-bv-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left: text + destinations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ height: '3px', width: '32px', backgroundColor: '#E8173A' }} />
              <span style={{ fontFamily: 'Kumbh Sans, sans-serif', color: '#E8173A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {t('exportacion.eyebrow') || 'Presencia Global'}
              </span>
            </div>

            <p style={{
              fontFamily: 'Kumbh Sans, sans-serif', color: '#5C2D0A',
              fontSize: '15px', lineHeight: 1.8, marginBottom: '36px', opacity: 0.85,
            }}>
              {t('exportacion.descripcion') || 'Llevamos la tradición panelera de Santander a los mercados internacionales, garantizando calidad artesanal en cada envío.'}
            </p>

            {/* Destination cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {DESTINATIONS.map((dest, i) => (
                <motion.div key={dest.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    backgroundColor: '#fff', padding: '12px 16px', borderRadius: '4px',
                    borderLeft: `4px solid ${dest.color}`,
                    boxShadow: '0 2px 8px rgba(92,45,10,0.07)',
                  }}
                >
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: dest.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Schoolbell, cursive', color: '#5C2D0A', fontSize: '18px', lineHeight: 1 }}>
                      {dest.label}
                    </div>
                    <div style={{ fontFamily: 'Kumbh Sans, sans-serif', color: dest.color, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      {t(`exportacion.${dest.id}`) || 'Destino de exportación'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="https://wa.me/573184550936?text=Hola%2C%20quiero%20información%20sobre%20exportaciones%20BellaVista."
              target="_blank" rel="noopener noreferrer"
              className="btn-red-bv"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#E8173A', color: '#fff',
                fontFamily: 'Kumbh Sans, sans-serif', fontWeight: 700,
                fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '16px 28px', textDecoration: 'none', borderRadius: '3px',
              }}
            >
              {t('exportacion.cta') || 'Contactar para Exportación'}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>

          {/* Right: World map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
            style={{
              backgroundColor: '#FDF8DC',
              borderRadius: '8px',
              padding: '24px',
              border: '2px solid rgba(92,45,10,0.12)',
              boxShadow: '0 8px 32px rgba(92,45,10,0.12)',
              position: 'relative',
            }}
          >
            <WorldMapSVG />
            {/* Legend */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px',
              justifyContent: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E8173A' }} />
                <span style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: '10px', color: '#5C2D0A', fontWeight: 600 }}>Colombia (Origen)</span>
              </div>
              {DESTINATIONS.map(d => (
                <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: d.color }} />
                  <span style={{ fontFamily: 'Kumbh Sans, sans-serif', fontSize: '10px', color: '#5C2D0A', fontWeight: 600 }}>{d.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <WaveDivider fromColor="#F4E800" toColor="#F4E800" height={72} />

      <style>{`
        @media (max-width: 860px) {
          .export-bv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
