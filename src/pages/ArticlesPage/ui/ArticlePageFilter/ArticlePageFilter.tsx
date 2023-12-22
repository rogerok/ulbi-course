import { useTranslation } from 'react-i18next';
import React, { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSelector } from 'features/ArticleSort';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import { fetchArticles } from '../../model/services/fetchArticles';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
  getArticlesSearch,
  getArticlesSortField,
  getArticlesSortOrder,
  getArticlesView,
  getArticleType,
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
  const search = useSelector(getArticlesSearch);
  const articleType = useSelector(getArticleType);

  const fetchData = useCallback(() => {
    dispatch(
      fetchArticles({
        replace: true,
      }),
    );
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const handleViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setArticleView(view));
    },
    [dispatch],
  );

  const handleSortFieldChange = useCallback(
    (field: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(field));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleSortOrderChange = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleSearchChange = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  const tabsItems: TabItem<ArticleType>[] = useMemo(
    () => [
      {
        value: ArticleType.ALL,
        content: <>{t('Все')}</>,
      },
      {
        value: ArticleType.IT,
        content: <>{t('Айти')}</>,
      },
      {
        value: ArticleType.SCIENCE,
        content: <>{t('Наука')}</>,
      },
      {
        value: ArticleType.ECONOMICS,
        content: <>{t('Экономика')}</>,
      },
    ],
    [t],
  );

  const handleTabClick = useCallback(
    (tab: TabItem<ArticleType>) => {
      dispatch(articlesPageActions.setType(tab.value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
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
        <Input
          value={search}
          onChange={handleSearchChange}
          placeholder={t('Поиск')}
        />
      </Card>
      <Tabs<ArticleType>
        onTabClick={handleTabClick}
        value={articleType}
        tabs={tabsItems}
        className={cls.tabs}
      />
    </div>
  );
};
