import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Stronger Bodies. Sharper Minds.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">London Based Coaching</span>
          </motion.h1>
          <p className="mt-5 text-gray-600 text-lg md:text-xl max-w-prose">
            I help busy Londoners get lean, build strength, and feel incredible with sustainable training and nutrition.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-5 py-3 bg-black text-white rounded-md hover:bg-black/90 transition">Start Coaching</a>
            <a href="/blog" className="px-5 py-3 border border-black/10 rounded-md hover:bg-black/5 transition">Read the Blog</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600"
            alt="Fitness in London gym"
            className="rounded-xl shadow-2xl border border-black/10"
          />
          <div className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur rounded-lg shadow p-4 border border-black/5">
            <p className="text-sm font-semibold">1:1 + Online Coaching</p>
            <p className="text-xs text-gray-600">Strength • Fat Loss • Performance</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
