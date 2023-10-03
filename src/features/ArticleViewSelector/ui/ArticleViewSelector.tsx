import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import RowSelectorIcon from 'shared/assets/icons/showRowIcon.svg';
import ColumnSelectorIcon from 'shared/assets/icons/showColumnsIcon.svg';
import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export const viewItems = [
  {
    view: ArticleView.SMALL,
    icon: RowSelectorIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ColumnSelectorIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const handleViewClick = (articleView: ArticleView) => () => {
    onViewClick?.(articleView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewItems.map((item) => (
        <Button
          key={item.view}
          theme={ButtonTheme.CLEAR}
          onClick={handleViewClick(item.view)}
          disabled={item.view === view}
        >
          <Icon
            Svg={item.icon}
            className={classNames('', {
              [cls.selected]: item.view === view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
