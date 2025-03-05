import { useState } from 'react'

import Login from './pages/Login'
import { Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Otp from './pages/Otp'



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
    <Routes>
    <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/otp" element={<Otp/>} />
    <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
    </>
  )
}

export default App
