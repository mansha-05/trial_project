import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './Page/Login/login'
import Home from './Page/Home/Home'
import Reserve from './Page/Reserve/Reserve'
function App() {

  return (
    <>
      <div>
        <Routes>
            <Route
            path='/home'
            element={<Home />}
            /> 
            <Route
            path='/reserve'
            element={<Reserve />}
            /> 
        </Routes>
        
      </div>    
    </>
  )
}

export default App
