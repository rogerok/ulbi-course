import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <PageWrapper>{t('О сайте')}</PageWrapper>;
};

export default AboutPage;
