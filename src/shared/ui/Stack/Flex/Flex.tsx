import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'center' | 'between' | 'around' | 'start' | 'end';

export type FlexAlign = 'center' | 'start' | 'end';

export type FlexDirection = 'row' | 'column';

export type FlexGap = 4 | 8 | 16 | 32;

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  around: cls.justifyAround,
  center: cls.justifyCenter,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export interface FlexProps {
  className?: string;
  children: ReactNode;
  direction: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  fullWidth?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    direction,
    align = 'center',
    justify = 'start',
    gap,
    fullWidth,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
  };

  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>;
};
