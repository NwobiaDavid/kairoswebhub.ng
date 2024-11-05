// components/LenisScroll.tsx
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisScroll: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // Configure Lenis options here
      duration: 1.2,          // Adjust duration for scroll timing
      smooth: true,           // Enable smooth scroll
      easing: (t) => t * (2 - t),  // Default easing function
      orientation: 'vertical', // For vertical scrolling
      gestureOrientation: 'vertical',
    });

    // Animation frame to update Lenis
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
