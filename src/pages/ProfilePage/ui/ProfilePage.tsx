import { FC, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { Currency } from "entities/Currency";
import { Country } from "entities/CountrySelect";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

export interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const loading = useSelector(getProfileLoading);
  const readOnly = useSelector(getProfileReadOnly);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ first: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ age: Number(value) }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ avatar: value || "" }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.setProfileData({ city: value || "" }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.setProfileData({ currency: value }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.setProfileData({ country: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames("", {}, [className])}>
        <ProfilePageHeader readOnly={readOnly} />
        <ProfileCard
          data={formData}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
