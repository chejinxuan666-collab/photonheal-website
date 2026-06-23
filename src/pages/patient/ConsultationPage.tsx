import { useState, useRef, useEffect } from 'react'
import {
  Send,
  Paperclip,
  FileText,
  Phone,
  Video,
  Star,
  Search,
} from 'lucide-react'
import { mockDoctors, mockMessages } from '../../data/mockData'
import type { Message } from '../../types'

export default function ConsultationPage() {
  const [activeDoctor, setActiveDoctor] = useState(mockDoctors[0])
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const newMsg: Message = {
      id: `M${Date.now()}`,
      senderId: 'P001',
      senderRole: 'patient',
      content: input,
      timestamp: new Date().toISOString(),
      type: 'text',
    }
    setMessages([...messages, newMsg])
    setInput('')

    // Simulate doctor reply
    setTimeout(() => {
      const reply: Message = {
        id: `M${Date.now() + 1}`,
        senderId: activeDoctor.id,
        senderRole: 'doctor',
        content: '收到您的消息。根据最新数据，您的症状在持续改善中。请继续保持目前的治疗方案，有任何不适随时告诉我。',
        timestamp: new Date(Date.now() + 30000).toISOString(),
        type: 'text',
      }
      setMessages((prev) => [...prev, reply])
    }, 2000)
  }

  const filteredDoctors = mockDoctors.filter(
    (d) =>
      d.name.includes(searchTerm) ||
      d.hospital.includes(searchTerm) ||
      d.specialties.some((s) => s.includes(searchTerm))
  )

  const formatTime = (ts: string) => {
    const date = new Date(ts)
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Doctor List Sidebar */}
      <div className="w-80 shrink-0 glass rounded-2xl p-4 flex flex-col">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="搜索医生..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0B1120] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#475569] border border-[#1E293B] focus:border-[#38BDF8] outline-none transition-colors"
          />
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto">
          {filteredDoctors.map((doctor) => (
            <button
              key={doctor.id}
              onClick={() => setActiveDoctor(doctor)}
              className={`w-full p-3 rounded-xl transition-all text-left ${
                activeDoctor.id === doctor.id
                  ? 'bg-blue-500/10 border border-blue-500/20'
                  : 'hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    {doctor.name[0]}
                  </div>
                  {doctor.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#0F172A]" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white text-sm font-semibold truncate">{doctor.name}</p>
                    <p className="text-[#64748B] text-xs shrink-0">{doctor.title}</p>
                  </div>
                  <p className="text-[#64748B] text-xs truncate">{doctor.hospital}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-yellow-400 text-xs font-medium">{doctor.rating}</span>
                    <span className="text-[#475569] text-xs">
                      · {doctor.consultationCount}次咨询
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass rounded-2xl flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1E293B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
              {activeDoctor.name[0]}
            </div>
            <div>
              <p className="text-white font-semibold">{activeDoctor.name}</p>
              <p className="text-[#64748B] text-xs">
                {activeDoctor.hospital} · {activeDoctor.department}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[#94A3B8]">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[#94A3B8]">
              <Video className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.senderRole === 'patient' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${msg.senderRole === 'patient' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.senderRole === 'patient'
                      ? 'bg-blue-500/20 border border-blue-500/20 text-white'
                      : 'bg-[#1E293B] text-[#E2E8F0]'
                  }`}
                >
                  {msg.type === 'report' && msg.reportData ? (
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-[#38BDF8]" />
                      <div>
                        <p className="font-medium text-sm">{msg.content}</p>
                        <p className="text-xs text-[#64748B] mt-1">
                          {msg.reportData.date} · 评分 {msg.reportData.symptomScore.toFixed(1)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  )}
                </div>
                <span className="text-[10px] text-[#475569]">{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#1E293B]">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[#64748B]">
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[#64748B]"
              onClick={() => {
                const reportMsg: Message = {
                  id: `M${Date.now()}`,
                  senderId: 'P001',
                  senderRole: 'patient',
                  content: '最近一次治疗报告',
                  timestamp: new Date().toISOString(),
                  type: 'report',
                  reportData: {
                    id: 'TR-SHARE',
                    date: '2026-05-11',
                    duration: 720,
                    uvIntensity: 8.5,
                    uvDose: 10.2,
                    temperature: 37.1,
                    status: 'completed',
                    symptomScore: 3.5,
                  },
                }
                setMessages([...messages, reportMsg])
              }}
            >
              <FileText className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="输入您的问题..."
              className="flex-1 bg-[#0B1120] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] border border-[#1E293B] focus:border-[#38BDF8] outline-none transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-3 rounded-xl gradient-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
