import React from 'react'
import img1 from './imgs/img-1.jpg'
import img2 from './imgs/img-2.jpg'
import img3 from './imgs/img-3.jpg'
import { AiOutlineHeart } from 'react-icons/ai'

const Services = () => {
    return (
        <div className="w-full md:py-12 sm:py-4 py-8 bg-darkBlue">
            <div className="2xl:w-[65%] xl:w-[70%] w-[75%] mx-auto pb-4 text-whiteClr">
                <div className="sm:pb-4 pb-8 flex sm:flex-row flex-col justify-between items-start">
                    <div className="pb-4">
                        <h2 className="pb-2 lg:text-2xl text-base font-bold capitalize">Our latest works</h2>
                        <div className="lg:w-[25px] w-[20px] h-[2px] mb-2 bg-whiteClr"></div>
                    </div>
                    <div className="flex md:flex-row sm:flex-col flex-col sm:justify-start justify-center items-center">
                        <div className="flex md:mb-[2px] mb-2">
                            <div className="sm:mr-3 mr-2 flex flex-wrap justify-center items-center">
                                <a href="#" className="sm:pr-3 pr-2 lg:text-base text-xs font-semibold capitalize hover:text-brownClr transition-all duration-1000">all products</a>
                                <div className="w-[2px] md:h-[15px] h-[10px] bg-whiteClr"></div>
                            </div>
                            <div className="sm:mr-3 mr-2 flex justify-center items-center">
                                <a href="#" className="sm:pr-3 pr-2 lg:text-base text-xs font-semibold capitalize hover:text-brownClr transition-all duration-1000">frontend</a>
                                <div className="w-[2px] md:h-[15px] h-[10px] bg-whiteClr"></div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="sm:mr-3 mr-2 flex justify-center items-center">
                                <a href="#" className="sm:pr-3 pr-2 lg:text-base text-xs font-semibold capitalize hover:text-brownClr transition-all duration-1000">backend</a>
                                <div className="w-[2px] md:h-[15px] h-[10px] bg-whiteClr"></div>
                            </div>
                            <div className="sm:mr-3 mr-2 flex justify-center items-center">
                                <a href="#" className="sm:pr-3 pr-2 lg:text-base text-xs font-semibold capitalize hover:text-brownClr transition-all duration-1000">developer</a>
                                <div className="w-[2px] md:h-[15px] h-[10px] bg-whiteClr"></div>
                            </div>
                            <div className="sm:mr-3 mr-2 flex justify-center items-center">
                                <a href="#" className="sm:pr-3 pr-2 lg:text-base text-xs font-semibold capitalize hover:text-brownClr transition-all duration-1000">client</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:justify-between md:justify-center justify-center items-center">
                    <div className="xl:w-[320px] lg:w-[270px] md:w-[220px] sm:w-[230px] xs:w-[250px] w-[220px] sm:mb-4 mr-2 xl:mr-5 lg:mr-4 md:mr-3 mb-4">
                        <div className="xl:w-[320px] xl:h-[220px] lg:w-[270px] lg:h-[200px] md:w-[220px] md:h-[150px] sm:w-[230px] sm:h-[150px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px] sm:pb-4 pb-2">
                            <img src={img1} alt="About Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="lg:pb-5 sm:pb-3 pb-2 flex justify-between items-center">
                            <div className="capitalize">
                                <h3 className="lg:text-base sm:text-sm xs:text-base text-sm sm:pb-2 pb-[2px] font-semibold">frontend dev</h3>
                                <small className='lg:text-sm sm:text-xs xs:text-sm text-xs'>summary</small>
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
                    <div className="xl:w-[320px] lg:w-[270px] md:w-[220px] sm:w-[230px] sm:mb-4 xs:w-[250px] w-[220px] mr-2 xl:mr-5 lg:mr-4 md:mr-3 mb-4">
                        <div className="xl:w-[320px] xl:h-[220px] lg:w-[270px] lg:h-[200px] md:w-[220px] md:h-[150px] sm:w-[230px] sm:h-[150px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px] pb-4">
                            <img src={img2} alt="About Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="lg:pb-5 sm:pb-3 pb-2 flex justify-between items-center">
                            <div className="capitalize">
                                <h3 className="lg:text-base sm:text-sm xs:text-base text-sm sm:pb-2 pb-[2px] font-semibold">frontend dev</h3>
                                <small className='lg:text-sm sm:text-xs xs:text-sm text-xs'>summary</small>
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
                    <div className="xl:w-[320px] lg:w-[270px] md:w-[220px] sm:w-[230px] xs:w-[250px] w-[220px]">
                        <div className="xl:w-[320px] xl:h-[220px] lg:w-[270px] lg:h-[200px] md:w-[220px] md:h-[150px] sm:w-[230px] sm:h-[150px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px] pb-4">
                            <img src={img3} alt="About Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="lg:pb-5 sm:pb-3 pb-2 flex justify-between items-center">
                            <div className="capitalize">
                                <h3 className="lg:text-base sm:text-sm xs:text-base text-sm sm:pb-2 pb-[2px] font-semibold">frontend dev</h3>
                                <small className='lg:text-sm sm:text-xs xs:text-sm text-xs'>summary</small>
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