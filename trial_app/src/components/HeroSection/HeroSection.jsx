import React from 'react'
import img1 from "../../images/img1.jpeg";
import "./HeroSection.css"
import { useNavigate } from 'react-router-dom';
function HeroSection() {
  const navigate=useNavigate()
  return (
    // <div>
    //   n<h1>Experience Culinary Excellence</h1>
    // </div>
    <div className='hero'>
        <div className='hero-text'>
            <span className='tag'>Welcome to Food Nova Restarunt</span>
            <h1>Experience Culinary Excellence</h1>
            <p>Indulge in a delightful dining experience with our carefully crafted menu, featuring fresh ingredients and authentic flavors from around the world </p>
              <div className='buttons'>
           <button type="button" className="btn btn-primary">View Menu</button>
           <button type="button" className="btn btn-secondary" onClick={()=>navigate("/reserve")}>Reserve Tables</button>
        </div>
        </div>
        <div className='hero-img'>
            <img src={img1} alt="sample" width="300"/>
        </div>
      
        
    </div>
  )
}

export default HeroSection
/*Experience Culinary Excellence
Indulge in a delightful dining experience with our carefully crafted menu, featuring fresh ingredients and authentic flavors from around the world */