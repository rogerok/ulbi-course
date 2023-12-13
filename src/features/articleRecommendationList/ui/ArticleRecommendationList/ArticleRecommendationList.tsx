import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleView } from 'entities/Article';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import cls from 'entities/Article/ui/ArticleList/ArticleList.module.scss';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecomendationsApi';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(
  (props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data, error, isLoading } = useGetArticleRecommendationsListQuery(3);

    if (isLoading || error || !data) {
      return null;
    }

    return (
      <VStack gap={8} className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('Рекомендуем')} />
        <HStack gap={32}>
          {data.map((article, index) => (
            <ArticleListItem
              article={article}
              view={ArticleView.SMALL}
              className={cls.card}
              key={article.id}
              index={index}
            />
          ))}
        </HStack>
      </VStack>
    );
  },
);
