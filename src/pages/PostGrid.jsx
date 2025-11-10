import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function PostGrid({ title = 'Latest Posts', limit = 6, showButton = false }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/blogposts`)
        const data = await res.json()
        setPosts(data.slice(0, limit))
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [limit])

  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {showButton && (
            <a href="/blog" className="text-sm text-gray-700 hover:underline">View all</a>
          )}
        </div>
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
      </div>
    </section>
  )
}
