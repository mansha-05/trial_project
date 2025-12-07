import { useState } from 'react'
import {Link,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Orders from './Pages/Orders/Orders'
import './App.css'

function App() {

  return (
    <div>
      <ul>
        <li>
          <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to ='/Orders'>Orders</Link>
          </li>
          </ul>
      <Routes>
         
      <Route
      path='/Home'
          element={<Home/>}
      />
      <Route
      path='/Orders'
          element={<Orders/>}
      />

      </Routes>
      
    </div>
  )
}

export default App
