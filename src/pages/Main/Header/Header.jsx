import Logo from "../../../components/Logo/Logo";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <Logo fill="white" />
      <button className={s.entry}>Войти</button>
    </div>
  );
};

export default Header;
