import Logo from "../../../components/Logo/Logo";
import ProfileIcon from "../../../components/ProfileIcon/ProfileIcon";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <ProfileIcon />
    </div>
  );
};

export default Header;
