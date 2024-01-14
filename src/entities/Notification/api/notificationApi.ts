import { rtkApi } from 'shared/api/rtkApi';
import { NotificationModel } from '../model/types/Notification';

const notificationsListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationsList: build.query<NotificationModel[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const { useGetNotificationsListQuery } = notificationsListApi;
