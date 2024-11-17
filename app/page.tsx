// import { useEffect, useRef } from "react";
import Navbar from '@/components/Navbar';
import {Button} from '@nextui-org/button'; 
import Hero from './(sections)/Hero';
import Testimonials from './(sections)/Testimonials';
import Features from './(sections)/Features';
import Projects from './(sections)/Projects';
import Resources from './(sections)/Resources';
import Mission from './(sections)/Mission';
import OurProcess from './(sections)/OurProcess';
import Footer from '@/components/Footer';
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.css";

export default function Home() {

  // useEffect(() => {
  //   // Initialize LocomotiveScroll on the ref element
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     multiplier: 0.9,
  //   });

  //   // Cleanup on component unmount
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);


  return (
    <main  className=' max-w-screen overflow-hidden ' >
      <Navbar />
      <div className=" h-[105vh] lg:h-[115vh]"><Hero/></div>
      <Testimonials />
      <Features />
      <Projects />
      <OurProcess />
      {/* <Mission /> */}
      <Resources />
      <Footer/>
    </main>
  );
}
