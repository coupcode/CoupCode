import React, { useState } from 'react'
import Header from '../../components/header/Header'
import HeroPage from './includes/HeroPage'
import About from './includes/About'
import Services from './includes/Services'
import Work from './includes/Work'
import Brand from './includes/Brand'
import Testimonial from './includes/Testimonial'
import Footer from '../../components/footer/Footer'
import ResponsiveNav from '../../components/responsive-navbar/ResponsiveNav'

const Home = () => {
  const [isNav, setIsNav] = useState(false)
  return (
    <div className="">
      { isNav && <ResponsiveNav setNav={()=>setIsNav(!isNav)} /> }
        <Header setNav={()=>setIsNav(!isNav)}/>
        <HeroPage />
        <About />
        <Services />
        <Work />
        <Brand />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home