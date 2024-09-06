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

export default function Home() {
  return (
    <main className=' ' >
      <Navbar />
      <div className=" h-[125vh] lg:h-[115vh]"><Hero/></div>
      
      <Testimonials />
      <Features />
      {/* <Projects />
      <OurProcess /> */}
      {/* <Mission /> */}
      {/* <Resources />
      <Footer/> */}
    </main>
  );
}
