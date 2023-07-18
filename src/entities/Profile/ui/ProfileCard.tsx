import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/CountrySelect";
import { Profile } from "../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  isError?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency: (currency?: Currency) => void;
  onChangeCountry: (country?: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    isError,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeAvatar,
    onChangeCity,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation();

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t("Что-то пошло не так")}
          text={t("попробуйте перезагрузить страницу")}
          theme={TextTheme.ERROR}
          textAlign={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data.avatar} alt={t("Аватар пользователя")} />
        </div>
      )}
      <div className={cls.data}>
        <Input
          autoFocus
          type="text"
          placeholder={t("Имя пользователя")}
          className={cls.input}
          value={data?.first}
          readOnly={readOnly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          type="text"
          placeholder={t("Фамиля пользователя")}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.city}
          type="text"
          placeholder={t("Город")}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.avatar}
          type="text"
          placeholder={t("Аватар")}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
        <Input
          value={data?.age}
          type="text"
          placeholder={t("Возраст")}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.username}
          type="text"
          placeholder={t("Ник")}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <CurrencySelect
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeCurrency}
          value={data?.currency}
        />{" "}
        <CountrySelect
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeCountry}
          value={data?.country}
        />
      </div>
    </div>
  );
};
