import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  ClipboardList,
  MessageSquare,
  User,
  LogOut,
  Menu,
  X,
  Sparkles,
} from 'lucide-react'

const sidebarLinks = [
  { to: '/patient/dashboard', label: '治疗仪表盘', icon: LayoutDashboard },
  { to: '/patient/records', label: '治疗记录', icon: ClipboardList },
  { to: '/patient/consult', label: '在线问诊', icon: MessageSquare },
  { to: '/patient/profile', label: '个人中心', icon: User },
]

export default function PatientLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen flex bg-[#0F172A]">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-[#0B1120] border-r border-[#1E293B] flex flex-col transition-all duration-300 ${
          mobileOpen ? 'w-64 translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-4 border-b border-[#1E293B]">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold whitespace-nowrap">
              <span className="gradient-text">光穹</span>
            </span>
          )}
          <button
            className="hidden lg:block ml-auto text-[#475569] hover:text-white"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <button
            className="lg:hidden ml-auto text-white"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-500/10 text-[#38BDF8] shadow-sm'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`
              }
            >
              <link.icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{link.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-[#1E293B]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>退出登录</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-[#0B1120] border-b border-[#1E293B] flex items-center justify-between px-6">
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden sm:block text-sm text-[#64748B]">
            患者端 · 治疗管理平台
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">设备已连接</span>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
