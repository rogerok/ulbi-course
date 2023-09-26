import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
  const { className, onScrollEnd, children } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.PageWrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
