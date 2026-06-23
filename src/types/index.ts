export interface TreatmentRecord {
  id: string
  date: string
  duration: number
  uvIntensity: number
  uvDose: number
  temperature: number
  status: 'completed' | 'interrupted' | 'ongoing'
  symptomScore: number
  notes?: string
}

export interface Doctor {
  id: string
  name: string
  title: string
  hospital: string
  department: string
  avatar: string
  online: boolean
  rating: number
  consultationCount: number
  specialties: string[]
}

export interface Message {
  id: string
  senderId: string
  senderRole: 'patient' | 'doctor'
  content: string
  timestamp: string
  type: 'text' | 'report' | 'image'
  reportData?: TreatmentRecord
}

export interface PatientProfile {
  id: string
  name: string
  age: number
  gender: '男' | '女'
  phone: string
  email: string
  avatar: string
  condition: string
  conditionSeverity: '轻度' | '中度' | '重度'
  onsetDate: string
  allergies: string[]
  deviceId: string
  deviceStatus: 'connected' | 'disconnected'
  treatmentGoal: number
  reminderEnabled: boolean
  reminderTime: string
}

export interface DeviceData {
  connected: boolean
  batteryLevel: number
  deviceName: string
  firmwareVersion: string
  currentTreatment: {
    active: boolean
    startTime?: string
    duration: number
    remainingTime: number
    uvIntensity: number
    temperature: number
    progress: number
  } | null
}

export interface VitalSign {
  time: string
  uvIntensity: number
  temperature: number
  batteryLevel: number
}
