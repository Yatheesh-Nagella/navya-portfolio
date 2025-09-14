import { useEffect, useState } from 'react';
import { throttle } from '@/lib/utils';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScrollY / documentHeight) * 100;

      setScrollY(currentScrollY);
      setScrollPercent(Math.min(scrollPercentage, 100));
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY, scrollPercent };
};