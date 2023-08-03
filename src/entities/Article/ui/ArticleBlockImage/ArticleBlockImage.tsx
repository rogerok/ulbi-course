import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleBlockImage.module.scss";

interface ArticleBlockImageProps {
  className?: string;
}

export const ArticleBlockImage: FC<ArticleBlockImageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.ArticleBlockImage, {}, [className])} />;
};
