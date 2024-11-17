"use client"

import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React, { useRef } from 'react'
import { HiArrowUpRight } from "react-icons/hi2";
import { roboto_mono, luckiest_guy, black_han_sans, lato } from "../fonts";
import { motion, useInView } from 'framer-motion';

const Projects = () => {

    const projects = [
        {
            image: "/assets/projects/villeworth.jpeg",
            link: "https://www.villeworth.com/",
            name: "Ville Worth"
        },
        {
            image: "/assets/projects/penail.jpeg",
            link: "https://www.penielcrestschool.com/",
            name: "Peniel Crest School"
        },
        {
            image: "/assets/projects/",
            link: "https://www.whitephysiotherapyclinic.com.ng/",
            name: "White Physiotherapy Clinic"
        },
        {
            image: "/assets/projects/kelani.png",
            link: "https://kelani.ng/consulting",
            name: "Kelani"
        },
        {
            image: "/assets/projects/pally thumb.PNG",
            link: "https://pallly-online.vercel.app/",
            name: "Pallly"
        },
        {
            image: "/assets/projects/nwd.PNG",
            link: "https://nwobia-david-portfolio.vercel.app/",
            name: "Personal website"
        },

    ];

    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // delay between children animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div ref={containerRef} id="projects" className='w-full bg-slate-50 text-black'>
            <div className="lg:max-w-7xl lg:mx-auto py-16 px-4 lg:px-3">
                <div className="w-full mb-10">
                    <h1 className={`text-center lg:text-left text-5xl lg:text-6xl font-semibold ${black_han_sans} opacity-80`}>Recent works</h1>
                </div>
                <motion.div
                    className='grid gap-4 lg:gap-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-3'
                    variants={containerVariants}
                    initial="hidden"
                    animate={ isInView ? "show": "hidden"}
                >
                    {projects.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className='hover:shadow-lg duration-200 bg-white rounded-sm h-[270px] lg:h-[350px] w-full p-6 lg:p-4' >
                            <Link href={item.link} target='_blank' className='w-full h-full '>
                                <div className='w-full flex justify-center lg:justify-start items-center h-[75%]'>
                                    <Image
                                        radius='sm'
                                        className='border object-cover z-0 w-full h-[150px] lg:w-[400px] lg:h-[250px]'
                                        alt={item.name}
                                        src={item.image}
                                    />
                                </div>
                                <div className='h-[25%] flex items-end'>
                                    <div className='flex text-xl hover:font-semibold'>
                                        <h2 className="mr-2 font-medium capitalize">{item.name}</h2>
                                        <span className='mb-[10%]'><HiArrowUpRight /></span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
