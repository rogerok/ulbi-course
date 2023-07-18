import { FC, memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  textAlign?: TextAlign;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    textAlign = TextAlign.LEFT,
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[textAlign]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <div className={cls.title}>{title}</div>}
      {text && <div className={cls.text}>{text}</div>}
    </div>
  );
});
