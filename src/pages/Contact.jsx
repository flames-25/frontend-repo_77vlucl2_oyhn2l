import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus(data.message)
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus(data.detail || 'Something went wrong')
      }
    } catch (e) {
      setStatus('Failed to send. Please try again later.')
    }
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight mb-6">Contact</h1>
          <form onSubmit={onSubmit} className="grid gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="border border-black/10 rounded-md px-4 py-2" required />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" className="border border-black/10 rounded-md px-4 py-2" required />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border border-black/10 rounded-md px-4 py-2" />
            <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject" className="border border-black/10 rounded-md px-4 py-2" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="6" className="border border-black/10 rounded-md px-4 py-2" required />
            <button className="px-5 py-3 bg-black text-white rounded-md hover:bg-black/90 transition" type="submit">Send</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
