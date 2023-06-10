import { FC, Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "features/AuthUser/ui/LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;

}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            onClose={onClose}
            className={classNames("", {}, [className])}
            isOpen={isOpen}
            lazy
        >
            <Suspense fallback={<Loader />}>

                <LoginFormAsync />

            </Suspense>
        </Modal>
    );
};
