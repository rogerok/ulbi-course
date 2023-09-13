import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { Text } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ArticleDetails } from "entities/Article";
import { AddCommentForm } from "features/addCommentForm";
import { postCommentForArticle } from "pages/ArticleDetailsPage/model/services/postCommentForArticle/postCommentForArticle";
import { fetchCommentByArticleId } from "../model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import { getArticleCommentsIsLoading } from "../model/selectors/comments/comments";
import {
  articleDetailsPageCommentReducer,
  getArticleComments,
} from "../model/slice/articleDetailsPageCommentSlice";
import cls from "./ArticleDetailsPage.module.scss";

export interface ArticleDetailsPageProps {
  className?: string;
}

const reducerList: ReducerList = {
  comments: articleDetailsPageCommentReducer,
};

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentByArticleId(id));
  });

  const onSendComment = useCallback(
    (commentText: string) => {
      dispatch(postCommentForArticle(commentText));
    },
    [dispatch]
  );

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Cтатья не найдена")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducerList} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t("Комментарии")} className={cls.commentTitle} />
        <AddCommentForm
          className={cls.commentForm}
          onSendComment={onSendComment}
        />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
