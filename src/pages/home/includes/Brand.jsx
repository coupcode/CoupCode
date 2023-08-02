import React from 'react'
import { BsUmbrella } from 'react-icons/bs'
import Button from '../../../components/Button'

const Brand = () => {
  return (
    <div className="w-full">
        <div className="w-full bg-gray-100">
            <div className="w-[65%] mx-auto py-8 flex justify-between items-center">
                <div className="text-6xl text-gray-600">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600">
                    <BsUmbrella />
                </div>
                <div className="text-6xl text-gray-600">
                    <BsUmbrella />
                </div>
            </div>
            <div className="w-full bg-darkBlue">
                <div className="w-[50%] py-8 mx-auto flex flex-col justify-center items-center">
                    <div className="pb-8 px-6 text-2xl text-whiteClr font-bold text-center">
                        To help entrepreneurs get their <br /> act <span className="text-brownClr">together before they talk </span> to investors
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand