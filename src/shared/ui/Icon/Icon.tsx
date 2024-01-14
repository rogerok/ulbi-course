import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

export enum IconTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, theme = IconTheme.PRIMARY } = props;

  const mods: Mods = {
    [cls[theme]]: true,
  };

  return <Svg className={classNames(cls.Icon, mods, [className])} />;
});
