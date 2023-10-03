import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const timeoutRef = useRef(false);

  return useCallback(
    (...args: any[]) => {
      if (!timeoutRef.current) {
        callback(...args);
        timeoutRef.current = true;

        setTimeout(() => {
          timeoutRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
};
