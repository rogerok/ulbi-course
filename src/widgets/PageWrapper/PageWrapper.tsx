import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useLocation } from 'react-router-dom';
import { getScrollPosition, scrollSaveActions } from 'features/ScrollSave';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './PageWrapper.module.scss';
import { toggleFeatures } from 'shared/lib/features/toggleFeatures';

interface PageWrapperProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPosition(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScroll({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.PageWrapperRedesigned,
          off: () => cls.PageWrapper,
        }),
        {},
        [className],
      )}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
    </section>
  );
});
