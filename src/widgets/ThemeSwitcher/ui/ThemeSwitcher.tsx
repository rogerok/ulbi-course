import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { toggleTheme, theme } = useTheme();

    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
                {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
            </Button>
        </div>
    );
};
