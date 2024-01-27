import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { mapDirectionClass } from 'shared/ui/Popups/ui/styles/const';

import { DropdownDirection } from 'shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children?: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const { className, trigger, direction = 'bottom right', children } = props;
  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, optionsClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
