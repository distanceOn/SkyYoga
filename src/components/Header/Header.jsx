/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import s from "./Header.module.scss";
import Button from "../Button/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated } from "../../redux/selectors";
import { setLogout } from "../../redux/slices/user";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        console.log("Logged out");
        dispatch(setLogout());
        navigate("/");
      })
      .catch((error) => {
        localStorage.clear();
        dispatch(setLogout());
        console.log("error");
      });
  };

  const handleEntry = () => {
    navigate("/login");
  };

  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div className={s.header}>
      <Logo fill={location.pathname === "/" ? "white" : "black"} />
      {isAuthenticated ? (
        <div className={s.profile}>
          <ProfileIcon />
          <Button buttonText="Выйти" uniqueClass={s.entry} onClick={onLogout} />
        </div>
      ) : (
        <Button
          uniqueClass={s.entry}
          buttonText="Войти"
          onClick={handleEntry}
        />
      )}
    </div>
  );
};

export default Header;
