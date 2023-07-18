import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { profileActions, updateProfileData } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
  readOnly?: boolean;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className, readOnly } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const onEditSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      <div className={cls.buttonsWrapper}>
        {readOnly ? (
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onEdit}
          >
            {t("Редактировать")}
          </Button>
        ) : (
          <>
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t("Отменить")}
            </Button>
            <Button
              className={cls.editBtn}
              onClick={onEditSave}
              theme={ButtonTheme.OUTLINE}
            >
              {t("Сохранить")}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
