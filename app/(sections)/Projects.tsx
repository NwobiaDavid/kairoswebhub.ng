import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";

const Projects = () => {

    const projects = [
        {
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#",
            name: "car agency"
        },
        {
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#",
            name: "car agency"
        },
        {
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#",
            name: "car agency"
        },
        {
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#",
            name: "car agency"
        },
        {
            image: "https://cdn.prod.website-files.com/637116ed63d653540d84bcc3/652854bc05523722a7e5422b_Twisted%20Nail%20Mockup-p-500.jpg",
            link: "#",
            name: "car agency"
        },
        
    ]
  return (
    <div className='w-full bg-slate-100  text-black '>
      <div className=" max-w-7xl mx-auto py-16 ">
        <div className="w-full mb-10">
        <h1 className='text-5xl font-semibold ' >Recent works</h1>
        </div>
        <div className=' grid gap-3 grid-cols-3 ' >
            {projects.map((item, index)=>(
                <Link href={item.link} target='_blank' key={index} className=' hover:shadow-lg  duration-200 bg-white rounded-sm h-[350px] w-[400px] p-4 ' >
                    <div className='w-full flex items-center h-[80%] ' >
                    <Image
                    radius='sm'
                    className='border z-0 '
                            width={400}
                            height={250}
                            alt="NextUI hero Image with delay"
                            src={item.image}
                        />
                    </div>
                    <div className=' h-[20%] flex items-center '>
                        <div className='flex text-xl hover:font-semibold ' >
                            <h2 className="mr-2 font-medium capitalize ">{item.name}</h2>
                            <span className=' mb-[10%]  ' ><HiArrowUpRight /></span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
