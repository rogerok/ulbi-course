import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/county";
import cls from "./CountrySelect.module.scss";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readOnly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      readOnly={readOnly}
      onChange={onChangeHandler}
      value={value}
      className={classNames(cls.CountrySelect, {}, [className])}
      label={t("Страна")}
      options={[
        {
          value: Country.Armenia,
          content: Country.Armenia,
        },
        {
          value: Country.Russia,
          content: Country.Russia,
        },
        {
          value: Country.Kazakhstan,
          content: Country.Kazakhstan,
        },
        {
          value: Country.Ukraine,
          content: Country.Ukraine,
        },
      ]}
    />
  );
});
