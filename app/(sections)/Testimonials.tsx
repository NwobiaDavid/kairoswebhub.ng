"use client"

import { Avatar } from '@nextui-org/avatar';
import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Testimonials = () => {
    const data = [
        {
            name: "Norah Landry",
            company: "White Physiotherapy Clinic",
            img: "/assets/profiles/one.webp",
            comment: '"Our site consistently ranks #1 on Google, thanks to Azuro Digital"',
        },
        {
            name: "Olawane Agenlina",
            company: "Ville Worth",
            img: "/assets/profiles/three.jpg",
            comment: '"Our site consistently ranks #1 on Google, thanks to Azuro Digital"',
        },
        {
            name: "Norah Landry",
            company: "Peniel Crest School ",
            img: "/assets/profiles/two.webp",
            comment: '"Our site consistently ranks #1 on Google, thanks to Azuro Digital"',
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
            id="testimonials"
            ref={containerRef}
            className='w-full lg:h-[40vh] bg-slate-50 py-16 lg:py-0 flex lg:flex-row flex-col justify-center items-center text-black'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div
                className="flex flex-col lg:flex-row w-full lg:w-[90%] xl:w-[70%] justify-between gap-5 items-center h-full"
                variants={containerVariants}
            >
                {data.map((item, index) => (
                    <motion.div key={index} className="w-full p-5" variants={itemVariants}>
                        <span className='max-w-[35%] lg:max-w-[25%] justify-around flex text-yellow-500'>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </span>

                        <p className='text-xl my-3 lg:my-5'>
                            {item.comment}
                        </p>

                        <div className='flex items-center py-2'>
                            <Avatar size="lg" src={item.img} />
                            <div className='ml-6 lg:ml-4 text-sm font-medium opacity-70'>
                                <h2>{item.name}</h2>
                                <p>{item.company}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Testimonials;
