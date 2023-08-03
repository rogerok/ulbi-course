import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { SidebarItemType } from "../../model/item";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  (props: SidebarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
      return null;
    }

    return (
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    );
  }
);
