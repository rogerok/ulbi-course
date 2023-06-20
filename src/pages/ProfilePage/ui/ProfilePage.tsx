import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";


export interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();


    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>

            <div className={classNames("", {}, [className])}>
                {
                    t("PROFILE PAGE")
                }

            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
