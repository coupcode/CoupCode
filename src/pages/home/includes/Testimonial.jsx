import React from 'react'
import img1 from './imgs/img-1.jpg'
import img2 from './imgs/img-2.jpg'
import img3 from './imgs/img-3.jpg'

const Testimonial = () => {
    return (
        <div className="w-full md:py-12 sm:py-6 py-6">
            <div className="2xl:w-[65%] xl:w-[70%] w-[75%] mx-auto pb-4 flex lg:flex-row flex-col sm:justify-between justify-center sm:items-start items-center">
                <div className="lg:w-[60%] w-[100%] mb-5 sm:pb-4 sm:border-b xl:mr-2 lg:mr-5">
                    <div className="pb-4">
                        <h2 className="pb-2 lg:text-2xl sm:text-xl text-lg  font-bold capitalize">news updates</h2>
                        <div className="w-[25px] h-[2px] mb-2 bg-brownClr"></div>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:justify-start sm:items-start items-center">
                        <div className="xl:w-[250px] lg:w-[220px] xs:w-[250px] w-[220px] mb-5 mr-2 xl:mr-4 lg:mr-3 sm:mr-4">
                            <div className="xl:w-[250px] xl:h-[170px] lg:w-[220px] lg:h-[150px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px] mb-2">
                                <img src={img1} alt="Testimonial" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-sm pb-2">For many years</div>
                            <div className="text-xs font-bold sm:leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur.
                            </div>
                        </div>
                        <div className="xl:w-[250px] lg:w-[220px] xs:w-[250px] w-[220px]">
                            <div className="xl:w-[250px] xl:h-[170px] lg:w-[220px] lg:h-[150px] xs:w-[250px] xs:h-[170px] w-[220px] h-[140px] mb-2">
                                <img src={img1} alt="Testimonial" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-sm pb-2">For many years</div>
                            <div className="text-xs font-bold sm:leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[40%] sm:w-[100%]">
                    <div className="pb-4">
                        <h2 className="pb-2 lg:text-2xl sm:text-xl text-lg font-bold capitalize">Testimonial</h2>
                        <div className="w-[25px] h-[2px] md:mb-2 sm:mb-[4px] bg-brownClr"></div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="xs:w-[80px] xs:h-[80px] w-[60px] h-[60px] mr-4">
                            <img src={img3} alt="Circle" className="w-full h-full object-cover rounded-[50%]" />
                        </div>
                        <div className="">
                            <h2 className="xs:text-lg text-sm uppercase font-bold">Odame Joshua</h2>
                            <p className="xs:text-sm text-xs">Lorem, ipsum dolor ipsum dolor.</p>
                        </div>

                    </div>
                    <hr />
                    <div className="sm:text-sm xs:text-xs text-[12px] font-semibold mt-6">
                        <p className="leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sed doloremque.
                            Quos nam quam cupiditate et! Similique eum excepturi nobis dolor nihil illum,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial