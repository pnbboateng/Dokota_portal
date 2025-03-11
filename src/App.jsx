import { useState } from 'react'

import Login from './pages/Login'
import { Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Otp from './pages/Otp'
import Payments from './components/Payments'
import Dashboardcontent from './components/Dashboardcontent'
import Approvals from './components/Approvals'
import UsersPage from './components/UsersPage'
import Settings from './components/Settings'



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
    <Routes>
    <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/otp" element={<Otp/>} />
    <Route path='/app' element={<Dashboard />}>
    <Route path="dashboard" element={<Dashboardcontent />} /> 
        <Route path="payments" element={<Payments />} /> 
        <Route path="approvals" element={<Approvals />} /> 
        <Route path="users" element={<UsersPage />} /> 
        <Route path="settings" element={<Settings />} />
        
        
      </Route>
   
    </Routes>
    </>
  )
}

export default App
