import React, { useRef } from 'react'
import Logo from '../../assets/img/logo.jpg'
import { MdClose, MdRoomPreferences } from 'react-icons/md'
import { AiTwotoneHome, AiTwotoneCustomerService } from 'react-icons/ai'
import { HiInformationCircle } from 'react-icons/hi'
import { FaServicestack } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import { NavState } from '../../context/NavProvider'

const ResponsiveNav = ({setNav}) => {

    const {onNav, setOnNav, handleNav} = NavState()
    
  return (
    <div className="navBar animatefromright transition-all delay-1000 z-10">
        <div onClick={() => setNav()} className="w-1/2 h-full bg-gray-700 opacity-[0.5]"></div>
        <div className="w-1/2 h-full bg-whiteClr absolute top-0 right-0">
            <div className="flex justify-between items-center py-2 px-3">
                <div className="w-[60px] h-[60px]">
                    <img className="w-full h-full object-cover" src={Logo} alt="Our Logo" />
                </div>
                <div onClick={() => setNav()} className="text-2xl pr-3">
                    <MdClose />
                </div>
            </div>
            <div className="border-b border-black mb-4"></div>
            <div className="w-[90%] mx-auto pt-4">
                <div className="flex mb-6">
                    <div className="text-xl pt-[5px] pr-6"><AiTwotoneHome /> </div>
                    <div className="text-lg font-semibold capitalize">home</div>
                </div>
                <div className="flex mb-6">
                    <div className="text-xl pt-[5px] pr-6"><HiInformationCircle /> </div>
                    <div className="text-lg font-semibold capitalize">about</div>
                </div>
                <div className="flex mb-6">
                    <div className="text-xl pt-[5px] pr-6"><FaServicestack /> </div>
                    <div className="text-lg font-semibold capitalize">services</div>
                </div>
                <div className="flex mb-6">
                    <div className="text-xl pt-[5px] pr-6"><MdRoomPreferences /> </div>
                    <div className="text-lg font-semibold capitalize">references</div>
                </div>
                <div className="flex mb-6">
                    <div className="text-xl pt-[5px] pr-6"><AiTwotoneCustomerService /> </div>
                    <div className="text-lg font-semibold capitalize">Testimonial</div>
                </div>
                <div className="flex mb-6">
                    <div className="text-xl pt-[5px] pr-6"><IoMdContact /> </div>
                    <div className="text-lg font-semibold capitalize">contact</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResponsiveNav