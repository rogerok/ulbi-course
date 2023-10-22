import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T> {
  className?: string;
  onTabClick: (tab: TabItem<T>) => void;
  value: string;
  tabs: TabItem<T>[];
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { tabs, onTabClick, value, className } = props;
  const { t } = useTranslation();

  const handleClick = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab: TabItem<T>) => (
        <Card
          theme={value === tab.value ? CardTheme.OUTLINE : CardTheme.NORMAL}
          className={cls.tab}
          key={tab.value}
          onClick={handleClick(tab)}
        >
          {tab.value}
        </Card>
      ))}
    </div>
  );
};
