import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  onClick?: () => void;
  content?: string;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
};

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom right' } = props;
  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.button}>{trigger}</Menu.Button>
      <Menu.Items as="div" className={classNames(cls.menu, {}, optionsClasses)}>
        {items.map((item) => (
          <Menu.Item as={Fragment} disabled={item.disabled} key={item.content}>
            {({ active }) =>
              item.href ? (
                <AppLink
                  className={classNames(cls.item, { [cls.active]: active }, [
                    className,
                  ])}
                  to={item.href}
                >
                  {item.content}
                </AppLink>
              ) : (
                <Button
                  theme={ButtonTheme.CLEAR}
                  type="button"
                  className={classNames(cls.item, { [cls.active]: active }, [
                    className,
                  ])}
                  onClick={item.onClick}
                >
                  {item.content}
                </Button>
              )
            }
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
