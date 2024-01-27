import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, SVGProps } from 'react';
import cls from './Icon.module.scss';

export enum IconTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, theme = IconTheme.PRIMARY, ...rest } = props;

  const mods: Mods = {
    [cls[theme]]: true,
  };

  return <Svg className={classNames(cls.Icon, mods, [className])} {...rest} />;
});
