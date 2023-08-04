import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from "../../model/selectors/selectors";
import { fetchArticleDetailsData } from "../../model/services/fetchArticleDetailsData";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";

interface ArticleProps {
  className?: string;
  id: string;
}

const initialReducers: ReducerList = {
  article: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleDetailsData(id));
    }
  }, [dispatch, id]);

  let content;

  if (true) {
    // eslint-disable-next-line i18next/no-literal-string
    content = (
      <div>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius="50%"
        />
        <Skeleton className={cls.title} width={500} height={40} />
        <Skeleton className={cls.skeleton} width={400} height={200} />
        <Skeleton className={cls.skeleton} width={400} height={200} />
        <Skeleton className={cls.skeleton} width={600} height={200} />
      </div>
    );
  } else if (error) {
    // eslint-disable-next-line i18next/no-literal-string
    content = (
      <Text
        text={t("Произошла непредвиденная ошибка")}
        textAlign={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = <div> {t("Article details")}</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.Article, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
