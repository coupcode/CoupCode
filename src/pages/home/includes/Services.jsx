import React from 'react'
import img1 from './imgs/img-1.jpg'
import img2 from './imgs/img-2.jpg'
import img3 from './imgs/img-3.jpg'
import { AiOutlineHeart } from 'react-icons/ai'

const Services = () => {
    return (
        <div className="w-full py-12 bg-darkBlue">
            <div className="w-[65%] mx-auto pb-4 text-whiteClr">
                <div className="pb-4 flex justify-between items-center">
                    <div className="pb-4">
                        <h2 className="pb-2 text-2xl font-bold capitalize">Our latest works</h2>
                        <div className="w-[25px] h-[2px] mb-2 bg-whiteClr"></div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="mr-3 flex justify-center items-center">
                            <a href="#" className="pr-3 text-base font-semibold capitalize">all products</a>
                            <div className="w-[2px] h-[15px] bg-whiteClr"></div>
                        </div>
                        <div className="mr-3 flex justify-center items-center">
                            <a href="#" className="pr-3 text-base font-semibold capitalize">frontend</a>
                            <div className="w-[2px] h-[15px] bg-whiteClr"></div>
                        </div>
                        <div className="mr-3 flex justify-center items-center">
                            <a href="#" className="pr-3 text-base font-semibold capitalize">backend</a>
                            <div className="w-[2px] h-[15px] bg-whiteClr"></div>
                        </div>
                        <div className="mr-3 flex justify-center items-center">
                            <a href="#" className="pr-3 text-base font-semibold capitalize">developer</a>
                            <div className="w-[2px] h-[15px] bg-whiteClr"></div>
                        </div>
                        <div className="mr-3 flex justify-center items-center">
                            <a href="#" className="pr-3 text-base font-semibold capitalize">client</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[32%] mr-2">
                        <div className="w-full pb-2">
                            <img src={img1} alt="About Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="pb-2 flex justify-between items-center">
                            <div className="capitalize">
                                <h3 className="text-base font-semibold">frontend dev</h3>
                                <small className='text-sm'>summary</small>
                            </div>
                            <div className=' flex justify-center items-center text-sm font-semibold'>
                                <div className="mr-2 text-base ">
                                    <AiOutlineHeart />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="w-[32%] mr-2">
                        <div className="w-full pb-2">
                            <img src={img1} alt="About Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="pb-2 flex justify-between items-center">
                            <div className="capitalize">
                                <h3 className="text-base font-semibold">frontend dev</h3>
                                <small className='text-sm'>summary</small>
                            </div>
                            <div className=' flex justify-center items-center text-sm font-semibold'>
                                <div className="mr-2 text-base ">
                                    <AiOutlineHeart />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="w-[32%] mr-2">
                        <div className="w-full pb-2">
                            <img src={img1} alt="About Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="pb-2 flex justify-between items-center">
                            <div className="capitalize">
                                <h3 className="text-base font-semibold">frontend dev</h3>
                                <small className='text-sm'>summary</small>
                            </div>
                            <div className=' flex justify-center items-center text-sm font-semibold'>
                                <div className="mr-2 text-base ">
                                    <AiOutlineHeart />
                                </div>
                                <span>0</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services