import React from 'react'
import Hero from "../../../assets/img/hero-img.jpg"
import Button from '../../../components/Button'

const HeroPage = () => {
  return (
    <div className="w-full min-h-[30rem]">
      <div className="w-full h-[30rem]"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(70%)'
        }}
      >
        <div className="w-[65%] h-full mx-auto flex flex-col justify-center items-start">
          <div className="w-[60%] py-4">
            <h2 className="py-4 text-6xl text-blackClr font-extrabold capitalize ">Personal advisor services</h2>
            <p className="pb-6 text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Harum tempora aspernatur maiores delectus tenetur.
            </p>
            <div className="flex pb-6 ">
              <div className="mr-4">
                <Button />
              </div>
              <div>
                <button className="py-3 px-6 bg-whiteClr text-blackClr text-xs font-semibold uppercase shadow hover:scale-95 hover:shadow-md transition-all">Learn more</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroPage