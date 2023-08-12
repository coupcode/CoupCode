import React from 'react'
import img1 from './imgs/img-1.jpg'
import img2 from './imgs/img-2.jpg'
import img3 from './imgs/img-3.jpg'

const About = () => {
  return (
    <div className="w-full lg:py-8 sm:pt-6 pt-4 pb-2">
        <div className="2xl:w-[65%] xl:w-[70%] w-[75%] h-full mx-auto flex flex-col justify-center items-center">
            <div className="xs:pb-6 pb-4 flex flex-col items-center">
                <h2 className="pb-2 lg:text-2xl md:text-xl text-base font-bold capitalize">We are specialized in</h2>
                <div className="lg:w-[25px] lg:h-[2px] lg:mb-2 md:mb-4 mb-3 w-[20px] h-[1px] bg-brownClr"></div>
                <p className="lg:text-base md:text-[14px] text-[12px] text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, facilis impedit.
                </p>
            </div>
            <div className="w-full pb-4 flex flex-wrap gap-3 lg:justify-center md:justify-center sm:justify-start justify-center items-center">
              <div className="mb-4 2xl:w-[320px] xl:w-[280px] lg:w-[230px] md:w-[220px] sm:w-[230px] xs:w-[250px] w-[220px] mr-2">
                <div className="2xl:w-[320px] xl:w-[280px] lg:w-[230px] xl:h-[210px] lg:h-[190px] md:w-[220px] md:h-[150px] sm:w-[230px] sm:h-[160px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px]  md:mb-4 mb-2">
                  <img src={img1} alt="About Image" className="w-full h-full object-cover" />
                </div>
                <h2 className="md:pb-2 sm:pb-[5px] lg:text-lg sm:text-sm xs:text-base text-sm font-bold capitalize">short & good plan</h2>
                <p className="pb-2 lg:text-sm sm:text-xs text-xs leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nemo facere veritatis cupiditate molestias qui nihil, unde at.
                </p>
                <small className="lg:text-xs sm:text-[12px] xs:text-sm text-xs font-bold uppercase text-brownClr">read more</small>
              </div>
              <div className="mb-4 2xl:w-[320px] xl:w-[280px] lg:w-[230px] sm:w-[230px] xs:w-[250px] w-[220px] md:w-[220px] mr-2">
                <div className="2xl:w-[320px] xl:w-[280px] xl:h-[210px] lg:w-[230px] lg:h-[190px] md:w-[220px] md:h-[150px] sm:w-[230px] sm:h-[160px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px] md:mb-4 mb-2">
                  <img src={img2} alt="About Image" className="w-full h-full object-cover" />
                </div>
                <h2 className="md:pb-2 sm:pb-[5px] lg:text-lg sm:text-sm xs:text-base text-sm font-bold capitalize">short & good plan</h2>
                <p className="pb-2 lg:text-sm sm:text-xs text-xs leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Nemo facere veritatis cupiditate molestias qui nihil, unde at.
                </p>
                <small className="lg:text-xs sm:text-[12px] xs:text-sm text-xs font-bold uppercase text-brownClr">read more</small>
              </div>
              <div className="mb-4 2xl:w-[320px] xl:w-[280px] lg:w-[230px] sm:w-[230px] xs:w-[250px] w-[220px] md:w-[220px] mr-2">
                <div className="2xl:w-[320px] xl:w-[280px] xl:h-[210px] lg:w-[230px] lg:h-[190px] md:w-[220px] md:h-[150px] sm:w-[230px] sm:h-[160px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px] md:mb-4 mb-2">
                  <img src={img2} alt="About Image" className="w-full h-full object-cover" />
                </div>
                <h2 className="md:pb-2 sm:pb-[5px] lg:text-lg sm:text-sm xs:text-base text-sm font-bold capitalize">short & good plan</h2>
                <p className="pb-2 lg:text-sm sm:text-xs text-xs leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Nemo facere veritatis cupiditate molestias qui nihil, unde at.
                </p>
                <small className="lg:text-xs sm:text-[12px] xs:text-sm text-xs font-bold uppercase text-brownClr">read more</small>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About