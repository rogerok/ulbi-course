import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <ThemeSwitcher />
        <AppLink
          className={classNames(cls.mainLink)}
          theme={AppLinkTheme.SECONDARY}
          to="/main"
        >
          Main page
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About page
        </AppLink>
      </div>
    </div>
  );
};
