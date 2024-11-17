"use client"; // Add this to make the component a client-side component

import { FaRocket } from 'react-icons/fa';
import { roboto_mono, luckiest_guy, black_han_sans, lato } from "../app/fonts"; // Ensure the import path is correct
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { CiLock, CiMail } from 'react-icons/ci';

const Footer = () => {
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <motion.div
      className='bg-slate-950 text-white w-full relative'
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute hidden lg:static left-[10%] opacity-70 top-[10%]">
        <div className='w-[100px] lg:w-[300px] gap-4 p-4 flex flex-col h-[100px] lg:h-[300px]'>
          <div className='w-full h-[60%] flex gap-4'>
            <div className="bg-blue-400 h-full rounded-md w-[70%]"></div>
            <div className="bg-blue-400 h-full rounded-md w-[30%]"></div>
          </div>
          <div className='w-full h-[40%] flex gap-4'>
            <div className="bg-blue-400 h-full rounded-md w-[20%]"></div>
            <div className="bg-blue-400 h-full rounded-md w-[80%]"></div>
          </div>
        </div>
      </div>

      <motion.div
        className="max-w-full lg:max-w-7xl h-full mx-auto"
        variants={containerVariants}
      >
        <motion.div
          className="flex justify-center items-center w-full h-[80%]"
          variants={itemVariants}
        >
          <div className='w-full lg:w-[60%] text-center flex p-5 flex-col justify-center items-center mb-5'>
            <h2 className={`font-bold opacity-70 text-xl  ${black_han_sans}`}>
              Kairos Webhub
            </h2>
            <h1 className={`text-5xl mt-10 leading-[50px]  ${black_han_sans}`}>
              As your partner, we treat your website like it&apos;s our own
            </h1>
            <h4 className={`text-lg my-10 ${lato}`}>
              Let&apos;s find out if we&apos;re a good fit for each other.
            </h4>
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
          </div>
        </motion.div>

        <motion.div
          className='w-full h-[20%] mt-10 lg:mt-0 py-5 lg:py-0 flex justify-center items-center'
          variants={itemVariants}
        >
          <div className='w-full lg:text-base text-center leading-6 flex-col flex lg:flex-row justify-between border-t py-5'>
            <span>Copyright © Kairos Webhub LLC.</span>
            <span className='my-3 lg:my-0'>Privacy Policy</span>
            <span>Based in Lagos, Nigeria</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
