import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import cls from "./CurrencySelect.module.scss";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readOnly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      readOnly={readOnly}
      onChange={onChangeHandler}
      value={value}
      className={classNames(cls.CurrencySelect, {}, [className])}
      label={t("Валюта")}
      options={[
        {
          value: Currency.RUB,
          content: Currency.RUB,
        },
        {
          value: Currency.EUR,
          content: Currency.EUR,
        },
        {
          value: Currency.USD,
          content: Currency.USD,
        },
      ]}
    />
  );
});
