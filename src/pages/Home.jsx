import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import PostGrid from './PostGrid'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <PostGrid title="Latest Posts" limit={3} showButton />
      <Footer />
    </div>
  )
}
