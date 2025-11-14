import { motion } from 'framer-motion'

export default function Bean({ size = 160, colorA = '#5A3A2E', colorB = '#2E1A14', rotate = 0 }) {
  const style = { width: size, height: size * 0.65 }
  return (
    <motion.div style={style} className="relative">
      <svg viewBox="0 0 200 130" className="w-full h-full">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor={colorA} />
            <stop offset="100%" stopColor={colorB} />
          </linearGradient>
          <filter id="gloss" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.6" specularExponent="20" lightingColor="#fff" result="spec">
              <fePointLight x="-30" y="-40" z="200" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g filter="url(#gloss)">
          <path d="M140 15c25 18 40 58 25 86s-54 32-84 19S27 80 25 55s22-49 53-53 62-5 62 13z" fill="url(#g)" transform={`rotate(${rotate} 100 65)`} />
          <path d="M110 10c-8 24-6 48 4 72" stroke="#2a1710" strokeWidth="8" strokeLinecap="round" fill="none" transform={`rotate(${rotate} 100 65)`} />
        </g>
      </svg>
    </motion.div>
  )
}
