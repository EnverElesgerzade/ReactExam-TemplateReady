import React from 'react'
import HeaderSection from '../../components/Home/HeaderSection'
import HeroSection from '../../components/Home/HeroSection'
import TwoSection from '../../components/Home/TwoSection'
import ThreeSection from '../../components/Home/ThreeSection'
import ProductSection from '../../components/Home/ProductSection'

const Home = () => {
  return (
    <div>
        <HeaderSection />
        <HeroSection />
        <TwoSection/>
        <ThreeSection />
        <ProductSection />
    </div>
  )
}

export default Home