import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  const location = useParams<{ id: string }>();

  return (
    <PageWrapper className={classNames(cls.ArticleEditPage, {}, [className])}>
      {t('Редактировать статью')}
    </PageWrapper>
  );
};

export default ArticleEditPage;
