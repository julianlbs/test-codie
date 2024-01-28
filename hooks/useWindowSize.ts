import { useState, useEffect } from 'react';

interface IWindowSize {
  width?: number, height?: number,
  screenSize?: 'sm' | 'md' | 'lg' | 'xl' | undefined;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({

  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let screenSize: IWindowSize["screenSize"] = undefined;

      if (width < 576) {
        screenSize = 'sm';
      } else if (width < 768) {
        screenSize = 'md';
      } else if (width < 992) {
        screenSize = 'lg';
      } else if (width >= 992) {
        screenSize = 'xl';
      } else {
        screenSize = undefined;
      }

      setWindowSize({
        width,
        height: window.innerHeight,
        screenSize,
      });
    };

    // Initial size on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
