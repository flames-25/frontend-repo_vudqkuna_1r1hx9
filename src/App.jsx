import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollScene from './components/ScrollScene'
import CoffeeMug from './components/CoffeeMug'
import Bean from './components/Bean'

function App() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({ container: container })
  const bg = useTransform(scrollYProgress, [0, 1], ['#0b0b0b', '#1a0f0a'])

  return (
    <div ref={container} className="min-h-screen w-full text-white" style={{ background: bg }}>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-[#3b2216]/30 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[60vw] h-[60vw] rounded-full bg-[#6b3e2e]/30 blur-3xl" />
        </div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-center"
        >
          Ember & Bean
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-2xl text-white/80 text-center max-w-2xl"
        >
          A boutique coffee house where craft meets comfort
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-12"
        >
          <CoffeeMug size={320} />
        </motion.div>
        <div className="absolute bottom-10 text-white/60 text-sm">Scroll to explore</div>
      </section>

      {/* Section 1: Rotating Beans */}
      <ScrollScene height={180} rotate={[0, 180]} scale={[0.9, 1.1]} className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 px-6 md:px-16 max-w-6xl">
          <Bean size={200} />
          <Bean size={220} rotate={20} />
          <Bean size={180} rotate={-15} />
          <Bean size={220} rotate={35} />
          <Bean size={200} rotate={-10} />
          <Bean size={180} rotate={15} />
        </div>
      </ScrollScene>

      {/* Section 2: Menu Cards with parallax */}
      <ScrollScene height={160} rotate={[0, -120]} scale={[0.95, 1.05]} opacity={[0.8, 1]}>
        <div className="w-full max-w-6xl px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Espresso', desc: 'Rich, syrupy shot with caramel crema.' },
              { title: 'Cappuccino', desc: 'Velvety foam, balanced and cozy.' },
              { title: 'Cold Brew', desc: 'Slow-steeped, smooth and bold.' },
            ].map((i, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur">
                <div className="text-xl font-semibold">{i.title}</div>
                <div className="mt-2 text-white/70">{i.desc}</div>
                <div className="mt-6 text-sm text-white/60">$ {idx === 0 ? '3.50' : idx === 1 ? '4.25' : '4.00'}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollScene>

      {/* Section 3: About with rotating mug */}
      <ScrollScene height={160} rotate={[0, 260]} scale={[1, 1.08]} opacity={[1, 1]}>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-10 max-w-6xl">
          <div className="shrink-0"><CoffeeMug size={280} /></div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Roasted with Heart</h2>
            <p className="mt-4 text-white/75 text-lg leading-relaxed">
              We source small-batch beans and roast weekly for peak freshness. Enjoy layered flavor, from bright citrus to cocoa finish.
            </p>
          </div>
        </div>
      </ScrollScene>

      {/* Footer CTA */}
      <section className="min-h-[60vh] flex items-center justify-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full px-8 py-4 bg-amber-600 text-black font-semibold shadow-[0_10px_40px_rgba(245,158,11,0.45)]"
        >
          Order Ahead
        </motion.a>
      </section>
    </div>
  )
}

export default App
