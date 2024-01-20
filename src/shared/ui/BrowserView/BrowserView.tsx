import { FC, ReactNode } from 'react';
import { useDetectMobileDevice } from 'shared/lib/hooks/useDetectMobileDevice/useDetectMobileDevice';

interface BrowserViewProps {
  children: ReactNode;
}

export const BrowserView: FC<BrowserViewProps> = (props) => {
  const { children } = props;
  const isMobileDevice = useDetectMobileDevice();

  return <>{!isMobileDevice ? children : null}</>;
};
