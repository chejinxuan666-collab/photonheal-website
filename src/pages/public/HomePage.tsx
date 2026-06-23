import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ChevronRight,
  Shield,
  Zap,
  Clock,
  Smartphone,
  Users,
  TrendingDown,
  ArrowRight,
  Check,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
}

const painPoints = [
  { icon: Clock, label: '每次去医院耗时3-4小时', value: '3h+' },
  { icon: TrendingDown, label: '传统设备年治疗费', value: '¥8000+' },
  { icon: Users, label: '中国银屑病患者', value: '650万+' },
  { icon: Shield, label: '头皮受累比例', value: '50%-90%' },
]

const features = [
  {
    icon: Zap,
    title: '308nm+311nm 双波段协同光源',
    desc: '独创性集成308nm准分子光（起效快、针对重症）与311nm窄谱UVB（安全性高、适于维持），实现精准靶向病灶与长效缓解',
  },
  {
    icon: Smartphone,
    title: '智能剂量控制',
    desc: 'APP智能调控光照剂量与时长，根据病情自动推荐个性化治疗方案',
  },
  {
    icon: Shield,
    title: '多重安全防护',
    desc: '温度实时监测、自动断电保护、童锁设计、防过敏材料通过生物相容性测试',
  },
  {
    icon: Clock,
    title: '居家随时治疗',
    desc: '头罩式可穿戴设计，重量仅500g，航天级导热塑料与石墨烯复合薄膜轻量化方案，告别频繁往返医院，在家即可完成治疗',
  },
]

const steps = [
  { step: '01', title: '佩戴头罩', desc: '轻便头罩式设计，一键佩戴，贴合头部曲线' },
  { step: '02', title: 'APP连接', desc: '蓝牙连接手机APP，智能识别病情，推荐治疗方案' },
  { step: '03', title: '一键治疗', desc: '启动治疗程序，UV-LED精准照射病灶区域' },
  { step: '04', title: '完成提醒', desc: '治疗完成自动提醒，数据同步至医生端便于复诊' },
]

const comparisons = [
  { name: '治疗方式', traditional: '医院大型光疗仪', our: '家用头罩式光疗仪' },
  { name: '治疗频次', traditional: '每周2-3次往返医院', our: '每日居家治疗' },
  { name: '单次耗时', traditional: '3-4小时（含路程）', our: '15分钟纯治疗时间' },
  { name: '年治疗费用', traditional: '8000-12000元', our: '约2600元（设备摊销+耗材）' },
  { name: '隐私保护', traditional: '公共治疗室暴露患处', our: '完全私密的居家环境' },
  { name: '剂量精度', traditional: '人工设定，经验依赖', our: 'AI智能推荐，自动校准' },
  { name: '数据追踪', traditional: '纸质病历，难追溯', our: '云端自动记录，趋势可视化' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#1E293B]" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-[#38BDF8] mb-8">
              <Sparkles className="w-4 h-4" />
              头罩式光疗仪创新解决方案
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">头皮健康</span>
              <br />
              <span className="gradient-text">从"罩"开始</span>
            </h1>
            <p className="text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-lg">
              光穹智能头戴光疗仪是全球首创头罩式家用UV光疗仪，针对头皮银屑病和头癣患者，
              将医院级光疗效果带回家，让治疗更便捷、更私密、更精准。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/patient"
                className="px-8 py-4 rounded-full gradient-primary text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center gap-2"
              >
                进入患者端
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/product"
                className="px-8 py-4 rounded-full border border-[#334155] text-white font-semibold hover:bg-white/5 transition-all"
              >
                了解更多
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center border-2 border-blue-500/20">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-[#38BDF8] mx-auto mb-4" />
                  <p className="text-[#38BDF8] font-semibold text-lg">智能头戴光疗仪</p>
                  <p className="text-[#64748B] text-sm mt-1">光穹 · 头罩式光疗仪</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">头皮银屑病患者的困境</h2>
            <p className="text-[#94A3B8] text-lg">传统光疗方案面临的四大挑战</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all"
              >
                <item.icon className="w-8 h-8 text-[#38BDF8] mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <p className="text-sm text-[#94A3B8]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">核心技术优势</h2>
            <p className="text-[#94A3B8] text-lg">重新定义头皮光疗体验</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">四步开启光疗之旅</h2>
            <p className="text-[#94A3B8] text-lg">从佩戴到完成，操作简单直观</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg shadow-blue-500/25">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#94A3B8]">{s.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">与传统方案对比</h2>
            <p className="text-[#94A3B8] text-lg">数据说话，效果可见</p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#1E293B]">
                  <th className="py-4 px-6 text-[#94A3B8] font-medium text-sm">对比维度</th>
                  <th className="py-4 px-6 text-[#94A3B8] font-medium text-sm">传统光疗仪</th>
                  <th className="py-4 px-6 text-[#38BDF8] font-medium text-sm">智罩光疗</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.name} className="border-b border-[#1E293B]/50 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-white text-sm font-medium">{row.name}</td>
                    <td className="py-4 px-6 text-[#94A3B8] text-sm">{row.traditional}</td>
                    <td className="py-4 px-6 text-[#38BDF8] text-sm flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      {row.our}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">准备好改变头皮健康了吗？</h2>
              <p className="text-[#94A3B8] text-lg mb-8 max-w-xl mx-auto">
                加入数万名正在使用智罩光疗的患者，体验居家光疗的便捷与高效
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/patient"
                  className="px-10 py-4 rounded-full gradient-primary text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                >
                  立即体验
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="px-10 py-4 rounded-full border border-[#334155] text-white font-semibold hover:bg-white/5 transition-all"
                >
                  联系我们
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
