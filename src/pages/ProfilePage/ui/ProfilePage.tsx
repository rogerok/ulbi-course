import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import {
  EditableProfileCard,
  EditableProfileCardHeader,
} from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      <EditableProfileCardHeader />
      {id && <EditableProfileCard id={id} />}
    </PageWrapper>
  );
};

export default ProfilePage;
