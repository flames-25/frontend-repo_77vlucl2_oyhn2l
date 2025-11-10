import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Contact from './pages/Contact'
import Test from './Test'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}

export default App
