import React from 'react'
import Hero from "../../../assets/img/hero-img.jpg"
import Button from '../../../components/Button'

const HeroPage = () => {
  const data = "Learn more";

  return (
    <div className="w-full min-h-[15rem]">
      <div className="w-full xl:h-[35rem] lg:h-[30rem] md:h-[25rem] xs:h-[20rem] h-[15rem] relative">
        <div className="w-full h-full">
          <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full bg-[rgba(0, 0, 0, .8)] sm:mt-[1rem] absolute top-0 right-0 left-0 bottom-0 ">
          <div className="2xl:w-[65%] xl:w-[70%] w-[75%] h-full mx-auto flex flex-col justify-center items-start">
            <div className="sm:w-[60%] xs:w-[65%] w-[85%] py-4">
              <h2 className="xl:py-10 md:py-6 sm:pt-2 sm:pb-5 xs:pb-6 pb-2 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-xl text-whiteClr font-bold capitalize">Personal advisor <br /> services</h2>
              <p className="xl:pb-6 lg:pb-8 sm:pb-4 xs:pb-8 pb-2 xl:text-xl lg:text-lg md:text-sm sm:text-xs text-[10px] text-whiteClr font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Harum tempora aspernatur maiores delectus tenetur.
              </p>
              <div className="flex xl:pb-6 lg:pb-0 md:mt-10 sm:mt-3 xs:mt-2 mt-2" >
                <div className="mr-4">
                  <Button data={data} />
                </div>
                <div>
                  <button className="md:py-3 xs:py-2 py-2 md:px-6 xs:px-3 px-2 bg-whiteClr text-blackClr md:text-xs xs:text-[10px] text-[6px] font-semibold uppercase shadow hover:scale-95 hover:shadow-md transition-all">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroPage