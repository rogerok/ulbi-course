import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RoutePath } from 'shared/const/routerConstants';
import { AppImage } from 'shared/ui/AppImage';
import { ArticleBlockType, ArticleView } from '../../model/constants/constants';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  index: number;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, index } = props;
  const { t } = useTranslation();

  const setItemIndex = () =>
    sessionStorage.setItem('articleIndex', index.toString());

  const types = <Text text={article.type.join(', ')} className={cls.types} />;

  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user?.avatar} />
            <Text text={article.user?.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            alt={article.title}
            src={article.img}
            className={cls.img}
            fallback={<Skeleton width="100%" height={250} />}
            errorFallback={<Skeleton width="100%" height={250} />}
            width="100%"
            height={250}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink to={RoutePath.article_details + article.id}>
              <Button theme={ButtonTheme.OUTLINE} onClick={setItemIndex}>
                {t('Читать далее...')}
              </Button>
            </AppLink>

            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      to={RoutePath.article_details + article.id}
      onClick={setItemIndex}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            alt={article.title}
            src={article.img}
            className={cls.img}
            fallback={<Skeleton width="100%" height={250} />}
            errorFallback={<Skeleton width={200} />}
            width="100%"
            height={250}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
