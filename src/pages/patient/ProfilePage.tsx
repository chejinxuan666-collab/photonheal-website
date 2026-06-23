import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Phone,
  Mail,
  Calendar,
  Shield,
  Bell,
  Clock,
  Edit3,
  Heart,
  AlertTriangle,
  Smartphone,
} from 'lucide-react'
import { mockPatientProfile } from '../../data/mockData'

export default function ProfilePage() {
  const [profile, setProfile] = useState(mockPatientProfile)

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white">个人中心</h1>
        <p className="text-[#94A3B8] text-sm mt-1">管理您的个人信息与治疗偏好</p>
      </div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-4xl">
            {profile.name[0]}
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">{profile.name}</h2>
            <p className="text-[#94A3B8] text-sm mb-4">
              {profile.gender} · {profile.age}岁 · {profile.condition}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <span className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
                {profile.conditionSeverity}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                设备已连接
              </span>
            </div>
          </div>
          <button className="px-5 py-2.5 rounded-xl border border-[#334155] text-[#94A3B8] text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
            <Edit3 className="w-4 h-4" />
            编辑资料
          </button>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
            <User className="w-5 h-5 text-[#38BDF8]" />
            基本信息
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#64748B]" />
              <span className="text-sm text-[#94A3B8]">{profile.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#64748B]" />
              <span className="text-sm text-[#94A3B8]">{profile.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#64748B]" />
              <span className="text-sm text-[#94A3B8]">
                首次发病：{profile.onsetDate}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Medical Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            病情档案
          </h3>
          <div className="space-y-4">
            <div className="bg-[#0B1120] rounded-xl p-4">
              <p className="text-[#64748B] text-xs mb-1">诊断</p>
              <p className="text-white text-sm font-medium">{profile.condition}</p>
            </div>
            <div className="bg-[#0B1120] rounded-xl p-4">
              <p className="text-[#64748B] text-xs mb-1">严重程度</p>
              <p className="text-white text-sm font-medium">{profile.conditionSeverity}</p>
            </div>
            <div className="bg-[#0B1120] rounded-xl p-4">
              <p className="text-[#64748B] text-xs mb-1">过敏史</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {profile.allergies.map((a) => (
                  <span key={a} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Device Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-green-400" />
            设备管理
          </h3>
          <div className="bg-[#0B1120] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-semibold flex items-center gap-2">
                  {profile.deviceId}
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </p>
                <p className="text-[#64748B] text-xs mt-1">状态：{profile.deviceStatus === 'connected' ? '已连接' : '未连接'}</p>
              </div>
              <Shield className="w-10 h-10 text-green-400/30" />
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-colors">
                查看设备详情
              </button>
              <button className="flex-1 py-2 rounded-lg border border-[#334155] text-[#94A3B8] text-xs hover:bg-white/5 transition-colors">
                解除绑定
              </button>
            </div>
          </div>
        </motion.div>

        {/* Reminder Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
            <Bell className="w-5 h-5 text-yellow-400" />
            治疗提醒
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#0B1120] rounded-xl p-4">
              <div>
                <p className="text-white text-sm font-medium">治疗提醒</p>
                <p className="text-[#64748B] text-xs mt-0.5">每日定时提醒治疗</p>
              </div>
              <button
                onClick={() => setProfile({ ...profile, reminderEnabled: !profile.reminderEnabled })}
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  profile.reminderEnabled ? 'bg-blue-500' : 'bg-[#334155]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform ${
                    profile.reminderEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {profile.reminderEnabled && (
              <div className="flex items-center gap-4 bg-[#0B1120] rounded-xl p-4">
                <Clock className="w-5 h-5 text-[#38BDF8]" />
                <div>
                  <p className="text-white text-sm font-medium">提醒时间</p>
                  <p className="text-[#64748B] text-xs mt-0.5">每天 {profile.reminderTime}</p>
                </div>
                <button className="ml-auto text-[#38BDF8] text-xs hover:underline">
                  修改
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-2xl p-6 border border-red-500/10"
      >
        <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          数据管理
        </h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-colors">
            导出全部数据
          </button>
          <button className="px-5 py-2.5 rounded-xl border border-[#334155] text-[#94A3B8] text-sm hover:bg-white/5 transition-colors">
            删除账户
          </button>
        </div>
      </motion.div>
    </div>
  )
}
