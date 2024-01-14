import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationOpenButton.module.scss';

interface NotificationOpenButtonProps {
  className?: string;
}

export const NotificationOpenButton = memo(
  (props: NotificationOpenButtonProps) => {
    const { className } = props;

    return (
      <Popover
        className={classNames(cls.NotificationOpenButton, {}, [className])}
        direction="bottom left"
        trigger={
          <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} theme={IconTheme.INVERTED} />
          </Button>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    );
  },
);
