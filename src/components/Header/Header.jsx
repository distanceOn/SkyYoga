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
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Header = () => {
	const location = useLocation();
	const path = location.pathname;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = useState(null);

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

	const handleEntry = () => navigate("/login");

	const handleProfile = () => navigate("/profile");

	const isAuthenticated = useSelector(selectIsAuthenticated);

	return (
		<div className={s.header}>
			<Logo fill={path === "/" ? "white" : "black"} />
			{isAuthenticated ? (
				<div className={s.profile}>
					<ProfileIcon
						color={path === "/" ? "white" : "black"}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>

					<CSSTransition
						in={isOpen}
						timeout={500}
						classNames={{
							enter: s["btns-enter"],
							enterActive: s["btns-enter-active"],
							exit: s["btns-exit"],
							exitActive: s["btns-exit-active"],
						}}
						unmountOnExit
					>
						{
							<div
								className={`${s.container__btn} ${s.appearance}`}
							>
								<Button
									uniqueClass={`${s.entry}`}
									buttonText="Профиль"
									onClick={handleProfile}
								/>
								<Button
									uniqueClass={`${s.entry}`}
									buttonText="Выйти"
									onClick={onLogout}
								/>
							</div>
						}
					</CSSTransition>
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
