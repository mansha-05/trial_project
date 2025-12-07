import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureSection from '../../components/FeatureSection/Features'
import PopularDishes from '../../components/PopularDishes/Populardishes'

function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection/>
      <PopularDishes/>
      
      {/* <h1>Inside Home Section</h1> */}
     
    </div>
  )
}

export default Home
