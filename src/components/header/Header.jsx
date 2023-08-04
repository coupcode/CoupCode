import React from 'react'
import Logo from '../../assets/img/logo.jpg'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <div className="w-full min-h-[50px] fixed top-0 left-0 mx-auto py-2 bg-whiteClr shadow-lg z-10">
        <div className="w-[65%] mx-auto flex justify-between items-center">
            <div className="flex justify-start items-center">
                <div className="w-[50px] h-[50px]">
                    <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="text-blackClr text-xl font-[700] uppercase">CoupCode</div>
            </div>
            <div className="flex justify-center items-center gap-4 text-sm uppercase font-semibold">
                <a href="#"><small>Home</small></a>
                <a href="#"><small>About</small></a>
                <a href="#"><small>Services</small></a>
                <a href="#"><small>Reference</small></a>
                <a href="#"><small>News</small></a>
                <a href="#"><small>About</small></a>
                <a href="#"><small>Contact</small></a>
                <div className="text-xl">
                    <BiSearch />
                </div>
                <div className="text-xl">
                    <IoIosNotificationsOutline />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header