import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { HiArrowLongRight, HiArrowUpRight } from 'react-icons/hi2'

const Resources = () => {

    const resources = [
        {
            title: "top 10 ways of doing something",
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#"
        },
        {
            title: "top 10 ways of doing something",
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#"
        },
        {
            title: "top 10 ways of doing something",
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#"
        },
    ]
    return (
        <div className=' text-black bg-slate-50 ' >
            <div className=' flex justify-center items-center flex-col py-16  ' >
                <div className=' w-full mb-10 justify-center flex items-center p-5 ' >
                    <h1 className='text-5xl capitalize font-semibold' >
                        helpful resources
                    </h1>
                </div>

                <div className=' grid grid-cols-3 gap-3 ' >

                    {resources.map((item, index) => (
                        <Link href={item.link} target='_blank' key={index} className=' hover:shadow-lg  duration-200 bg-white rounded-sm h-[550px] w-[450px] p-4 ' >
                            <div className='w-full flex justify-center items-center h-[60%] ' >
                                <Image
                                    radius='sm'
                                    className='border z-0 '
                                    width={450}
                                    height={300}
                                    alt="NextUI hero Image with delay"
                                    src={item.image}
                                />
                            </div>
                            <div className=' h-[40%] px-3 pt-2 flex-col flex items-center '>
                                <div className=' h-[80%] flex items-center ' >
                                    <h2 className=' capitalize text-3xl font-semibold italic ' >
                                        {item.title}
                                    </h2>
                                </div>
                                <div className='flex h-[20%] w-full  items-center  hover:font-semibold ' >
                                    <span className="mr-2 text-sm font-medium capitalize ">read on</span>
                                    <span className=' text-4xl' ><HiArrowLongRight /></span>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Resources
