import type { TreatmentRecord, Doctor, Message, PatientProfile, DeviceData, VitalSign } from '../types'

export const mockDeviceData: DeviceData = {
  connected: true,
  batteryLevel: 85,
  deviceName: '光穹 智能头戴光疗仪',
  firmwareVersion: 'v2.4.1',
  currentTreatment: {
    active: true,
    startTime: '2026-05-11T14:30:00',
    duration: 900,
    remainingTime: 423,
    uvIntensity: 8.5,
    temperature: 37.2,
    progress: 53,
  },
}

export const mockVitalSigns: VitalSign[] = Array.from({ length: 30 }, (_, i) => ({
  time: `${14 + Math.floor(i / 6)}:${String((i % 6) * 10).padStart(2, '0')}`,
  uvIntensity: 7 + Math.random() * 3,
  temperature: 36.5 + Math.random() * 1.5,
  batteryLevel: 100 - i * 0.5 - Math.random() * 2,
}))

export const mockTreatmentRecords: TreatmentRecord[] = Array.from({ length: 20 }, (_, i) => {
  const date = new Date('2026-05-10')
  date.setDate(date.getDate() - i)
  const duration = 600 + Math.floor(Math.random() * 600)
  return {
    id: `TR-${String(i + 1).padStart(4, '0')}`,
    date: date.toISOString().split('T')[0],
    duration,
    uvIntensity: 7 + Math.random() * 3,
    uvDose: (duration / 60) * (7 + Math.random() * 3) * 0.1,
    temperature: 36.5 + Math.random() * 1.5,
    status: i === 0 ? 'ongoing' : Math.random() > 0.1 ? 'completed' : 'interrupted',
    symptomScore: Math.min(10, Math.max(1, 10 - i * 0.35 + (Math.random() - 0.5) * 2)),
  }
})

export const mockDoctors: Doctor[] = [
  {
    id: 'D001',
    name: '王建明',
    title: '主任医师',
    hospital: '上海华山医院',
    department: '皮肤科',
    avatar: '',
    online: true,
    rating: 4.9,
    consultationCount: 3256,
    specialties: ['银屑病', '头癣', '光疗治疗'],
  },
  {
    id: 'D002',
    name: '李芳华',
    title: '副主任医师',
    hospital: '北京协和医院',
    department: '皮肤科',
    avatar: '',
    online: true,
    rating: 4.8,
    consultationCount: 2189,
    specialties: ['头皮疾病', '激光治疗', '中西医结合'],
  },
  {
    id: 'D003',
    name: '陈志远',
    title: '主治医师',
    hospital: '广东省皮肤病医院',
    department: '皮肤外科',
    avatar: '',
    online: false,
    rating: 4.7,
    consultationCount: 1543,
    specialties: ['银屑病', '生物制剂治疗', '光疗'],
  },
  {
    id: 'D004',
    name: '张雪梅',
    title: '主任医师',
    hospital: '浙江大学医学院附属第一医院',
    department: '皮肤科',
    avatar: '',
    online: true,
    rating: 4.9,
    consultationCount: 4102,
    specialties: ['儿童头癣', '银屑病', '过敏性皮肤病'],
  },
]

export const mockMessages: Message[] = [
  {
    id: 'M001',
    senderId: 'D001',
    senderRole: 'doctor',
    content: '您好，我是王医生。看了您上传的治疗记录，最近的症状评分有明显改善，UV光照剂量也控制得很好。',
    timestamp: '2026-05-10T09:30:00',
    type: 'text',
  },
  {
    id: 'M002',
    senderId: 'P001',
    senderRole: 'patient',
    content: '王医生您好！是的，最近感觉头皮鳞屑减少了很多，瘙痒也明显缓解了。就是有时候照完之后头皮有点微微发热，这正常吗？',
    timestamp: '2026-05-10T09:32:00',
    type: 'text',
  },
  {
    id: 'M003',
    senderId: 'D001',
    senderRole: 'doctor',
    content: '轻微发热是正常的光疗反应，说明皮肤在接受有效剂量的UV照射。只要温度不超过38°C，没有明显红肿或疼痛就无需担心。建议您在治疗后涂抹我们推荐的保湿修复霜。',
    timestamp: '2026-05-10T09:35:00',
    type: 'text',
  },
  {
    id: 'M004',
    senderId: 'P001',
    senderRole: 'patient',
    content: '好的，谢谢医生。我把最近一周的治疗报告发您看一下。',
    timestamp: '2026-05-10T09:36:00',
    type: 'text',
  },
  {
    id: 'M005',
    senderId: 'P001',
    senderRole: 'patient',
    content: '最近一周治疗报告',
    timestamp: '2026-05-10T09:37:00',
    type: 'report',
    reportData: mockTreatmentRecords[0],
  },
  {
    id: 'M006',
    senderId: 'D001',
    senderRole: 'doctor',
    content: '报告收到了。数据显示您的治疗依从性很好，每天坚持使用，UV剂量也在推荐范围内。继续保持这个频率，预计再坚持2-3周，鳞屑面积会进一步减少60%以上。如果有任何不适随时联系我。',
    timestamp: '2026-05-10T09:40:00',
    type: 'text',
  },
]

export const mockPatientProfile: PatientProfile = {
  id: 'P001',
  name: '张明',
  age: 32,
  gender: '男',
  phone: '138****6789',
  email: 'zhangming@example.com',
  avatar: '',
  condition: '头皮银屑病',
  conditionSeverity: '中度',
  onsetDate: '2024-03-15',
  allergies: ['青霉素', '磺胺类'],
  deviceId: 'ZZ-PRO1-2026-0421',
  deviceStatus: 'connected',
  treatmentGoal: 30,
  reminderEnabled: true,
  reminderTime: '20:00',
}

export const symptomTrendData = Array.from({ length: 12 }, (_, i) => ({
  week: `第${i + 1}周`,
  score: Math.min(10, Math.max(1, 9 - i * 0.6 + (Math.random() - 0.5) * 1.5)),
 鳞屑面积: Math.max(5, 85 - i * 7 + (Math.random() - 0.5) * 10),
 瘙痒程度: Math.max(1, 8 - i * 0.5 + (Math.random() - 0.5) * 2),
}))

export const weeklySummary = {
  totalTreatments: 7,
  totalDuration: 98,
  avgUvDose: 12.5,
  avgSymptomScore: 3.8,
  compliance: 100,
  improvement: '+15%',
}
