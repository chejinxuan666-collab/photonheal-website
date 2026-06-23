import { motion } from 'framer-motion'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  BarChart,
  Bar,
} from 'recharts'
import {
  Calendar,
  Clock,
  Zap,
  FileText,
  TrendingDown,
  CheckCircle2,
  XCircle,
  ChevronRight,
} from 'lucide-react'
import { useState } from 'react'
import { mockTreatmentRecords, symptomTrendData } from '../../data/mockData'

export default function RecordsPage() {
  const [selectedRecord, setSelectedRecord] = useState(mockTreatmentRecords[0])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">治疗记录</h1>
        <p className="text-[#94A3B8] text-sm mt-1">追踪您的治疗历程，见证每一步改善</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: '累计治疗次数', value: mockTreatmentRecords.length, unit: '次', icon: Calendar, color: 'text-blue-400' },
          { label: '累计治疗时长', value: '18.5', unit: '小时', icon: Clock, color: 'text-green-400' },
          { label: '平均症状评分', value: '3.8', unit: '/10', icon: Zap, color: 'text-orange-400' },
          { label: '治疗依从率', value: '97', unit: '%', icon: CheckCircle2, color: 'text-purple-400' },
        ].map((card) => (
          <div key={card.label} className="glass rounded-xl p-5">
            <card.icon className={`w-5 h-5 ${card.color} mb-3`} />
            <div className="text-2xl font-bold text-white mb-1">
              {card.value}
              <span className="text-sm text-[#64748B] font-normal ml-1">{card.unit}</span>
            </div>
            <p className="text-xs text-[#64748B]">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Symptom Score Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-white font-semibold mb-6 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-green-400" />
            症状评分趋势
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={symptomTrendData}>
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
              <XAxis dataKey="week" stroke="#475569" fontSize={12} />
              <YAxis stroke="#475569" fontSize={12} domain={[0, 10]} />
              <Tooltip
                contentStyle={{
                  background: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  color: '#F1F5F9',
                  fontSize: '13px',
                }}
              />
              <Area type="monotone" dataKey="score" stroke="#38BDF8" strokeWidth={2} fill="url(#scoreGrad)" name="症状评分" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-white font-semibold mb-6 flex items-center gap-2">
            <ActivityIcon className="w-5 h-5 text-purple-400" />
            鳞屑面积与瘙痒程度
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={symptomTrendData.slice(-8)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
              <XAxis dataKey="week" stroke="#475569" fontSize={12} />
              <YAxis stroke="#475569" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  color: '#F1F5F9',
                  fontSize: '13px',
                }}
              />
              <Bar dataKey="鳞屑面积" fill="#38BDF8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="瘙痒程度" fill="#818CF8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Records List */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <h2 className="text-white font-semibold mb-4">历史治疗记录</h2>
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {mockTreatmentRecords.map((record) => (
              <button
                key={record.id}
                onClick={() => setSelectedRecord(record)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all text-left ${
                  selectedRecord.id === record.id
                    ? 'bg-blue-500/10 border border-blue-500/30'
                    : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-4">
                  {record.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : record.status === 'ongoing' ? (
                    <div className="w-5 h-5 rounded-full border-2 border-[#38BDF8] border-t-transparent animate-spin" />
                  ) : (
                    <XCircle className="w-5 h-5 text-yellow-400" />
                  )}
                  <div>
                    <p className="text-white text-sm font-medium">{record.date}</p>
                    <p className="text-[#64748B] text-xs">
                      {Math.floor(record.duration / 60)}分钟 · {record.uvIntensity.toFixed(1)} mW/cm²
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#475569]" />
              </button>
            ))}
          </div>
        </div>

        {/* Record Detail */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-4">治疗详情</h2>
          {selectedRecord && (
            <div className="space-y-4">
              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-[#64748B] text-xs mb-1">日期</p>
                <p className="text-white font-medium">{selectedRecord.date}</p>
              </div>
              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-[#64748B] text-xs mb-1">治疗时长</p>
                <p className="text-white font-medium">{Math.floor(selectedRecord.duration / 60)} 分钟</p>
              </div>
              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-[#64748B] text-xs mb-1">UV光照强度</p>
                <p className="text-white font-medium">{selectedRecord.uvIntensity.toFixed(1)} mW/cm²</p>
              </div>
              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-[#64748B] text-xs mb-1">累计UV剂量</p>
                <p className="text-white font-medium">{selectedRecord.uvDose.toFixed(2)} J/cm²</p>
              </div>
              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-[#64748B] text-xs mb-1">头皮温度</p>
                <p className="text-white font-medium">{selectedRecord.temperature.toFixed(1)} °C</p>
              </div>
              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-[#64748B] text-xs mb-1">症状评分</p>
                <p className="text-white font-medium">{selectedRecord.symptomScore.toFixed(1)} / 10</p>
              </div>
              <button className="w-full py-3 rounded-xl border border-[#334155] text-[#94A3B8] text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                导出详细报告
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
