import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import React, { useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesPageFilter } from '../../ui/ArticlePageFilter/ArticlePageFilter';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articlesSelector';
import cls from './ArticileInfiniteList.module.scss';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesView);

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  return (
    <div className={classNames('ArticleInfiniteList', {}, [className])}>
      <ArticleList
        className={cls.articleList}
        isLoading={isLoading}
        view={view}
        articles={articles}
        Header={
          <div className={cls.switchers}>
            <ArticlesPageFilter />
          </div>
        }
        onLoadNextPage={onLoadNextPage}
      />
    </div>
  );
};
