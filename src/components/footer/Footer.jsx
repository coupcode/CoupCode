import React from 'react'
import Logo from '../../assets/img/logo.jpg'
import Button from '../Button'
import { MdCall } from 'react-icons/md'
import { BiSolidRightArrowAlt } from 'react-icons/bi'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsWhatsapp, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <div className="w-full bg-gray-800 py-14">
            <div className="w-[65%] mx-auto flex justify-center ">
                <div className="w-full mr-4 flex-1 flex flex-col text-whiteClr">
                    <div className="flex items-center pb-12">
                        <div className="w-[30px] h-[30px] mr-2">
                            <img src={Logo} alt="CoupCode" className="w-[100%] h-[100%]" />
                        </div>
                        <h2 className="text-xl font-bold text-whiteClr uppercase">CoupCode</h2>
                    </div>
                    <p className="pb-2 text-xs font-medium leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rem itaque magni cupiditate maiores sed, excepturi quas quaerat veniam distinctio!
                    </p>
                    <div className="mb-6 flex justify-start items-start">
                        <div className="pr-2 pt-[3px] text-xl">
                            <MdCall />
                        </div>
                        <div >
                            <div className="text-xl font-semibold">
                                <a href="#">5532-232-8946</a>
                            </div>
                            <div className="text-sm">
                                <a href="#">coupcode@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <Button />
                </div>
                <div className="flex-1 text-whiteClr">
                    <div className="pb-8">
                        <h2 className="pb-2 text-lg font-semibold uppercase">service provided</h2>
                        <div className="w-[30px] h-[2px] mb-2 bg-whiteClr"></div>
                    </div>
                    <div className="flex text-sm justify-start capitalize">
                        <div className="pr-6 pb-4">Software engineering</div>
                        <div className="pr-6 pb-4">Software engineering</div>
                    </div>
                    <div className="flex text-sm justify-start capitalize">
                        <div className="pr-6 pb-4">Software engineering</div>
                        <div className="pr-6 pb-4">Software engineering</div>
                    </div>
                    <div className="flex text-sm justify-start capitalize">
                        <div className="pr-6 pb-4">Software engineering</div>
                        <div className="pr-6 pb-4">Software engineering</div>
                    </div>
                    <div className="flex text-sm flex-col justify-start capitalize">
                        <div className="pr-6 pb-4">Software engineering</div>
                        <div className="pr-6 pb-4">Software engineering</div>
                        <div className="pr-6 pb-4">Software engineering</div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="pb-8">
                        <h2 className="pb-2 text-whiteClr text-lg font-semibold uppercase">get the quote</h2>
                        <div className="w-[30px] h-[2px] mb-2 bg-whiteClr"></div>
                    </div>
                    <div className="relative">
                        <input className="py-2 mb-2 px-4 text-base" type="text" placeholder='Enter your message' />
                        <button className=" text-xl text-whiteClr ">
                            <div className="absolute top-[1px] pt-[7px] pb-[13px] px-1 bg-brownClr">
                                <BiSolidRightArrowAlt />
                            </div>
                        </button>
                        <div className="mb-4 flex justify-start items-center">
                            <div className="text-whiteClr text-lg p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                <FaFacebookF />
                            </div>
                            <div className="text-whiteClr text-lg p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                <BsWhatsapp />
                            </div>
                            <div className="text-whiteClr text-lg p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                <BsTwitter />
                            </div>
                            <div className="text-whiteClr text-lg p-2 mr-3 hover:bg-gray-600 rounded transition-all cursor-pointer">
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-gray-900">
                <div className="w-[65%] mx-auto p-5 text-whiteClr text-sm italic flex justify-between items-center">
                    <div className="flex justify-center items-center">
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