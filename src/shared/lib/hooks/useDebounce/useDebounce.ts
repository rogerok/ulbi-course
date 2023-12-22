import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (
  callback: (...args: unknown[]) => void,
  delay: number,
) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: unknown[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay],
  );
};
