"use client";

import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React, { useRef } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { roboto_mono, luckiest_guy, black_han_sans, lato } from "../fonts"; 
import { motion, useInView } from "framer-motion";

const Resources = () => {
    const resources = [
        {
            title: "Why Is Good Web Design Important?",
            image: "/assets/resources/one.jpg",
            link: "https://www.digitalsilk.com/digital-trends/why-good-web-design-is-important/"
        },
        {
            title: "Why Web Design & Development Is So Important for Business",
            image: "/assets/resources/to.jpeg",
            link: "https://www.linkedin.com/pulse/why-web-design-development-so-important-business-brandingnuts/"
        },
        {
            title: "The Importance of SEO for Your Business",
            image: "/assets/resources/tooo.webp",
            link: "https://www.metricmarketing.com/blog/the-importance-of-seo-for-your-business-benefits-of-seo-why-seo-is-so-powerful/"
        },
        {
            title: "Importance of Website: Why Website is Important for a Business",
            image: "/assets/resources/treee.jpg",
            link: "https://www.seattlenewmedia.com/blog/importance-of-website-for-business"
        },
    ];

    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            id="resources"
            ref={containerRef}
            className='text-black bg-slate-100'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className='flex justify-center items-center flex-col py-16 px-4'>
                <motion.div
                    className='w-full mb-10 justify-center flex items-center p-5'
                    variants={itemVariants}
                >
                    <h1 className={`text-5xl lg:text-6xl opacity-80 capitalize text-center lg:text-left font-semibold ${black_han_sans}`}>
                        helpful resources
                    </h1>
                </motion.div>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3'
                    variants={containerVariants}
                >
                    {resources.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className='hover:shadow-lg duration-200 bg-white rounded-sm lg:h-[550px] lg:w-full xl:w-[450px] w-full h-[500px] lg:px-4 lg:py-4 py-2 px-2'
                        >
                            <Link
                                href={item.link}
                                target='_blank'
                                className='w-full h-full'
                            >
                                <div className='w-full flex justify-center  overflow-hidden items-center h-[50%]'>
                                    <Image
                                        radius='sm'
                                        className='border z-0 lg:w-[450px] h-[250px] object-cover lg:h-[300px]'
                                        alt="NextUI hero Image with delay"
                                        src={item.image}
                                    />
                                </div>
                                <div className='h-[50%] pt-2 flex-col flex items-center'>
                                    <div className='h-[80%] flex items-center'>
                                        <h2 className='capitalize text-3xl font-semibold italic'>
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className='flex h-[20%] w-full items-center hover:font-semibold'>
                                        <span className="mr-2 font-medium capitalize">read on</span>
                                        <span className='text-4xl'><HiArrowLongRight /></span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Resources;
