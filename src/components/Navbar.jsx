import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-black/80' : 'text-gray-800 hover:text-black hover:bg-black/5'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="w-2 h-6 bg-black rounded-sm"></span>
          <span>LondonFit</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
