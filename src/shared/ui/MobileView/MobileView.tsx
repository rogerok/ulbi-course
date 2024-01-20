import { FC, ReactNode } from 'react';
import { useDetectMobileDevice } from 'shared/lib/hooks/useDetectMobileDevice/useDetectMobileDevice';

interface MobileViewProps {
  children: ReactNode;
}

export const MobileView: FC<MobileViewProps> = (props) => {
  const { children } = props;
  const isMobileDevice = useDetectMobileDevice();

  return <>{isMobileDevice ? children : null}</>;
};
