import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sparkles, LogIn } from 'lucide-react'

export default function PatientLoginPage() {
  const [countdown, setCountdown] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/patient/dashboard')
          return 0
        }
        return prev - 1
      })
    }, 800)
    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30"
        >
          <Sparkles className="w-12 h-12 text-white" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-2"
        >
          <span className="gradient-text">光穹</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#94A3B8] mb-8"
        >
          患者治疗管理平台
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="glass rounded-2xl p-8 max-w-sm mx-auto"
        >
          <div className="flex items-center gap-2 justify-center text-[#38BDF8] text-sm mb-4">
            <LogIn className="w-4 h-4" />
            演示模式自动登录中...
          </div>
          <div className="w-full bg-[#334155] rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full gradient-primary rounded-full"
              animate={{ width: `${100 - countdown * 33}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-[#64748B] text-xs mt-3">{countdown} 秒后进入</p>
        </motion.div>
      </div>
    </div>
  )
}
