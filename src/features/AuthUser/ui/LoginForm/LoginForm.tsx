import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthUser/model/slice/loginSlice";
import { getLoginState } from "features/AuthUser/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthUser/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./LoginForm.module.scss";


interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }
    , [dispatch, password, username]);


    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Форма авторизации")} />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input
                onChange={onChangeUsername}
                autoFocus
                type="text"
                placeholder={t("Имя пользователя")}
                className={cls.input}
                value={username}
            />
            <Input
                value={password}
                onChange={onChangePassword}
                type="text"
                placeholder={t("Пароль")}
                className={cls.input}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={onLoginClick}>
                {t("Войти")}
            </Button>
        </div>
    );
});

