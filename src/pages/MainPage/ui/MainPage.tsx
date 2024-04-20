import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { Text } from 'shared/ui/Text/Text';
import { RatingCard } from 'entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Text text={t('Главная страница')} Tag="h1" />
    </PageWrapper>
  );
};

export default MainPage;
