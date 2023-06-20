import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import cls from "./LoginForm.module.scss";


export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);


    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
        ;
    }

    , [dispatch, password, username]);


    return (
    // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>

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
        </DynamicModuleLoader>

    );
});

export default LoginForm;

