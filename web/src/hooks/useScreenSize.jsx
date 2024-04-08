import { useEffect, useState } from "react";

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState('');
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 640) {
          setScreenSize('sm');
        } else if (window.innerWidth <= 768) {
          setScreenSize('md');
        } else if (window.innerWidth <= 1024) {
          setScreenSize('lg');
        } else {
          setScreenSize('xl');
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return screenSize;
  };