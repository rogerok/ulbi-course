import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSelector } from 'features/ArticleSort';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
  getArticlesSortField,
  getArticlesSortOrder,
  getArticlesView,
} from '../../model/selectors/articlesSelector';
import cls from './ArticlePageFilter.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = (props: ArticlesPageFilterProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
  const sortOrder = useSelector(getArticlesSortOrder);
  const sortField = useSelector(getArticlesSortField);

  const handleViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setArticleView(view));
    },
    [dispatch],
  );

  const handleSortFieldChange = useCallback(
    (field: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(field));
    },
    [dispatch],
  );
  const handleSortOrderChange = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
    },
    [dispatch],
  );

  return (
    <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSelector
          className={cls.selector}
          onSortFieldChange={handleSortFieldChange}
          onOrderChange={handleSortOrderChange}
          order={sortOrder}
          sort={sortField}
        />
        <ArticleViewSelector
          view={view ?? ArticleView.SMALL}
          onViewClick={handleViewChange}
        />
      </div>
      <Card>
        <Input placeholder={t('Поиск')} />
      </Card>
    </div>
  );
};
