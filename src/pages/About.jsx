import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">About Me</h1>
          <p className="mt-4 text-gray-600 text-lg">
            I’m a London-based strength and conditioning coach. Over the past decade I’ve helped hundreds of clients get leaner, stronger and more confident. My coaching blends science-backed programming with practical nutrition that fits your lifestyle.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600" alt="Coach training" className="rounded-xl border border-black/10" />
            <div className="space-y-3 text-gray-700">
              <p>• Certified S&C Coach (UKSCA)</p>
              <p>• Nutrition Specialist</p>
              <p>• Former competitive athlete</p>
              <p>• Based in Central London</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
