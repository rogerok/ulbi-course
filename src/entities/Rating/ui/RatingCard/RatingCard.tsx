import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { StarRating } from 'shared/ui/StarRating/StarRating';
import { Modal } from 'shared/ui/Modal/Modal';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { MobileView } from 'shared/ui/MobileView/MobileView';
import { BrowserView } from 'shared/ui/BrowserView/BrowserView';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onCancel,
    title,
    hasFeedback,
    onAccept,
    feedbackTitle,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(starsCount);
      }
    },
    [hasFeedback, onAccept, starsCount],
  );

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const modalContent = (
    <VStack gap={32}>
      <Text title={feedbackTitle} />
      <Input placeholder={t('Ваш отзыв')} />
      <HStack gap={32} justify="end">
        <Button onClick={acceptHandler}>{t('Отправить')}</Button>
        <Button onClick={cancelHandler}>{t('Закрыть')}</Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align="center">
        <Text title={title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>

      <MobileView>
        <Drawer isOpen={isModalOpen} lazy>
          {modalContent}
        </Drawer>
      </MobileView>
      <BrowserView>
        <Modal isOpen={isModalOpen}>{modalContent}</Modal>
      </BrowserView>
    </Card>
  );
});
