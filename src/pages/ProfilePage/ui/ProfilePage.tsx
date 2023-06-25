import {FC, useEffect} from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader";
import {fetchProfileData, profileReducer} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import {ProfileCard } from "entities/Profile/ui/ProfileCard";


export interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());


    }, [dispatch])



    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>

            <div className={classNames("", {}, [className])}>
                <ProfileCard />

            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
