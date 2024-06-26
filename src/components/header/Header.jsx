import React from 'react'
import Logo from '../../assets/img/logo.jpg'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'

const Header = ({setNav}) => {

  return (
    <div className="w-full min-h-[30px] fixed top-0 left-0  z-10 py-2 bg-whiteClr shadow-lg">
        <div className="2xl:w-[65%] xl:w-[70%] w-[90%] mx-auto flex justify-between items-center">
            <div className="flex justify-start items-center">
                <div className="md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]">
                    <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="text-blackClr md:text-xl text-sm font-bold uppercase">CoupCode</div>
            </div>
            <div className="flex justify-center items-center mr-[5px]">
                <div className="lg:flex justify-center gap-4 items-center mr-4 text-base uppercase font-semibold hidden">
                    <a href="#"><small>Home</small></a>
                    <a href="#"><small>About</small></a>
                    <a href="#"><small>Services</small></a>
                    <a href="#"><small>Reference</small></a>
                    <a href="#"><small>News</small></a>
                    <a href="#"><small>About</small></a>
                    <a href="#"><small>Contact</small></a>
                </div>
                
                <div className="md:text-lg text-base mr-3">
                    <BiSearch />
                </div>
                <div className="md:text-lg text-base mr-3">
                    <IoIosNotificationsOutline />
                </div>
                <div onClick={()=>setNav()} className="lg:hidden md:text-lg text-sm block mr-3">
                    <FaBars />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header