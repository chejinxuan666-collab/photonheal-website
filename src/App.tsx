import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import PatientLayout from './components/layout/PatientLayout'
import HomePage from './pages/public/HomePage'
import ProductPage from './pages/public/ProductPage'
import AboutPage from './pages/public/AboutPage'
import PatientLoginPage from './pages/patient/PatientLoginPage'
import DashboardPage from './pages/patient/DashboardPage'
import RecordsPage from './pages/patient/RecordsPage'
import ConsultationPage from './pages/patient/ConsultationPage'
import ProfilePage from './pages/patient/ProfilePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Patient routes */}
        <Route path="/patient" element={<PatientLoginPage />} />
        <Route path="/patient" element={<PatientLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="records" element={<RecordsPage />} />
          <Route path="consult" element={<ConsultationPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
