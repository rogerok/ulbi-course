
export { Profile, ProfileSchema } from "./model/types/profile";

export {
    profileActions,
    profileReducer
} from "./model/slice/profileSlice";

export { fetchProfileData } from './model/services/fetchProfileData';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileLoading';

export { ProfileCard } from './ui/ProfileCard'