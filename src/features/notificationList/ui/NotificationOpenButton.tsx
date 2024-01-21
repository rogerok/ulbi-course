import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView } from 'shared/ui/BrowserView/BrowserView';
import { MobileView } from 'shared/ui/MobileView/MobileView';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationOpenButton.module.scss';

interface NotificationOpenButtonProps {
  className?: string;
}

export const NotificationOpenButton = memo(
  (props: NotificationOpenButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const setDrawerOpen = useCallback(() => {
      setIsOpen(true);
    }, []);

    const setDrawerClose = useCallback(() => {
      setIsOpen(false);
    }, []);

    const triggerButton = (
      <Button theme={ButtonTheme.CLEAR} onClick={setDrawerOpen}>
        <Icon Svg={NotificationIcon} theme={IconTheme.INVERTED} />
      </Button>
    );

    return (
      <div>
        <BrowserView>
          <Popover
            className={classNames(cls.NotificationOpenButton, {}, [className])}
            direction="bottom left"
            trigger={triggerButton}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        </BrowserView>
        <MobileView>
          {triggerButton}
          <AnimationProvider>
            <Drawer onClose={setDrawerClose} isOpen={isOpen}>
              <NotificationList />
            </Drawer>
          </AnimationProvider>
        </MobileView>
      </div>
    );
  },
);
