import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from 'shared/ui/Stack';
import AppSvg from '../../assets/icons/app-image.svg';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <HStack
      justify="center"
      className={classNames(cls.AppLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg className={cls.AppLogo} />
    </HStack>
  );
});
