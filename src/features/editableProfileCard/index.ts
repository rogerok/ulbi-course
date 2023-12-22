export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
export { EditableProfileCardHeader } from './ui/EditableProfileCardHeader/EditableProfileCardHeader';
export type { Profile } from './model/types/editableProfileCardSchema';

export { profileActions, profileReducer } from './model/slice/profileSlice';
export { ValidateProfileError } from 'features/editableProfileCard/model/constants/constants';
