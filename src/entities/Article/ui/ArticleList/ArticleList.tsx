import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articleList?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articleList, isLoading, view = ArticleView.SMALl } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem articleData={article} view={view} key={article.id} />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {!!articleList?.length && articleList.map(renderArticle)}
    </div>
  );
});
