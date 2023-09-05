import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader";
import {
  getCommentFormText,
  getCommentFormError,
} from "../../model/selectors/addComentFormSelectors";
import {
  addCommentActions,
  addCommentReducer,
} from "../../model/slices/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
  className?: string;
}

const reducersList: ReducerList = {
  addCommentForm: addCommentReducer,
};

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const commentText = useSelector(getCommentFormText);
  const error = useSelector(getCommentFormError);

  const handleTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentActions.setText(value));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <form className={cls.form}>
          <Input
            placeholder={t("Введите текст комментария")}
            onChange={handleTextChange}
            className={cls.input}
            value={commentText}
          />
        </form>
        <Button theme={ButtonTheme.OUTLINE} type="submit">
          {t("Отправить")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
