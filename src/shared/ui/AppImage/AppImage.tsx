import {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: ReactElement;
  errorFallback?: ReactElement;
  className?: string;
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    fallback,
    errorFallback,
    src,
    alt = 'image',
    ...rest
  } = props;
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src ?? '';
    image.onload = () => {
      setLoading(false);
    };
    image.onerror = () => {
      setLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (loading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img className={className} src={src} alt={alt} {...rest} />;
});
