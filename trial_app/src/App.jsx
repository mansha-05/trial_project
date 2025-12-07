import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Page/Home/Home'
import Reserve from './Page/Reserve/Reserve'
import Menu from './pages/Menu/Menu';
import RoleSelection from './pages/RoleSelection/RoleSelection'
function App() {

  return (

      <div>
        <Routes>
           <Route
            path = '/'
            element={<RoleSelection/>}
          />
            <Route
            path='/home'
            element={<Home />}
            /> 
            <Route
            path='/reserve'
            element={<Reserve />}
            />
            <Route path="/menu" element={<Menu />} /> 
        </Routes>
        
      </div>    
  
  )
}

export default App
