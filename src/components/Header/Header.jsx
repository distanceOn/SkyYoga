import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import s from "./Header.module.scss";
import Button from "../Button/Button";

import { useSelector } from "react-redux";

import { selectIsAuthenticated } from "../../redux/selectors";
import { Menu } from "../Menu/Menu";

const Header = () => {
	const location = useLocation();

	const navigate = useNavigate();

	const handleEntry = () => {
		navigate("/login");
	};

	const isAuthenticated = useSelector(selectIsAuthenticated);

	return (
		<div className={s.header}>
			<Logo fill={location.pathname === "/" ? "white" : "black"} />
			{isAuthenticated ? (
				<Menu />
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
