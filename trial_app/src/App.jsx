import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
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
          path = '/home'
          element={<Home/>}
           />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      
    </div>
  )
}

export default App
