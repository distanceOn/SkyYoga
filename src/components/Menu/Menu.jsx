import { CSSTransition } from "react-transition-group";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import s from "./Menu.module.scss";
import { useRef, useState } from "react";
import { setLogout } from "../../redux/slices/user";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export const Menu = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const btnsRef = useRef();

	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

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
				console.log("error " + error);
			});
	};
	const handleProfile = () => navigate("/profile");

	return (
		<div className={s.menu}>
			<ProfileIcon
				color={location.pathname === "/" ? "white" : "black"}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>

			<CSSTransition
				in={isOpen}
				timeout={500}
				nodeRef={btnsRef}
				classNames={{
					enter: s["btns-enter"],
					enterActive: s["btns-enter-active"],
					exit: s["btns-exit"],
					exitActive: s["btns-exit-active"],
				}}
				unmountOnExit
			>
				{
					<div className={s.btns} ref={btnsRef}>
						<Button
							uniqueClass={s.btn}
							buttonText="Профиль"
							onClick={handleProfile}
						/>
						<Button
							uniqueClass={s.btn}
							buttonText="Выйти"
							onClick={onLogout}
						/>
					</div>
				}
			</CSSTransition>
		</div>
	);
};
