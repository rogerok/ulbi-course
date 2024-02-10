import { AppRoutes } from 'shared/types/router';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/article/create',
  [AppRoutes.ARTICLE_EDIT]: '/article/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin_panel',
  [AppRoutes.FORBIDDEN]: '/forbidden',

  // последний
  [AppRoutes.NOT_FOUND]: '*',
};
