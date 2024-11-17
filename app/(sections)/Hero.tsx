"use client"

import Image from 'next/image';
import React, { useRef } from 'react';
import { Avatar } from "@nextui-org/avatar";
import { FaRocket, FaStar } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { roboto_mono, luckiest_guy, black_han_sans, lato } from "../fonts";  // Make sure the path is correct
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { CiLock, CiMail } from 'react-icons/ci';

const Hero = () => {
    // Ref to track the section's visibility
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <div ref={ref} id='hero' className='w-full pt-10 md:pt-20  2xl:pt-40 h-full bg-black'>
            <motion.div
                className="lg:mx-auto relative max-w-full lg:max-w-7xl h-full"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className="flex lg:flex-row flex-col pt-20  justify-between h-[90%] lg:h-[85%] w-full">
                    <motion.div
                        className='w-full px-3 xl:px-2 lg:w-[60%]'
                        variants={childVariants}
                    >
                        <div>
                            <div className='mb-[35px]'>
                                <h1 className={`font-semibold text-4xl md:text-5xl leading-[45px] xl:text-6xl opacity-95 ${black_han_sans}`}>
                                    Establish online presence of your business that drives revenue
                                </h1>
                                <p className={`max-w-full lg:max-w-[70%] my-5 text-xl ${lato}`}>
                                    Results-driven web design, CAC registration, SEO, branding, copywriting & digital mrketing strategy.
                                </p>
                            </div>
                            <motion.div variants={childVariants}>
                                <Button onPress={onOpen} size='lg' className='px-10 py-5 w-full lg:w-fit flex items-center justify-center lg:justify-between text-black bg-blue-400 hover:bg-blue-500 duration-200 rounded-md'>
                                    <FaRocket />
                                    <span className={`ml-2 font-bold capitalize ${lato}`}>contact us</span>
                                    <Modal
                                        isOpen={isOpen}
                                        onOpenChange={onOpenChange}
                                        placement="top-center"
                                    >
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">Contact Us</ModalHeader>
                                                    
                                                    <ModalBody>
                                                        <form action="https://formspree.io/f/mbljgnyk" method="POST">
                                                            <Input
                                                                name="name"
                                                                placeholder="Your name"
                                                                variant="bordered"
                                                                required
                                                            />
                                                            <Input
                                                                name="email"
                                                                placeholder="Your email"
                                                                type="email"
                                                                variant="bordered"
                                                                className='my-4'
                                                                required
                                                            />
                                                            <Input
                                                                name="subject"
                                                                placeholder="Subject"
                                                                variant="bordered"
                                                            />
                                                            <textarea
                                                                id="message"
                                                                name="message"
                                                                placeholder="Your message"
                                                                className="w-full p-2 mt-4 border-3 border-neutral-700 rounded-lg "
                                                                required
                                                            ></textarea>
                                                            <ModalFooter>
                                                                <Button color="danger" variant="light" onPress={onClose}>
                                                                    Close
                                                                </Button>
                                                                <Button color="primary" type="submit" onPress={onClose}>
                                                                    Send Message
                                                                </Button>
                                                            </ModalFooter>
                                                        </form>
                                                    </ModalBody>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div className='p-2 mt-14 md:mt-20' variants={childVariants}>
                            <span className='max-w-[30%] lg:max-w-[15%] justify-around flex text-yellow-500'>
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </span>
                            <p className='w-full lg:max-w-[50%] text-base xl:text-lg py-3'>
                                &quot;Our new site has a 60% higher conversion rate than our old one&quot;
                            </p>
                            <div className='flex items-center py-1 lg:py-3'>
                                <Avatar className='' size='lg' isBordered src="/assets/profiles/four.jpg" />
                                <div className='ml-4 opacity-30 text-sm'>
                                    <h2>JP McAvoy</h2>
                                    <p>ConductLaw</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='h-[500px] hidden lg:relative w-full lg:w-[40%] lg:h-full lg:flex justify-center items-center flex-col p-3'
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2, // Delay between each child animation
                                }
                            }
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* First row of boxes */}
                        <motion.div
                            className="w-full mb-3 flex h-[40%] justify-center gap-3 items-center"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >


                            <motion.div
                                className={`w-[60%] h-full bg-blue-500 bg-[url("/assets/hero/oneee.webp")] bg-cover border bg-no-repeat rounded-lg p-2`}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            ></motion.div>
                            <motion.div
                                className='w-[40%] h-full bg-blue-500 bg-[url("/assets/hero/twooo.jpg")] bg-cover bg-no-repeat rounded-lg p-2'
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            ></motion.div>


                        </motion.div>

                        {/* Second row of boxes */}
                        <motion.div
                            className="w-full flex h-[40%] justify-center gap-3 items-center"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >

                            <motion.div
                                className='w-[30%] h-full bg-blue-500 bg-[url("/assets/hero/threee.jpeg")] bg-cover bg-no-repeat rounded-lg p-2'
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            ></motion.div>
                            <motion.div
                                className='w-[70%] h-full bg-blue-500 border bg-[url("/assets/hero/fourrr.jpg")] bg-cover bg-no-repeat rounded-lg p-2'
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            ></motion.div>


                        </motion.div>
                    </motion.div>

                </div>

                <motion.div className="w-full h-[10%] lg:h-[15%] justify-center flex items-end" variants={childVariants}>
                    <h1 className={`font-bold p-4 text-2xl lg:text-4xl tracking-wider capitalize text-center opacity-30 ${black_han_sans}`}>
                        Kairos WebHub
                    </h1>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
