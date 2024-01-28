import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { RatingCard } from 'entities/Rating';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  useGetArticleRatingQuery,
  useRateArticleMutation,
} from '../../api/articleRatingApi';
import cls from './ArticleRating.module.scss';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const user = useSelector(getUserAuthData);
  const [postArticleRating] = useRateArticleMutation();

  const { data, isLoading } = useGetArticleRatingQuery({
    articleId,
    userId: user?.id ?? '',
  });

  const rateArticleMutation = useCallback(
    (starsCount: number, feedback?: string) => {
      postArticleRating({
        userId: user?.id ?? '',
        rate: starsCount,
        articleId,
        feedback,
      });
    },
    [articleId, postArticleRating, user?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      rateArticleMutation(starsCount, feedback);
    },
    [rateArticleMutation],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      rateArticleMutation(starsCount);
    },
    [rateArticleMutation],
  );

  if (isLoading) {
    return <Skeleton height={120} width="100%" />;
  }

  const rate = (data && data[0]?.rate) || 0;

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      className={classNames(cls.ArticleRating, {}, [className])}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв')}
      hasFeedback
      rate={rate}
    />
  );
});

export default ArticleRating;
