import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Mail, Globe, Heart, Target, Lightbulb } from 'lucide-react'

const team = [
  {
    name: '严诗语',
    role: '总经理',
    dept: '金融与精算数学',
    desc: '负责公司战略决策与商业化落地，统筹团队建设与经营管理。艺术体操国家一级运动员，主导省级创新创业项目',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: '王忆航',
    role: '销售部部长 / 财务部副部长',
    dept: '金融与精算数学',
    desc: '制定销售策略、开拓市场、管理销售团队。实习于中信证券，获评"最佳飞鹰"，精通Wind、Python、SQL及蒙特卡洛模拟',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: '车晋轩',
    role: '生产部部长',
    dept: '电子科学与技术',
    desc: '负责产品与技术研发创新，专业排名全校前5%。参与IGZO TFT仿生感知器件、钙钛矿光电探测器等多项科研项目',
    color: 'from-green-500 to-teal-500',
  },
  {
    name: '陈可妮',
    role: '财务部部长',
    dept: '经济与金融',
    desc: '制定财务管理制度，编制年度财务预算，审核财务报表，管理资金运作与成本核算，协调税务银行等外部关系',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: '周天慈',
    role: '行政部部长 / 生产部副部长',
    dept: '生物制药',
    desc: '制定行政制度并监督执行，协助生产计划管理。获CSP-JS信息学奥赛三等奖，多次组织校级大型活动',
    color: 'from-cyan-500 to-blue-500',
  },
]

const vision = [
  { icon: Target, title: '使命', desc: '让每一位头皮银屑病和头癣患者都能享受到便捷、安全、有效的居家光疗' },
  { icon: Lightbulb, title: '愿景', desc: '成为全球头皮光疗领域的创新领导者，以科技之力改善皮肤健康' },
  { icon: Heart, title: '价值观', desc: '以患者为中心，以创新为驱动，以安全为底线，以效果为追求' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-[#38BDF8] mb-6">
              <GraduationCap className="w-4 h-4" />
              西交利物浦大学 · 挑战者杯参赛项目
            </div>
            <h1 className="text-5xl font-bold mb-6">
              关于<span className="gradient-text">我们</span>
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              我们是一支来自西交利物浦大学的跨学科团队，致力于用科技创新解决头皮健康问题
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {vision.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">核心团队</h2>
          <p className="text-[#94A3B8] text-center mb-12">
            跨学科协作，从工程到临床的全链路创新
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center hover:border-blue-500/20 transition-all group"
              >
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl group-hover:scale-105 transition-transform`}
                >
                  {member.name[0]}
                </div>
                <h3 className="text-white font-bold mb-1">{member.name}</h3>
                <p className="text-[#38BDF8] text-xs font-medium mb-1">{member.role}</p>
                <p className="text-[#64748B] text-xs mb-2">{member.dept}</p>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">联系我们</h2>
            <p className="text-[#94A3B8] mb-8">如有任何问题或合作意向，欢迎通过以下方式联系我们</p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="w-6 h-6 text-[#38BDF8] mx-auto mb-3" />
                <p className="text-white text-sm font-medium mb-1">地址</p>
                <p className="text-[#64748B] text-xs">江苏省苏州市工业园区<br />西交利物浦大学</p>
              </div>
              <div className="text-center">
                <Mail className="w-6 h-6 text-[#38BDF8] mx-auto mb-3" />
                <p className="text-white text-sm font-medium mb-1">邮箱</p>
                <p className="text-[#64748B] text-xs">66994093@qq.com</p>
              </div>
              <div className="text-center">
                <Globe className="w-6 h-6 text-[#38BDF8] mx-auto mb-3" />
                <p className="text-white text-sm font-medium mb-1">更多信息</p>
                <p className="text-[#64748B] text-xs">www.zhizhao-phototherapy.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
