import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { mapDirectionClass } from '../styles/const';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/popup.module.scss';

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

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom right' } = props;
  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
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
                  className={classNames(
                    cls.item,
                    { [popupCls.active]: active },
                    [className],
                  )}
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
