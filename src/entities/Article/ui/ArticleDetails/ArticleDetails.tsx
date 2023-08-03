import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetails.module.scss";

interface ArticleProps {
  className?: string;
}

export const ArticleDetails: FC<ArticleProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Article, {}, [className])}>
      {t("Article details")}
    </div>
  );
};
