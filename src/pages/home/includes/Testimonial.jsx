import React from 'react'
import img1 from './imgs/img-1.jpg'
import img2 from './imgs/img-2.jpg'
import img3 from './imgs/img-3.jpg'

const Testimonial = () => {
    return (
        <div className="w-full py-12">
            <div className="w-[65%] mx-auto pb-4 flex justify-between">
                <div className="w-[60%]">
                    <div className="pb-4">
                        <h2 className="pb-2 text-2xl font-bold capitalize">news updates</h2>
                        <div className="w-[25px] h-[2px] mb-2 bg-brownClr"></div>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="w-[210px] mr-5">
                            <div className="w-[210px] mb-2 object-cover">
                                <img src={img1} alt="Testimonial" className="w-full" />
                            </div>
                            <div className="text-sm pb-2">For many years</div>
                            <div className="text-xs font-bold ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur.
                            </div>
                        </div>
                        <div className="w-[210px] mr-5">
                            <div className="w-[210px] mb-2 object-cover">
                                <img src={img1} alt="Testimonial" className="w-full" />
                            </div>
                            <div className="text-sm pb-2">For many years</div>
                            <div className="text-xs font-bold ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur.
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-[40%]">
                    <div className="pb-4">
                            <h2 className="pb-2 text-2xl font-bold capitalize">Testimonial</h2>
                            <div className="w-[25px] h-[2px] mb-2 bg-brownClr"></div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-[80px] h-[80px] mr-4">
                            <img src={img1} alt="Circle" className="w-full h-full object-cover rounded-[50%]" />
                        </div>
                        <div className="">
                            <h2 className="text-lg uppercase font-bold">Odame Joshua</h2>
                            <p className="text-sm ">Lorem, ipsum dolor ipsum dolor.</p>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="text-sm font-semibold mt-6">
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