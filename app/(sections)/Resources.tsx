import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { HiArrowLongRight, HiArrowUpRight } from 'react-icons/hi2'

const Resources = () => {

    const resources = [
        {
            title: "7 reasons to make your car dealership website professional",
            image: "/assets/resources/one.jpg",
            link: "https://www.pixelconcept.de/en/beste-grunde-fur-autohaus-webseite/"
        },
        {
            title: "Importance of Your Dealership's Website",
            image: "/assets/resources/to.jpeg",
            link: "Importance of Your Dealership's Website"
        },
        {
            title: "What Key Features Do Car Buyers Expect From Car Dealer Websites?",
            image: "/assets/resources/two.jpg",
            link: "https://www.dragon2000.co.uk/what-key-features-do-car-buyers-expect-from-car-dealer-websites/"
        },
        {
            title: "The Importance of Local SEO for Car Dealerships",
            image: "/assets/resources/four.jpeg",
            link: "https://www.get.dealer/blog/the-importance-of-local-seo-for-car-dealerships"
        },
    ]
    return (
        <div className=' text-black bg-slate-50 ' >
            <div className=' flex justify-center items-center flex-col py-16  ' >
                <div className=' w-full mb-10 justify-center flex items-center p-5 ' >
                    <h1 className='text-5xl lg:text-6xl capitalize font-semibold' >
                        helpful resources
                    </h1>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-3 ' >

                    {resources.map((item, index) => (
                        <Link href={item.link} target='_blank' key={index} className=' hover:shadow-lg  duration-200 bg-white rounded-sm lg:h-[550px] lg:w-[450px] w-full h-[500px]  p-4 ' >
                            <div className='w-full flex justify-center items-center h-[60%] ' >
                                <Image
                                    radius='sm'
                                    className='border z-0  lg:w-[450px] h-full  lg:h-[300px] '
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
