import { Avatar } from '@nextui-org/avatar'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {

    const data = [
        {
            name: "Norah Landry",
            company: "Pegasus Imagery",
            img: "/assets/profiles/one.webp",
            comment: '"Our site consistently ranks #1 on Google, thanks to Azuro Digital"',
        },
        {
            name: "Norah Landry",
            company: "Pegasus Imagery",
            img: "/assets/profiles/three.jpg",
            comment: '"Our site consistently ranks #1 on Google, thanks to Azuro Digital"',
        },
        {
            name: "Norah Landry",
            company: "Pegasus Imagery",
            img: "/assets/profiles/two.webp",
            comment: '"Our site consistently ranks #1 on Google, thanks to Azuro Digital"',
        },
    ]
    return (
        <div id="testimonials" className=' w-full lg:h-[40vh] bg-slate-50 py-16 lg:py-0 flex lg:flex-row flex-col justify-center items-center text-black ' >

            <div className="flex flex-col lg:flex-row w-full lg:w-[70%] justify-between gap-5 items-center h-full  ">
                {data.map((item, index) => (
                    <div key={index} className="w-full p-5 ">
                        <span className='max-w-[35%]  lg:max-w-[25%] justify-around flex text-yellow-500  ' > <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </span>
                        
                        <p className=' text-xl my-3 lg:my-5 ' >
                            {item.comment}
                        </p>

                        <div className=' flex items-center py-2 ' >
                            <Avatar size="lg" src={item.img} />
                            <div className=' ml-6 lg:ml-4 text-sm font-medium opacity-70 ' >
                                <h2>{item.name}</h2>
                                <p>{item.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonials
