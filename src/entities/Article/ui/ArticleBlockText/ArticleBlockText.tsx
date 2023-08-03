import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleBlockText.module.scss";

interface ArticleBlockTextProps {
  className?: string;
}

export const ArticleBlockText: FC<ArticleBlockTextProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.ArticleBlockText, {}, [className])} />;
};
