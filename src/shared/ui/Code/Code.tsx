import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import CopyIcon from "shared/assets/icons/copy.svg";
import cls from "./Code.module.scss";

interface CodeProps {
  className?: string;
  content: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, content } = props;
  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(content);
  }, [content]);

  return (
    <div className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <Icon Svg={CopyIcon} />
      </Button>
      <pre>
        <code>{content}</code>
      </pre>
    </div>
  );
});
