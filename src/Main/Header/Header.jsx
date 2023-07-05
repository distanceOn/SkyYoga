import Logo from "../../components/Logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <button className="entry">Войти</button>
    </div>
  );
};

export default Header;
