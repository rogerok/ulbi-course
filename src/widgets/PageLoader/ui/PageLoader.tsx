import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('page__loader', {}, [className])}>
            <Loader />
        </div>
    );
};
