import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { ArticleText } from "entities/Article/model/types/Article";
import cls from "./ArticleBlockText.module.scss";

interface ArticleBlockTextProps {
  className?: string;
  block: ArticleText;
}

export const ArticleBlockText = memo((props: ArticleBlockTextProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleBlockText, {}, [className])}>
      <Text title={block?.title} className={cls.articleTitle} />
      {block.paragraphs.map((paragraph) => (
        <Text key={block.id} text={paragraph} />
      ))}
    </div>
  );
});
