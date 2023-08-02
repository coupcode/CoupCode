import React from 'react'
import Hero from "../../../assets/img/hero-img.jpg"

const HeroPage = () => {
  return (
    <div className="w-full min-h-[30rem]">
        <div className="w-full h-[30rem]"
        style={{  
            backgroundImage: `url(${Hero})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} 
          >
            
          </div>
    </div>
  )
}

export default HeroPage