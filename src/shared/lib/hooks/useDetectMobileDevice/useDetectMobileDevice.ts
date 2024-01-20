import { useEffect, useState } from 'react';

export const useDetectMobileDevice = (): boolean => {
  const [isMobileDevice, setIsIsMobileDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsIsMobileDevice(true);
    }
  }, []);

  return isMobileDevice;
};
