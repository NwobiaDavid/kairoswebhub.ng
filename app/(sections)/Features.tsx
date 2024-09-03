import { Image } from "@nextui-org/react";
import React from 'react'

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
        <div className=' w-full bg-white text-black flex justify-center items-center h-[70vh] ' >
            <div className='flex gap-5 justify-center h-[80%] w-full items-center' >
                <div className=" w-[45%] flex justify-end " >
                    {/* <div> */}
                        <Image
                        className="z-0"
                            width={400}
                            height={500}
                            alt="NextUI hero Image with delay"
                            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                    {/* </div> */}
                </div>
                <div className=" w-[55%] " >
                    <div className="w-[60%] ">
                        <h1 className=' text-5xl font-semibold mb-4 ' >Everything your site needs for success</h1>
                        <div className='grid grid-cols-2 gap-5 ' >
                            {contents.map((item, index) => (
                                <div key={index} className='duration-200 font-semibold flex justify-center rounded-sm items-center p-3 text-center w-full h-[150px] bg-gray-100    ' >
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