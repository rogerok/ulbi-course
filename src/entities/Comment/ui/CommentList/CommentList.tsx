import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";
import { CommentModel } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: CommentModel[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment?.text}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </div>
  );
});
