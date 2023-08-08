import React from 'react'
import { BsUmbrella } from 'react-icons/bs'
import Button from '../../../components/Button'

const Brand = () => {
    const data = "Learn more"
  return (
    <div className="w-full">
        <div className="w-full bg-gray-100">
            <div className="2xl:w-[65%] xl:w-[70%] w-[75%] mx-auto pt-8 pb-2 flex flex-wrap justify-between items-center">
                <div className="text-6xl text-gray-600 mr-8 mb-4">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600 mr-8 mb-4">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600 mr-8 mb-4">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600 mr-8 mb-4">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600 mr-8 mb-4">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600 mr-8 mb-4">
                    <BsUmbrella />
                </div>
            </div>
            <div className="w-full bg-darkBlue">
                <div className="sm:w-[50%] w-[65%] sm:py-8 py-4 mx-auto flex flex-col justify-center items-center">
                    <div className="md:pb-8 pb-4 px-6 xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs leading-relaxed text-whiteClr font-bold text-center">
                        To help entrepreneurs get their <br /> act <span className="text-brownClr">together before they talk </span> to investors
                    </div>
                    <Button data={data} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand