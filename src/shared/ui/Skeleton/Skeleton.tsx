import { CSSProperties, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  /*
   * string - percentage
   * number - pixels
   * */
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, borderRadius } = props;
  const { t } = useTranslation();

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
  );
});
