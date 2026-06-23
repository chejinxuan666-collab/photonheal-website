import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Thermometer,
  Battery,
  Clock,
  Activity,
  TrendingUp,
  CheckCircle2,
  Timer,
  Radio,
} from 'lucide-react'
import { mockDeviceData } from '../../data/mockData'

export default function DashboardPage() {
  const [deviceData, setDeviceData] = useState(mockDeviceData)

  useEffect(() => {
    if (!deviceData.currentTreatment?.active) return

    const interval = setInterval(() => {
      setDeviceData((prev) => {
        if (!prev.currentTreatment) return prev
        const remaining = Math.max(0, prev.currentTreatment.remainingTime - 1)
        const progress = remaining > 0
          ? ((prev.currentTreatment.duration - remaining) / prev.currentTreatment.duration) * 100
          : 100
        return {
          ...prev,
          batteryLevel: Math.max(0, prev.batteryLevel - 0.02),
          currentTreatment: {
            ...prev.currentTreatment,
            remainingTime: remaining,
            progress,
            active: remaining > 0,
            uvIntensity: remaining > 0 ? 8 + Math.random() * 1.5 : 0,
            temperature: remaining > 0 ? 36.8 + Math.random() * 0.8 : 36.5,
          },
        }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const treatment = deviceData.currentTreatment

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">治疗仪表盘</h1>
        <p className="text-[#94A3B8] text-sm mt-1">实时监测您的治疗状态与设备数据</p>
      </div>

      {/* Status Bar */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
          <div className={`w-2.5 h-2.5 rounded-full ${deviceData.connected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          <span className={`text-sm font-medium ${deviceData.connected ? 'text-green-400' : 'text-red-400'}`}>
            {deviceData.connected ? '设备已连接' : '设备已断开'}
          </span>
        </div>
        <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
          <Battery className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-sm text-white font-medium">{Math.round(deviceData.batteryLevel)}%</span>
        </div>
        <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
          <Radio className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-sm text-[#94A3B8]">{deviceData.deviceName}</span>
        </div>
      </div>

      {/* Main Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Treatment Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 lg:col-span-1"
        >
          <h2 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Timer className="w-5 h-5 text-[#38BDF8]" />
            治疗进度
          </h2>

          {treatment?.active ? (
            <div className="flex flex-col items-center">
              {/* Circular Progress */}
              <div className="relative w-48 h-48 mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="72" fill="none" stroke="#1E293B" strokeWidth="10" />
                  <circle
                    cx="80"
                    cy="80"
                    r="72"
                    fill="none"
                    stroke="url(#progressGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(treatment.progress / 100) * 452.4} 452.4`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {Math.round(treatment.progress)}%
                  </span>
                  <span className="text-xs text-[#64748B] mt-1">已完成</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-[#0B1120] rounded-xl p-4 text-center">
                  <p className="text-[#64748B] text-xs mb-1">治疗时长</p>
                  <p className="text-white font-bold text-lg">{formatTime(treatment.duration)}</p>
                </div>
                <div className="bg-[#0B1120] rounded-xl p-4 text-center">
                  <p className="text-[#64748B] text-xs mb-1">剩余时间</p>
                  <p className="text-[#38BDF8] font-bold text-lg">{formatTime(treatment.remainingTime)}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center py-8">
              <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
              <p className="text-white font-semibold text-lg mb-1">今日治疗已完成</p>
              <p className="text-[#64748B] text-sm">下次治疗：明天 20:00</p>
            </div>
          )}
        </motion.div>

        {/* Real-time Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 lg:col-span-2 grid sm:grid-cols-2 gap-6"
        >
          <div className="bg-[#0B1120] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <div>
                <p className="text-[#64748B] text-xs">UV光照强度</p>
                <p className="text-white font-bold text-2xl">
                  {treatment ? treatment.uvIntensity.toFixed(1) : '0.0'}
                  <span className="text-sm text-[#64748B] font-normal"> mW/cm²</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-[#1E293B] rounded-full h-2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                animate={{ width: `${treatment ? (treatment.uvIntensity / 15) * 100 : 0}%` }}
              />
            </div>
            <p className="text-[#475569] text-xs mt-2">推荐范围: 5-15 mW/cm²</p>
          </div>

          <div className="bg-[#0B1120] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-[#64748B] text-xs">头皮温度</p>
                <p className="text-white font-bold text-2xl">
                  {treatment ? treatment.temperature.toFixed(1) : '36.5'}
                  <span className="text-sm text-[#64748B] font-normal"> °C</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-[#1E293B] rounded-full h-2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"
                animate={{ width: `${treatment ? (treatment.temperature / 42) * 100 : 86}%` }}
              />
            </div>
            <p className="text-[#475569] text-xs mt-2">安全范围: 36-40°C</p>
          </div>

          <div className="bg-[#0B1120] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-[#64748B] text-xs">累计UV剂量</p>
                <p className="text-white font-bold text-2xl">
                  12.5
                  <span className="text-sm text-[#64748B] font-normal"> J/cm²</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-[#1E293B] rounded-full h-2">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400" animate={{ width: '62%' }} />
            </div>
            <p className="text-[#475569] text-xs mt-2">本周累计剂量</p>
          </div>

          <div className="bg-[#0B1120] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-[#64748B] text-xs">症状改善</p>
                <p className="text-white font-bold text-2xl">
                  +15%
                  <span className="text-sm text-[#64748B] font-normal text-green-400 ml-2">↑</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-[#1E293B] rounded-full h-2">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400" animate={{ width: '15%' }} />
            </div>
            <p className="text-[#475569] text-xs mt-2">较上周改善比例</p>
          </div>
        </motion.div>
      </div>

      {/* Real-time Chart Hint */}
      <div className="glass rounded-xl p-5 flex items-center gap-3">
        <Clock className="w-5 h-5 text-[#64748B]" />
        <p className="text-[#94A3B8] text-sm">
          实时数据每秒更新 · 蓝牙5.2低功耗连接 · 设备固件 {mockDeviceData.firmwareVersion}
        </p>
      </div>
    </div>
  )
}
