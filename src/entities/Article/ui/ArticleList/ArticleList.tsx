import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, ReactNode, useRef } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleIndexSessionStorageKey } from '../../model/constants/constants';
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

const getSkeletons = () =>
  new Array(3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        className={cls.card}
        key={index}
        view={ArticleView.BIG}
      />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.BIG,
    isLoading,
    onLoadNextPage,
    Header,
  } = props;
  const { t } = useTranslation();
  const virtuosoGridRef = useRef<VirtuosoGridHandle | null>(null);

  // eslint-disable-next-line react/prop-types
  const ItemContainer: FC<{ index: number }> = memo(({ index }) => (
    <div className={cls.itemContainer}>
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    </div>
  ));

  const initialPositionIndex =
    Number(sessionStorage.getItem(ArticleIndexSessionStorageKey)) || 0;

  const renderArticle = (index: number, article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      index={index}
    />
  );

  if (!isLoading && (!articles || !articles.length)) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('Результатов не найдено')} theme={TextTheme.ERROR} />;
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles && !!articles.length && view === ArticleView.BIG ? (
        <Virtuoso
          style={{
            height: '100vh',
          }}
          totalCount={articles.length}
          data={articles}
          initialTopMostItemIndex={initialPositionIndex}
          itemContent={renderArticle}
          endReached={onLoadNextPage}
          components={{
            Header: memo(() => <div>{Header}</div>),
            Footer: memo(() => <div>{isLoading && getSkeletons()}</div>),
          }}
        />
      ) : (
        <VirtuosoGrid
          style={{
            height: '100vh',
          }}
          ref={virtuosoGridRef}
          endReached={onLoadNextPage}
          data={articles}
          totalCount={articles?.length ?? 0}
          itemContent={renderArticle}
          components={{
            Item: memo(() => <div className={cls.itemContainer} />),
            Header: memo(() => <div>{Header}</div>),
            ScrollSeekPlaceholder: ItemContainer,
          }}
          initialTopMostItemIndex={initialPositionIndex}
          listClassName={cls.itemsWrapper}
          scrollSeekConfiguration={{
            enter: (velocity) => Math.abs(velocity) > 200,
            exit: (velocity) => Math.abs(velocity) < 30,
          }}
        />
      )}
    </div>
  );
});
