import { Image } from "@nextui-org/react";
import React from 'react'
import { black_han_sans } from "../fonts";

const Features = () => {

    const contents = [
        {
            title: "Custom web design, logo design & branding"
        },
        {
            title: "Custom web design, logo design & branding"
        },
        {
            title: "Custom web design, logo design & branding"
        },
    ]

    return (
        <div id="features" className=' w-full px-3 py-16 lg:px-0 lg:py-0 bg-white text-black flex justify-center items-center lg:h-[70vh] ' >
            <div className='flex flex-col lg:flex-row gap-5 justify-center h-[80%] w-full items-center' >
                <div className=" w-full lg:w-[45%] flex justify-end " >
                    {/* <div> */}
                        <Image
                        className="z-0 lg:rounded-md object-cover rounded-none lg:w-[400px] w-full h-[300px] lg:h-[500px] "
                           
                            alt="NextUI hero Image with delay"
                            src="/assets/features.jpg"
                        />
                    {/* </div> */}
                </div>
                <div className=" w-full mt-10 lg:mt-0 lg:w-[55%] " >
                    <div className=" w-full lg:w-[60%] ">
                        <h1 className={` text-5xl lg:text-6xl font-semibold mb-4 text-center lg:text-left ${black_han_sans} `} >Everything your site needs for success</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 ' >
                            {contents.map((item, index) => (
                                <div key={index} className='duration-200 flex justify-center text-lg rounded-md items-center p-3 text-center w-full h-[150px] bg-slate-100    ' >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features