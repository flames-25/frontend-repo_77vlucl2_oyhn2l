import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/blogposts`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight mb-6">Blog</h1>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="group border border-black/10 rounded-xl overflow-hidden hover:shadow-md transition bg-white">
                  {p.cover_image && (
                    <img src={p.cover_image} alt={p.title} className="h-44 w-full object-cover" />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:underline">{p.title}</h3>
                    {p.excerpt && <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>}
                    {p.tags?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.tags.map(t => (
                          <span key={t} className="text-xs bg-black/5 px-2 py-0.5 rounded">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
