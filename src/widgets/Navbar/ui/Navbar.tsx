import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import React, { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button theme={ButtonTheme.ClEAR_INVERTED} onClick={toggleOpen}>{t("Войти")}</Button>
            <Modal isOpen={open} onClose={toggleOpen}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Accusamus aliquam commodi culpa cum
                    distinctio dolorum ducimus eligendi error
                    iste molestiae nesciunt officiis quidem, ratione
                    reiciendis sed
                    tempore tenetur veniam voluptatem.
                </div>
            </Modal>
        </div>
    );
};
