"use client"; // Add this to make the component a client-side component

import { FaRocket } from 'react-icons/fa';
import { roboto_mono, luckiest_guy, black_han_sans, lato } from "../app/fonts"; // Ensure the import path is correct

const Footer = () => {
  return (
    <div className='bg-slate-950 text-white w-full relative'>
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

      <div className="max-w-full lg:max-w-7xl h-full mx-auto">
        <div className="flex justify-center items-center w-full h-[80%]">
          <div className='w-full lg:w-[60%] text-center flex p-5 flex-col justify-center items-center mb-5'>
            <h2 className='font-bold opacity-70 text-xl'>TheBluePixelAgency</h2>
            <h1 className={`text-5xl mt-10 ${black_han_sans}`}>As your partner, we treat your website like it&apos;s our own</h1>
            <h4 className={`text-lg my-10 ${lato} `}>Let&apos;s find out if we&apos;re a good fit for each other.</h4>
            <button className='px-10 py-5 flex items-center justify-between text-black bg-blue-400 hover:bg-blue-500 duration-200 rounded-md'>
              <FaRocket />
              <span className="ml-2 font-bold capitalize">get a proposal</span>
            </button>
          </div>
        </div>

        <div className='w-full h-[20%] mt-10 lg:mt-0 py-5 lg:py-0 flex justify-center items-center'>
          <div className='w-full lg:text-base text-center leading-6 flex-col flex lg:flex-row justify-between border-t py-5'>
            <span>Copyright © The Blue Pixel Agency Inc.</span>
            <span className='my-3 lg:my-0'>Privacy Policy</span>
            <span>Based in Lagos, Ogun & Ebonyi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
