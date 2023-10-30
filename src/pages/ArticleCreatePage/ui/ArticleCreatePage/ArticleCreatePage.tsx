import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCreatePage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleCreatePage = (props: ArticleEditPageProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <PageWrapper className={classNames(cls.ArticleCreatePage, {}, [className])}>
      {t('Создать статью')}
    </PageWrapper>
  );
};

export default ArticleCreatePage;
