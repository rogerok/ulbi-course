import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import { Article, ArticleView } from "../../model/types/Article";
import cls from "./ArticleListItem.module.scss";
import ViewIcon from "../../../../shared/assets/icons/views.svg";

interface ArticleListItemProps {
  className?: string;
  articleData: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, articleData, view } = props;
  const { t } = useTranslation();

  // if (view === ArticleView.BIG) {
  //   return (
  //     <article className={classNames(cls.ArticleListItem, {}, [className])}>
  //       <div>
  //         <img src={articleData.img} width={200} alt={articleData.title} />
  //         <time>{articleData.createdAt}</time>
  //       </div>
  //       <div>
  //         <p>{articleData.type}</p>
  //         <p>{articleData.views}</p>
  //       </div>
  //
  //       <h3>{articleData.title}</h3>
  //     </article>
  //   );
  // }

  return (
    <article className={classNames(cls.ArticleListItem, {}, [className])}>
      <div className={cls.card}>
        <div className={cls.imageWrapper}>
          <img
            className={cls.img}
            src={articleData.img}
            width={200}
            alt={articleData.title}
          />
          <Text className={cls.date} text={articleData.createdAt} />
        </div>

        <div className={cls.infoWrapper}>
          <Text className={cls.type} text={articleData.type.join(",")} />
          <Text className={cls.views} text={String(articleData.views)} />
          <Icon Svg={ViewIcon} />
        </div>

        <Text className={cls.title} text={articleData.title} />
      </div>
    </article>
  );
});
