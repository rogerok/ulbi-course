import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { NotificationModel } from '../../model/types/Notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: NotificationModel;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props;

  const content = (
    <a className={cls.link} href={notification.href}>
      <Card
        theme={CardTheme.OUTLINE}
        className={classNames(cls.NotificationItem, {}, [className])}
      >
        <Text
          theme={TextTheme.INVERTED}
          title={notification.title}
          text={notification.description}
        />
      </Card>
    </a>
  );

  return notification.href ? (
    content
  ) : (
    <Card
      theme={CardTheme.OUTLINE}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text
        theme={TextTheme.INVERTED}
        title={notification.title}
        text={notification.description}
      />
    </Card>
  );
});
