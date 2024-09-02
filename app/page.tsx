import Navbar from '@/components/Navbar';
import {Button} from '@nextui-org/button'; 
import Hero from './(sections)/Hero';
import Testimonials from './(sections)/Testimonials';
import Features from './(sections)/Features';
import Projects from './(sections)/Projects';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-[115vh]"><Hero/></div>
      
      <Testimonials />
      <Features />
      <Projects />
      
      <div className="h-screen bg-gray-100">
        <h1 className="text-center pt-40 text-3xl">Scroll to See Navbar Effect</h1>
        <div className="h-[2000px]"></div>
      </div>
    </main>
  );
}
