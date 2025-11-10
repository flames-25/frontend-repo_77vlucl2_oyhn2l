import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/blogposts/${slug}`)
        if (!res.ok) throw new Error('Post not found')
        const data = await res.json()
        setPost(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [slug])

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {loading && <p className="text-gray-600">Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {post && (
            <article>
              <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
              {post.cover_image && (
                <img src={post.cover_image} alt={post.title} className="rounded-xl border border-black/10 my-6" />
              )}
              {post.tags?.length > 0 && (
                <div className="mb-4 flex gap-2 flex-wrap">
                  {post.tags.map(t => (
                    <span key={t} className="text-xs bg-black/5 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              )}
              {post.excerpt && <p className="text-lg text-gray-700">{post.excerpt}</p>}
              <p className="mt-4 whitespace-pre-line leading-7 text-gray-800">{post.content}</p>
            </article>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
