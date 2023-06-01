import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import React, { useCallback, useState } from "react";
import { LoginModal } from "features/AuthUser";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setOpen(true);
    }, []);


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>


            <Button theme={ButtonTheme.ClEAR_INVERTED} onClick={onShowModal}>{t("Войти")}</Button>
            <LoginModal isOpen={open} onClose={onCloseModal} />
        </div>
    );
};
