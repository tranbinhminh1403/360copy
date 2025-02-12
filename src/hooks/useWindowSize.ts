import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      
      window.addEventListener('resize', handleResize);
      handleResize();
      // console.log(size)
      return () => window.removeEventListener('resize', handleResize);

    },[window.innerWidth, window.innerHeight]); 

    return size;
};