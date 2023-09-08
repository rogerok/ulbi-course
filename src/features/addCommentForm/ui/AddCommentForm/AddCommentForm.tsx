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
import { getCommentFormText } from "../../model/selectors/addComentFormSelectors";
import {
  addCommentActions,
  addCommentReducer,
} from "../../model/slices/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (commentText: string) => void;
}

const reducersList: ReducerList = {
  addCommentForm: addCommentReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const commentText = useSelector(getCommentFormText);

  const handleTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentActions.setText(value));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    if (commentText) {
      onSendComment(commentText);
    }
  }, [onSendComment, commentText]);

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <form className={cls.form}>
          <Input
            rows={10}
            multiline
            placeholder={t("Введите текст комментария")}
            onChange={handleTextChange}
            className={cls.input}
            value={commentText}
          />
          <Button theme={ButtonTheme.OUTLINE} onClick={handleSubmit}>
            {t("Отправить")}
          </Button>
        </form>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
