import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import s from "./Header.module.scss";
import Button from "../Button/Button";

const Header = () => {
	const location = useLocation();
	const path = location.pathname;

	const navigate = useNavigate();

	const handleEntry = () => {
		navigate("/login");
	};

	const showContent = () => {
		// пока что отображение контента зависит от того, где мы находимся, потом от факта авторизации
		if (path === "/profile" || path === "/workout/2") {
			return <ProfileIcon />;
		} else {
			return (
				<Button uniqueClass={s.entry} buttonText="Войти" onClick={handleEntry} />
			);
		}
	};

	return (
		<div className={s.header}>
			<Logo fill={location.pathname === "/" ? "white" : "black"} />
			{showContent()}
		</div>
	);
};

export default Header;
