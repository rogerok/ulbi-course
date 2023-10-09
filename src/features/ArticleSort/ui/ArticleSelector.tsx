import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSortField } from 'entities/Article';
import cls from './ArticleSelector.module.scss';

interface ArticleSelectorProps {
  className?: string;
  onSortFieldChange: (sortField: ArticleSortField) => void;
  onOrderChange: (sortOrder: SortOrder) => void;
  sort: ArticleSortField;
  order: SortOrder;
}

export const ArticleSelector = memo((props: ArticleSelectorProps) => {
  const { className, onSortFieldChange, onOrderChange, sort, order } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('заголовку'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSelector, {}, [className])}>
      <Select<ArticleSortField>
        label={t('Сортировать по')}
        options={sortFieldOptions}
        onChange={onSortFieldChange}
      />
      <Select<SortOrder>
        label={t('по')}
        options={orderOptions}
        onChange={onOrderChange}
      />
    </div>
  );
});
