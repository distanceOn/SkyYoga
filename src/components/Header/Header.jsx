import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import s from "./Header.module.scss";
import Button from "../Button/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsAuthenticated } from '../../redux/selectors';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const onLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("error");
      });
  };

	const navigate = useNavigate();

	const handleEntry = () => {
		navigate('/login');
	};

	const isAuthenticated = useSelector(selectIsAuthenticated);

	return (
		<div className={s.header}>
			<Logo fill={location.pathname === '/' ? 'white' : 'black'} />
			{isAuthenticated ? (
				<ProfileIcon />
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
