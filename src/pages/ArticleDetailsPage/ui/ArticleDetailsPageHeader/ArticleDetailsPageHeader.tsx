import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { generatePath, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getUserCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps,
): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const canEditArticle = useSelector(getUserCanEditArticle);
  const articleId = useSelector(getArticleDetailsData)?.id;
  const goEditPagePath = generatePath(RoutePath.article_edit, {
    id: articleId ?? '',
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePath.article_create);
  }, [navigate]);

  const goToEditPage = useCallback(() => {
    if (articleId) {
      navigate(goEditPagePath);
    }
  }, [articleId, navigate, goEditPagePath]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      {canEditArticle && (
        <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={goToEditPage}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
};
