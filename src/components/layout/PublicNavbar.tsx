import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/product', label: '产品详情' },
  { to: '/about', label: '关于我们' },
]

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">光穹</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-[#38BDF8]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/patient"
            className="px-5 py-2 rounded-full gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            患者端入口
          </Link>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-[#1E293B] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium py-2 ${
                location.pathname === link.to ? 'text-[#38BDF8]' : 'text-[#94A3B8]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/patient"
            onClick={() => setMobileOpen(false)}
            className="px-5 py-2.5 rounded-full gradient-primary text-white text-sm font-semibold text-center"
          >
            患者端入口
          </Link>
        </div>
      )}
    </nav>
  )
}
