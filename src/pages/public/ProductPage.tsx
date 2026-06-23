import { motion } from 'framer-motion'
import {
  Cpu,
  Thermometer,
  Battery,
  Wifi,
  Shield,
  Clock,
  Sun,
  Weight,
  Check,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'

const specs = [
  { icon: Sun, label: '光源类型', value: '308nm+311nm 窄谱UVB LED' },
  { icon: Cpu, label: '照射强度', value: '5-15 mW/cm² 可调' },
  { icon: Clock, label: '治疗时长', value: '5-20分钟 / 次' },
  { icon: Battery, label: '电池续航', value: '约90分钟连续使用' },
  { icon: Weight, label: '产品重量', value: '500g' },
  { icon: Wifi, label: '连接方式', value: '蓝牙5.2 / 低功耗' },
  { icon: Thermometer, label: '温控范围', value: '36-40°C 自动调节' },
  { icon: Shield, label: '安全认证', value: '医疗器械注册中' },
]

const techDetails = [
  {
    title: '308nm+311nm 双波段协同光源',
    content:
      '独创性集成308nm准分子光（起效快、针对重症）与311nm窄谱UVB（安全性高、适于维持）。13组智能LED分区矩阵，采用高功率氮化铝基底LED阵列，光源寿命长达10000小时，光衰<5%。',
  },
  {
    title: 'AI智能剂量算法',
    content:
      '基于患者皮损面积、严重程度（PASI评分）、皮肤类型等多维度数据，AI算法自动推荐最佳光照剂量和治疗时长，避免剂量不足或过量。治疗数据持续学习优化。',
  },
  {
    title: '实时温度监测与保护',
    content:
      '内置多点温度传感器，实时监测头皮温度。当温度超过39°C时自动降低光照强度，超过40°C时自动暂停治疗并通知用户，确保治疗安全。',
  },
  {
    title: '人体工学头罩设计',
    content:
      '采用记忆海绵内衬+透气网面结构，适配不同头型（头围25-30cm）。LED灯珠环形排布，13组智能分区矩阵，确保360°均匀覆盖头皮各区域，避免照射死角。航天级导热塑料+石墨烯复合薄膜轻量化设计，整机重量仅500g，长时间佩戴无负担。',
  },
]

const faqs = [
  {
    q: '智罩光疗适用于哪些人群？',
    a: '主要适用于轻中度头皮银屑病（牛皮癣）患者、头癣患者。不适用于重度全身性银屑病、光敏感性疾病患者。建议使用前咨询皮肤科医生。',
  },
  {
    q: '每天需要使用多长时间？',
    a: '根据病情严重程度，建议每次治疗5-20分钟，每周3-7次。具体方案由APP根据您的病情评估自动推荐，医生可远程调整方案。',
  },
  {
    q: '会有副作用吗？',
    a: '308nm+311nm双波段UVB为窄谱中波紫外线，相比传统宽谱UVB副作用更小。少数使用者可能出现轻微干燥、发红，通常在治疗后2-4小时消退。产品内置温控保护，大幅降低灼伤风险。',
  },
  {
    q: '治疗多久能看到效果？',
    a: '多数患者在坚持使用2-4周后可见鳞屑减少、瘙痒缓解；8-12周后皮损面积显著缩小。具体效果因个体差异而异。',
  },
  {
    q: '可以在家自行操作吗？',
    a: '完全可以。智罩光疗专为家用设计，APP提供全流程引导，AI智能设定剂量。初期建议在医生指导下制定治疗方案，后续即可居家独立操作。',
  },
]

export default function ProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">智能头戴光疗仪</span>
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              头罩式308nm+311nm双波段窄谱UVB光疗仪，为头皮银屑病和头癣患者提供医院级光疗效果的家用解决方案
            </p>
          </motion.div>

          {/* Product Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto mb-20"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center border-2 border-blue-500/20">
                <div className="text-center">
                  <Sun className="w-20 h-20 text-[#38BDF8] mx-auto mb-2" />
                  <p className="text-[#38BDF8] font-bold text-2xl">308+311nm</p>
                  <p className="text-[#64748B] text-sm">双波段UVB LED</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">产品参数</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-5 text-center hover:border-blue-500/20 transition-all"
              >
                <spec.icon className="w-6 h-6 text-[#38BDF8] mx-auto mb-3" />
                <p className="text-xs text-[#64748B] mb-2">{spec.label}</p>
                <p className="text-sm font-semibold text-white">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Details */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">核心技术原理</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {techDetails.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  {tech.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">{tech.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white font-medium text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#64748B] transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-[#94A3B8] text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
