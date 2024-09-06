/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { FaRocket, FaStar } from "react-icons/fa";
import { roboto_mono, luckiest_guy, black_han_sans, lato } from "../fonts";

const Hero = () => {
    return (
        <div className='w-full pt-20 lg:pt-40 h-full bg-black ' >
            <div className=" lg:mx-auto relative max-w-full lg:max-w-7xl  h-full  ">
                <div className="flex lg:flex-row flex-col pt-20 justify-between h-[90%] lg:h-[85%] w-full ">
                    <div className=' w-full px-3 lg:px-0 lg:w-[60%] ' >
                        <div>
                            <div className=' mb-[35px] ' >
                                <h1 className={` font-semibold text-5xl lg:text-6xl  ${black_han_sans} `} >Establish online presence of your business that drives revenue</h1>
                                <p className=' max-w-full lg:max-w-[70%] my-5 text-xl ' >Results-driven web design, development, SEO, branding, copywriting & digital strategy.</p>
                            </div>
                            <div className='  ' >
                                <button className=' px-10 py-5 w-full flex items-center justify-center lg:justify-between text-black bg-blue-400 hover:bg-blue-500 duration-200  rounded-md ' >
                                    <FaRocket />
                                    <span className="ml-2 font-bold capitalize ">get a proposal</span>
                                </button>
                            </div>
                        </div>

                        <div className=' p-2 mt-20 ' >
                            <span className=' max-w-[30%] lg:max-w-[15%] justify-around flex text-yellow-500  ' > <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </span>
                            <p className=' w-full lg:max-w-[50%] text-md lg:text-lg py-3 ' >
                                "Our new site has a 60% higher conversion rate than our old one"
                            </p>
                            <div className=' flex items-center py-1 lg:py-3 ' >
                                <Avatar className=' max-w-sm  lg:max-w-lg  ' size='md' isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

                                <div className=' ml-4 opacity-30 text-sm ' >
                                    <h2>JP McAvoy</h2>
                                    <p>ConductLaw</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='  h-[500px] hidden lg:relative w-full lg:w-[40%] lg:h-full lg:flex justify-center items-center flex-col p-3 ' >
                        <div className="w-full mb-3 flex h-[40%] justify-center gap-3 items-center">
                            <div className=' w-[60%] h-full bg-blue-500 rounded-lg p-2 ' >e</div>
                            <div className=' w-[40%] h-full bg-blue-500 rounded-lg p-2 ' >e</div>
                        </div>

                        <div className="w-full flex h-[40%] justify-center gap-3 items-center ">
                            <div className=' w-[30%] h-full bg-blue-500 rounded-lg p-2 ' >e</div>
                            <div className=' w-[70%] h-full bg-blue-500 rounded-lg p-2 ' >e</div>
                        </div>                        
                    </div>

                </div>

                <div className="w-full h-[10%] lg:h-[15%]  justify-center flex items-end ">
                    <h1 className=' font-bold p-4 text-2xl lg:text-4xl tracking-wider capitalize opacity-30 ' >the blue pixel agency</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero
