import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { isClosing, close, isMounted } = useModal({
    isOpen,
    animationDelay: ANIMATION_DELAY,
    onClose,
  });
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
      >
        <Overlay onClick={close} />
        <div className={cls.overlay} onClick={close}>
          <div className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
