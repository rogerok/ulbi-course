import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { data } from "entities/Article/model/data";
import { Article } from "entities/Article";
import cls from "./ArticlesPage.module.scss";

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t("Article page")}
      <ArticleList articleList={data as Article[]} />
    </div>
  );
};
export default memo(ArticlesPage);
