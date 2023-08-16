import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import ViewIcon from "shared/assets/icons/views.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { fetchArticleDetailsData } from "../../model/services/fetchArticleDetailsData";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from "../../model/selectors/articleSelectors/articleSelectors";
import { ArticleBlock, BlockTypes } from "../../model/types/Article";
import { ArticleBlockCode } from "../ArticleBlockCode/ArticleBlockCode";
import { ArticleBlockImage } from "../ArticleBlockImage/ArticleBlockImage";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
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

  const renderBlock = useCallback((block: ArticleBlock) => {
    let component;

    switch (block.type) {
      case BlockTypes.TEXT:
        component = <ArticleBlockText block={block} key={block.id} />;
        break;

      case BlockTypes.IMAGE:
        component = <ArticleBlockImage block={block} key={block.id} />;
        break;

      case BlockTypes.CODE:
        component = <ArticleBlockCode block={block} key={block.id} />;
        break;
      default:
        return null;
    }

    return component;
  }, []);

  if (isLoading) {
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
    content = (
      <Text
        text={t("Произошла непредвиденная ошибка")}
        textAlign={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  } else if (data) {
    content = (
      <div className={cls.articleTopInfo}>
        <Avatar
          src={data.img}
          alt={data.title}
          className={cls.avatar}
          size={150}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={ViewIcon} />
          <Text text={String(data.views)} className={cls.articleInfoText} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={data.createdAt} className={cls.articleInfoText} />
        </div>
        <Text text={data.title} textSize={TextSize.XL} />
        <Text text={data.subtitle} />
        {data.blocks.map(renderBlock)}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.Article, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
