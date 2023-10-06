import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticlesView } from 'pages/ArticlesPage/model/selectors/articlesSelector';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import cls from './ArticlePageFilter.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = (props: ArticlesPageFilterProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
  const handleViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setArticleView(view));
    },
    [dispatch],
  );

  return (
    <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleViewSelector
          view={view ?? ArticleView.SMALL}
          onViewClick={handleViewChange}
        />
        <Card>
          <Input placeholder={t('Поиск')} />
        </Card>
      </div>
    </div>
  );
};
