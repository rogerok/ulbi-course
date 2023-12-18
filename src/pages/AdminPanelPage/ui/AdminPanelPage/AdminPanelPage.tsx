import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useTranslation } from 'react-i18next';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <PageWrapper className={classNames(cls.AdminPanelPage, {}, [className])}>
      {t('Админ панель')}
    </PageWrapper>
  );
};

export default AdminPanelPage;
