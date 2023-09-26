import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';

const MainPage = () => {
  const { t } = useTranslation();

  return <PageWrapper>{t('Главная страница')}</PageWrapper>;
};

export default MainPage;
