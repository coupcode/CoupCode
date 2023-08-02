import React from 'react'
import img1 from './imgs/img-1.jpg'
import img2 from './imgs/img-2.jpg'
import img3 from './imgs/img-3.jpg'

const About = () => {
  return (
    <div className="w-full py-8">
        <div className="w-[65%] h-full mx-auto flex flex-col justify-center items-center">
            <div className="pb-6 flex flex-col items-center">
                <h2 className="pb-2 text-2xl font-bold capitalize">We are specialized in</h2>
                <div className="w-[25px] h-[2px] mb-2 bg-brownClr"></div>
                <p className="text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, facilis impedit.
                </p>
            </div>
            <div className="w-full pb-4 flex justify-between items-center">
              <div className="w-[280px] mr-2">
                <div className="w-[280px] mb-2">
                  <img src={img1} alt="About Image" className="w-full h-full object-cover" />
                </div>
                <h2 className="pb-2 text-lg font-bold capitalize">short & good plan</h2>
                <p className="pb-2 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Nemo facere veritatis cupiditate molestias qui nihil, unde at.
                </p>
                <small className="text-xs font-bold uppercase text-brownClr">read more</small>
              </div>
              <div className="w-[280px] mr-2">
                <div className="w-[280px] mb-2">
                  <img src={img2} alt="About Image" className="w-full h-full object-cover" />
                </div>
                <h2 className="pb-2 text-lg font-bold capitalize">short & good plan</h2>
                <p className="pb-2 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Nemo facere veritatis cupiditate molestias qui nihil, unde at.
                </p>
                <small className="text-xs font-bold uppercase text-brownClr">read more</small>
              </div>
              <div className="w-[280px] mr-3">
                <div className="w-[280px] mb-2">
                  <img src={img3} alt="About Image" className="w-full h-full object-cover" />
                </div>
                <h2 className="pb-2 text-lg font-bold capitalize">short & good plan</h2>
                <p className="pb-2 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Nemo facere veritatis cupiditate molestias qui nihil, unde at.
                </p>
                <small className="text-xs font-bold uppercase text-brownClr">read more</small>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default About