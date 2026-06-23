import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">光穹</span>
              </span>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed">
              智能头戴光疗仪创新解决方案
              <br />
              让光疗触手可及
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">产品</h4>
            <div className="flex flex-col gap-2">
              <Link to="/product" className="text-sm text-[#64748B] hover:text-white transition-colors">产品详情</Link>
              <Link to="/product" className="text-sm text-[#64748B] hover:text-white transition-colors">技术原理</Link>
              <Link to="/product" className="text-sm text-[#64748B] hover:text-white transition-colors">使用指南</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">患者服务</h4>
            <div className="flex flex-col gap-2">
              <Link to="/patient" className="text-sm text-[#64748B] hover:text-white transition-colors">治疗管理</Link>
              <Link to="/patient/consult" className="text-sm text-[#64748B] hover:text-white transition-colors">在线问诊</Link>
              <Link to="/patient/records" className="text-sm text-[#64748B] hover:text-white transition-colors">治疗记录</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">关于</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-[#64748B] hover:text-white transition-colors">团队介绍</Link>
              <Link to="/about" className="text-sm text-[#64748B] hover:text-white transition-colors">联系我们</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E293B] text-center text-sm text-[#475569]">
          &copy; 2026 光穹 · 西交利物浦大学 · 挑战者杯参赛项目
        </div>
      </div>
    </footer>
  )
}
