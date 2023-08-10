import React from 'react'
import Logo from '../../assets/img/logo.jpg'
import Button from '../Button'
import { MdCall } from 'react-icons/md'
import { BiSolidRightArrowAlt } from 'react-icons/bi'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsWhatsapp, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    const data = "Contact";

    return (
        <div>
            <div className="w-full bg-gray-800 lg:py-14 pt-8 pb-2">
                <div className="2xl:w-[65%] xl:w-[70%] w-[75%] mx-auto flex lg:flex-row flex-col items-start ">
                    <div className="flex flex-2 sm:flex-row flex-col mb-4">
                        <div className="sm:w-full w-[70%] mr-4 sm:mb-2 mb-4 flex-1 flex flex-col text-whiteClr">
                            <div className="flex items-center lg:pb-12 sm:pb-6 pb-3">
                                <div className="md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] w-[30px] h-30px mr-2">
                                    <img src={Logo} alt="CoupCode" className="w-full h-full object-cover" />
                                </div>
                                <h2 className="lg:text-xl md:text-base sm:text-sm text-lg font-bold text-whiteClr uppercase">CoupCode</h2>
                            </div>
                            <p className="pb-2 md:text-xs sm:text-[10px] text-[12px] font-medium leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rem itaque magni cupiditate maiores sed, excepturi quas quaerat veniam distinctio!
                            </p>
                            <div className="sm:mb-6 mb-4 flex justify-start items-start">
                                <div className="pr-2 pt-[3px] md:text-xl text-lg">
                                    <MdCall />
                                </div>
                                <div >
                                    <div className="lg:text-xl text-lg font-semibold">
                                        <a href="#">5532-232-8946</a>
                                    </div>
                                    <div className="lg:text-sm text-xs">
                                        <a href="#">coupcode@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <Button data={data} />
                        </div>
                        <div className="flex-1 text-whiteClr">
                            <div className="lg:pb-8 md:pb-4">
                                <h2 className="sm:pb-2 pb-[3px] lg:text-lg md:text-base sm:text-sm text-base font-semibold uppercase">service provided</h2>
                                <div className="md:w-[30px] md:h-[2px] w-[25px] h-[1px] mb-4 bg-whiteClr"></div>
                            </div>
                            <div className="flex xl:text-sm lg:text-xs text-xs justify-start capitalize">
                                <div className="pr-4 pb-3">Software engineering</div>
                                <div className="pr-4 pb-3">Software engineering</div>
                            </div>
                            <div className="flex xl:text-sm lg:text-xs text-xs justify-start capitalize">
                                <div className="pr-4 pb-3">Software engineering</div>
                                <div className="pr-4 pb-3">Software engineering</div>
                            </div>
                            <div className="flex xl:text-sm lg:text-xs text-xs justify-start capitalize">
                                <div className="pr-4 pb-3">Software engineering</div>
                                <div className="pr-4 pb-3">Software engineering</div>
                            </div>
                            <div className="flex md:text-sm sm:text-xs text-[10px] sm:flex-col flex-row justify-start capitalize">
                                <div className="pr-4 pb-3">Software engineering</div>
                                <div className="pr-4 pb-3">Software engineering</div>
                                <div className="pr-4 pb-3">Software engineering</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="lg:pb-8 sm:pb-4">
                            <h2 className="sm:pb-2 pb-[3px] text-whiteClr lg:text-lg md:text-base sm:text-sm text-base font-semibold uppercase">get the quote</h2>
                            <div className="md:w-[30px] md:h-[2px] w-[25px] h-[1px] mb-4 bg-whiteClr"></div>
                        </div>
                        <div className="relative">
                            <div className="flex items-center mb-4">
                                <input className="lg:h-[45px] md:h-[40px] sm:h-[30px] h-[25px] lg:px-4 px-2 lg:text-base md:text-sm" type="text" placeholder='Enter your message' />
                                <button className="lg:h-[45px] md:h-[40px] sm:h-[30px] h-[25px] bg-brownClr sm:px-2 px-[5px] text-xl text-whiteClr flex items-center justify-center">
                                    <BiSolidRightArrowAlt />
                                </button>
                            </div>
                            <div className="lg:mb-4 md:mb-2 flex justify-start items-center">
                                <div className="text-whiteClr md:text-lg sm:text-base text-sm p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                    <FaFacebookF />
                                </div>
                                <div className="text-whiteClr md:text-lg sm:text-base text-sm p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                    <BsWhatsapp />
                                </div>
                                <div className="text-whiteClr md:text-lg sm:text-base text-sm p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                    <BsTwitter />
                                </div>
                                <div className="text-whiteClr md:text-lg sm:text-base text-sm p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900">
                <div className="2xl:w-[65%] xl:w-[70%] w-[75%] mx-auto md:p-5 sm:p-3 p-2 text-whiteClr lg:text-sm md:text-xs text-[10px] italic flex sm:flex-row flex-col sm:justify-between justify-center sm:items-center">
                    <div className="flex sm:justify-center justify-between items-between">
                        <div className="pr-2">CoupCode @ 2023.</div>
                        <div>All right reserved</div>
                    </div>
                    <div>Visit our official webpage: www.coupcode.org.gh</div>
                </div>
            </div>
        </div>

    )
}

export default Footer