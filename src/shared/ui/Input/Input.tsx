import {
  ChangeEvent,
  HTMLProps,
  InputHTMLAttributes,
  memo,
  TextareaHTMLAttributes,
} from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readonly"
>;

type HTMLTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  multiline?: boolean;
  type?: string;
}

export const Input = memo(
  (props: InputProps & (HTMLInputProps | HTMLTextareaProps)) => {
    const {
      className,
      value,
      onChange,
      readOnly,
      type = "text",
      multiline,
      ...otherProps
    } = props;

    const onChangeHandler = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      onChange?.(e.target.value);
    };

    const mods: Mods = {
      [cls.readOnly]: readOnly,
    };

    if (multiline) {
      return (
        <textarea
          value={value}
          onChange={onChangeHandler}
          readOnly={readOnly}
          className={classNames(cls.Input, mods, [className])}
          {...(otherProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    }
    return (
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
        className={classNames(cls.Input, mods, [className])}
        {...(otherProps as InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }
);
