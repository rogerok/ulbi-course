import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ReactNode } from 'react';
import cls from './ListBox.module.scss';

export interface ListBoxOptions<T> {
  value?: T;
  content: ReactNode;
}

interface ListBoxProps<T extends string> {
  className?: string;
  label?: string;
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
  options?: ListBoxOptions<T>[];
  defaultValue?: T;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const { className, defaultValue, label, options, onChange, value, readonly } =
    props;
  return (
    <Listbox
      as="div"
      className={classNames(cls.ListBox, {}, [className])}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={readonly}
    >
      {({ open }) => (
        <>
          <Listbox.Button className={cls.trigger}>
            <Button className={cls.button} theme={ButtonTheme.CLEAR}>
              <span>{value ?? defaultValue}</span>
              <span className={cls.arrows}>{open ? '↑' : '↓'}</span>
            </Button>
          </Listbox.Button>
          {open && (
            <Listbox.Options className={cls.options}>
              {!!options?.length &&
                options.map((option) => (
                  <Listbox.Option
                    className={cls.option}
                    key={option.value}
                    value={option.value}
                  >
                    {({ active, selected }) => (
                      <li
                        className={classNames(cls.optionInner, {
                          [cls.active]: active,
                          [cls.selected]: selected,
                        })}
                      >
                        {option.content}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          )}
        </>
      )}
    </Listbox>
  );
};
