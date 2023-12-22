import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import {
  EditableProfileCard,
  EditableProfileCardHeader,
} from 'features/editableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => (
  <PageWrapper className={classNames('', {}, [className])}>
    <EditableProfileCardHeader />
    <EditableProfileCard />
  </PageWrapper>
);

export default ProfilePage;
