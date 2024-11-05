"use client";

import { Image } from "@nextui-org/react";
import React, { useRef } from "react";
import { black_han_sans } from "../fonts";
import { motion, useInView } from "framer-motion";


const Features = () => {
  const contents = [
    {
      title: "Custom web design & SEO services",
    },
    {
      title: "CAC business Registration",
    },
    {
      title: "Branding & Logo Design",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const containerVariants = {
    hidden: { opacity: 1 },
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
      id="features"
      ref={containerRef}
      className="w-full px-3 py-16 lg:px-0 lg:py-0 bg-white text-black flex justify-center items-center lg:h-[70vh]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-5 justify-center h-[80%] w-full items-center">
        <motion.div
          className="w-full lg:w-[45%] flex justify-end"
          variants={itemVariants}
          
        >
          <Image
            className="z-0 lg:rounded-md object-cover rounded-none lg:w-[400px] w-full h-[300px] lg:h-[500px]"
            alt="NextUI hero Image with delay"
            src="/assets/features.jpg"
          />
        </motion.div>
        <motion.div
          className="w-full mt-10 lg:mt-0 lg:w-[55%]"
          variants={itemVariants}
        >
          <div className="w-full lg:w-[60%]">
            <motion.h1
              className={`text-5xl lg:text-6xl font-semibold mb-4 text-center lg:text-left ${black_han_sans} opacity-80`}
              variants={itemVariants}
            >
              Everything your site needs for success
            </motion.h1>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5"
              variants={containerVariants}
            >
              {contents.map((item, index) => (
                <motion.div
                  key={index}
                  className="duration-200 flex justify-center text-lg rounded-md items-center p-3 text-center w-full h-[150px] bg-slate-100"
                  variants={itemVariants}
                >
                  {item.title}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
