import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { ArticleImage } from "../../model/types/Article";
import cls from "./ArticleBlockImage.module.scss";

interface ArticleBlockImageProps {
  className?: string;
  block: ArticleImage;
}

export const ArticleBlockImage = memo((props: ArticleBlockImageProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleBlockImage, {}, [className])}>
      <img className={cls.image} src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} textAlign={TextAlign.CENTER} />}
    </div>
  );
});
