import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui/Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;

}

const ANIMATION_TIMEOUT = 300;

export const Modal: FC<ModalProps> = (props) => {
    const { className, isOpen, onClose, children } = props;

    const [isClosing, setIsClosing] = useState(false);

    const timer = useRef<ReturnType<typeof setTimeout>>();


    const closeModal = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_TIMEOUT);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeModal();
        }
    }, [closeModal]);


    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timer.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeModal}>
                    <div
                        className={classNames(cls.content, { [cls.opened]: isOpen })}
                        onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
