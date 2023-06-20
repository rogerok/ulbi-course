import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import React, { memo, useCallback, useState } from "react";
import { LoginModal } from "features/AuthUser";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.ClEAR_INVERTED} onClick={onLogout}>{t("Выйти")}</Button>
        </div>;
    }


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.ClEAR_INVERTED} onClick={onShowModal}>{t("Войти")}</Button>
            {open && <LoginModal isOpen={open} onClose={onCloseModal} />}
        </div>
    );
});
