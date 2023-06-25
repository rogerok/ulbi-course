import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {classNames} from "shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getProfileData, getProfileError, getProfileLoading} from "entities/Profile";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import cls from './ProfileCard.module.scss';
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps  {
    className?: string;
}


export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading);



    return (

        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title="Профиль"/>
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {
                        t("Редактировать")
                    }
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    autoFocus
                    type="text"
                    placeholder={t("Имя пользователя")}
                    className={cls.input}
                    value={data?.first}
                />
                <Input
                    value={data?.lastname}
                    type="text"
                    placeholder={t("Фамиля пользователя")}
                    className={cls.input}
                />
            </div>
        </div>

    );
};


