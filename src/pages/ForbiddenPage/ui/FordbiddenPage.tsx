import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const ForbiddenPage = () => {
  const { t } = useTranslation('about');

  return <PageWrapper>{t('У вас нет доступа к данной странице')}</PageWrapper>;
};

export default ForbiddenPage;
