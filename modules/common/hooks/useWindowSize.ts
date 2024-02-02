import { useState, useEffect } from 'react';

interface IWindowSize {
  width?: number, height?: number,
  screenSize?: 'sm' | 'md' | 'lg' | 'xl' | undefined;
}

export const useWindowSize = () => {
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

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
