import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleBlockCode.module.scss";

interface ArticleBlockCodeProps {
  className?: string;
}

export const ArticleBlockCode: FC<ArticleBlockCodeProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.ArticleBlockCode, {}, [className])} />;
};
