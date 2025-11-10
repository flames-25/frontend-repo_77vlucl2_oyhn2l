export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-gray-800">LondonFit</p>
          <p className="mt-2">Coach based in London, helping busy professionals get strong and perform their best.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Contact</p>
          <p className="mt-2">Email: hello@londonfit.co.uk</p>
          <p>Instagram: @londonfit</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Location</p>
          <p className="mt-2">London, United Kingdom</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} LondonFit. All rights reserved.</div>
    </footer>
  )
}
