import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
  children: ReactNode;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, onClose, isOpen, children, lazy } = props;

  const { isClosing, close, isMounted } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  });

  if (lazy && !isMounted) {
    return null;
  }

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, ['app_drawer', className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
