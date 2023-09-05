import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Link } from "react-router-dom";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { CommentModel } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment: CommentModel;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  let content;

  if (isLoading) {
    content = (
      <>
        <div className={cls.header}>
          <Skeleton
            className={cls.avatar}
            width={35}
            height={35}
            borderRadius="50%"
          />
          <Skeleton className={cls.name} width={200} height={20} />
          <Skeleton className={cls.name} width={200} height={20} />
        </div>
        <Skeleton className={cls.skeleton} width="100%" height={100} />
      </>
    );
  } else if (comment) {
    content = (
      <>
        <AppLink
          to={`${RoutePath.profile}${comment.user.id}`}
          className={cls.header}
        >
          {comment.user.avatar && (
            <Avatar
              src={comment.user.avatar}
              alt={comment.user.username}
              className={cls.avatar}
              size={35}
            />
          )}

          <Text text={comment.user.username} className={cls.name} />
        </AppLink>
        <Text text={comment.text} />
      </>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      {content}
    </div>
  );
});
