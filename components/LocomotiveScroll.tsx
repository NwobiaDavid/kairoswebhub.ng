"use client"

import { useEffect, useRef, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

interface LocomotiveScrollProps {
  children: ReactNode;
}

const LocomotiveScrollComponent: React.FC<LocomotiveScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current as HTMLElement,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollComponent;
