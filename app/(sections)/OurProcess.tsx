import { Image } from '@nextui-org/react'
import React from 'react'

const OurProcess = () => {
    const process = [
        {
            title: "Discovery & Consultation",
            image: "/assets/undraw_web_search_re_efla.svg",
            icon: "/icons/discover-compass-svgrepo-com.svg",
            header: "Understanding Your Dealership",
            description: "We start with a deep dive into your dealership’s brand, goals, and target audience. This step involves collaborative consultations where we discuss your vision, analyze your current online presence, and identify opportunities for growth. Our goal is to fully understand your dealership’s unique value proposition.",
        },
        {
            title: "Strategy & Planning",
            image: "/assets/undraw_scrum_board_re_wk7v.svg",
            icon: "/icons/planning-svgrepo-com.svg",
            header: "Crafting a Tailored Blueprint",
            description: "Based on our initial discussions, we create a detailed project roadmap. This includes wireframes, site architecture, and a comprehensive plan that outlines every step from concept to launch. We focus on creating a strategy that aligns with your dealership's objectives, whether it’s increasing leads, enhancing user experience, or optimizing inventory presentation.",
        },
        {
            title: "Design & Development",
            image: "/assets/undraw_designer_life_re_6ywf.svg",
            icon: "/icons/development-svgrepo-com.svg",
            header: "Turning Vision into Reality",
            description: "Our creative team at TheBluePixelAgency designs a visually stunning, responsive website that captures the essence of your dealership. We prioritize clean, modern designs that highlight your inventory, provide easy navigation, and incorporate essential features like financing calculators and appointment scheduling. During the development phase, our team ensures that your website is not only beautiful but also fast, secure, and fully functional.",
        },
        {
            title: "Integration & Testing",
            image: "/assets/undraw_qa_engineers_dg-5-p.svg",
            icon: "/icons/integration-svgrepo-com.svg",
            header: "Seamless Functionality Across Platforms",
            description: "We integrate essential tools and third-party systems such as CRM, inventory management, and lead generation platforms. Rigorous testing is conducted across multiple devices and browsers to ensure a flawless user experience. We check for functionality, speed, and mobile responsiveness, ensuring your website is ready for launch.",
        },
        {
            title: "Launch & Optimization",
            image: "/assets/undraw_maker_launch_re_rq81.svg",
            icon: "/icons/optimization-svgrepo-com.svg",
            header: "Going Live with Confidence",
            description: "Once everything is in place, we launch your website with zero downtime, ensuring a smooth transition. But our work doesn’t stop there. We continuously monitor the site’s performance, gathering data to make informed adjustments. We offer ongoing support and optimization services to ensure your dealership’s website remains cutting-edge and performs optimally.",
        },
    ]

    return (
        <div className=' bg-white text-black ' >
            <div className=' max-w-full lg:max-w-7xl mx-auto py-16 lg:py-10 px-4 lg:px-0 ' >
                <div className='flex w-full justify-center mb-10 items-center flex-col ' >
                    <h1 className=' text-5xl lg:text-6xl mb-10 font-semibold capitalize ' >our process</h1>

                    <div className=' grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 ' >

                        {process.map((item, index) => (
                            <div key={index} className=' p-2 flex  text-center  xl:w-[100px] xl:h-[200px] justify-center flex-col items-center ' >
                                <Image width={50}
                                    height={50}
                                    className=' z-0 rounded-none '
                                    src={item.icon}
                                    alt={item.title} />

                                <h3 className=' mt-5 font-medium text-base lg:text-sm ' >{item.title}</h3>
                            </div>
                        ))}

                    </div>

                </div>

                <div className='w-full'>
                    {process.map((item, index) => (
                        <div
                            key={index}
                            className={`flex px-0 lg:px-5 py-7 flex-col lg:flex-row border-b mb-5 ${index % 2 === 0 ? ' flex-col-reverse lg:flex-row-reverse' : ''}`}
                        >
                            <div className='w-full lg:w-[30%] flex justify-center items-center'>
                                <Image
                                    className=' z-0 rounded-none w-full h-full object-contain  '
                                    alt={item.title}
                                    src={item.image}
                                />
                            </div>


                            <div className=' w-full mt-3 lg:mt-0 lg:w-[70%] px-2 lg:px-5 py-2 '>
                                <h2 className='text-3xl text-blue-500 font-semibold mb-2'>
                                    {item.header}
                                </h2>
                                <p className=' '>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default OurProcess