import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// A wrapper that pins its children and maps scroll progress to rotation + parallax
export default function ScrollScene({ children, height = 200, rotate = [0, 360], scale = [0.9, 1.05], opacity = [0.6, 1], className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const rY = useSpring(useTransform(scrollYProgress, [0, 1], rotate), { stiffness: 80, damping: 20 })
  const s = useSpring(useTransform(scrollYProgress, [0, 1], scale), { stiffness: 120, damping: 20 })
  const o = useSpring(useTransform(scrollYProgress, [0, 1], opacity), { stiffness: 120, damping: 25 })

  return (
    <section ref={ref} className={`relative w-full`} style={{ height: `${height}vh` }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        <motion.div style={{ rotateY: rY, scale: s, opacity: o }} className={`pointer-events-auto ${className}`}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
