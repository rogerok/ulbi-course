import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export type SpringType = typeof import('@react-spring/web');
export type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
  Spring?: SpringType;
  Gesture?: GestureType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

interface AnimationProviderProps {
  children: ReactNode;
}

export const useAnimationLibs = () =>
  useContext(AnimationContext) as Required<AnimationContextPayload>;

const getAsyncAnimationModules = async () =>
  Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

export const AnimationProvider = (props: AnimationProviderProps) => {
  const { children } = props;

  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  const contextValue = useMemo<AnimationContextPayload>(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};
