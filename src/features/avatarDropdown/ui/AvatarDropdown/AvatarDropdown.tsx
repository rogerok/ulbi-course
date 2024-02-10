import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Dropdown } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {
  getIsUserAdmin,
  getIsUserManager,
  getUserAuthData,
  userActions,
} from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from 'shared/const/routerConstants';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return authData ? (
    <div>
      <Dropdown
        className={classNames(cls.AvatarDropdown, {}, [className])}
        direction="bottom left"
        items={[
          {
            content: t('Выйти'),
            onClick: onLogout,
          },

          {
            content: t('Создать статью'),
            href: RoutePath.article_create,
          },
          {
            content: t('Профиль'),
            href: RoutePath.profile + authData.id,
          },
          ...(isAdminPanelAvailable
            ? [
                {
                  content: t('Админка'),
                  href: RoutePath.admin_panel,
                },
              ]
            : []),
        ]}
        trigger={<Avatar size={30} src={authData.avatar} />}
      />
    </div>
  ) : null;
});
