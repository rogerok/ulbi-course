import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage';
import { ArticlesPageFilter } from 'pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter';
import { useSearchParams } from 'react-router-dom';
import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articlesSelector';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articles: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);
  const [searchParams] = useSearchParams();

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return (
      <PageWrapper>
        <Text
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке статьи.')}
        />
      </PageWrapper>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper className={classNames(cls.ArticlesPage, {}, [className])}>
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
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
