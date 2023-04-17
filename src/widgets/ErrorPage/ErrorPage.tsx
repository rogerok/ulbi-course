import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const refreshPage = () => window.location.reload();

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>
                {
                    t('Что-то пошло не так')
                }
            </p>
            <Button onClick={refreshPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
