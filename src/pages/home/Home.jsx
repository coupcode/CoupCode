import React from 'react'
import Header from '../../components/header/Header'
import HeroPage from './includes/HeroPage'
import About from './includes/About'
import Services from './includes/Services'
import Work from './includes/Work'
import Brand from './includes/Brand'
import Testimonial from './includes/Testimonial'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className="w-full">
        <Header />
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