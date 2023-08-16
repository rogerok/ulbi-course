import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code/Code";
import { ArticleCode } from "../../model/types/Article";
import cls from "./ArticleBlockCode.module.scss";

interface ArticleBlockCodeProps {
  className?: string;
  block: ArticleCode;
}

export const ArticleBlockCode = memo((props: ArticleBlockCodeProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleBlockCode, {}, [className])}>
      <Code content={block?.code} />
    </div>
  );
});
