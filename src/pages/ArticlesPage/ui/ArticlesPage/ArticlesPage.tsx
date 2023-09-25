import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from 'pages/ArticlesPage/model/selectors/articlesSelector';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
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

  const handleViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setArticleView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticles());
    dispatch(articlesPageActions.initState());
  });

  if (error) {
    return (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи.')}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <div className={cls.switchers}>
          <ArticleViewSelector
            view={view ?? ArticleView.SMALL}
            onViewClick={handleViewChange}
          />
        </div>
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
