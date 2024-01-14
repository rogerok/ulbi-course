import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { useGetNotificationsListQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;

  const { data, isLoading } = useGetNotificationsListQuery(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        className={classNames(cls.NotificationList, {}, [className])}
        gap={16}
      >
        <Skeleton width={'100%'} height={88} border={'8px'} />
        <Skeleton width={'100%'} height={88} border={'8px'} />
        <Skeleton width={'100%'} height={88} border={'8px'} />
      </VStack>
    );
  }

  return (
    <VStack
      className={classNames(cls.NotificationList, {}, [className])}
      gap={16}
    >
      {data?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
});
