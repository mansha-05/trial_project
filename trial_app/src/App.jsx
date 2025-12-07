import { useState } from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AdminHome from './pages/Admin/AdminHome/AdminHome'
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard'
// import StaffManagement from './pages/Admin/StaffManagement/StaffManagement'

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='home' element={<Home/>}>
          <Route path='/home/login' element={<Login/>}/>
          <Route path='/home/register' element={<Register/>}/>
        </Route>
        {/* <Route path='/' element={<Navigate to='/admin_home'/>}/>
          <Route path='/admin_home' element={<AdminHome/>}>
          <Route path='/admin_home/dashboard' element={<AdminDashboard/>}/>
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
