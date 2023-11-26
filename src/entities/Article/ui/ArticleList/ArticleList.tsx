import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  onLoadNextPage?: () => void;
  Header?: ReactNode;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    onLoadNextPage,
    Header,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (index: number, article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('Результатов не найдено')} theme={TextTheme.ERROR} />;
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {!!articles.length && (
        <Virtuoso
          style={{
            height: '100vh',
          }}
          totalCount={articles.length}
          data={articles}
          itemContent={renderArticle}
          endReached={onLoadNextPage}
          components={{
            Header: memo(() => <div>{Header}</div>),
            Footer: memo(() => <div>{isLoading && getSkeletons(view)}</div>),
          }}
        />
      )}
    </div>
  );
});
