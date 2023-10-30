import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getUserCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    let canEdit = false;

    if (article && user) {
      canEdit = article?.user?.id === user?.id;
    }

    return canEdit;
  },
);
