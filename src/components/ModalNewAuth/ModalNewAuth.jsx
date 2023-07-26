/* eslint-disable */
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./ModalNewAuth.module.scss";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import Logo from "../Logo/Logo";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { setEmail } from "../../redux/slices/user";
import { AuthPopup } from "../../pages/Auth/components/AuthPopup/AuthPopup";

export const ModalNewAuth = ({
	title,
	type,
	isOpen,
	setIsOpen,
	setIsSuccess,
}) => {
	const auth = getAuth();
	const modalRef = useRef();
	const dispatch = useDispatch();

	const [newLogin, setNewLogin] = useState(null);
	const [newPassword, setNewPassword] = useState(null);
	const [newPasswordRepeat, setNewPasswordRepeat] = useState(null);
	const [error, setError] = useState(null);

	const handlePasswordChange = () => {
		const user = auth.currentUser;
		if (!newPassword) return setError("Введите пароль");
		if (!newPasswordRepeat) return setError("Повторите пароль");

		if (newPassword !== newPasswordRepeat) {
			console.log("password doesnot match");
			setError("Пароли не совпадают")
			return;
		} else {
			updatePassword(user, newPassword)
				.then(() => {
					console.log("password is changed");
					setIsOpen(false);
					setIsSuccess(true);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorMessage);
					console.log(errorCode, errorMessage);
					setError("Некорректный пароль");
				});
		}
	};

	const handleEmailChange = () => {
		const user = auth.currentUser;
		console.log(user);
		if (!newLogin) return setError("Введите логин");
		updateEmail(user, newLogin)
			.then(() => {
				localStorage.setItem("userEmail", newLogin);
				dispatch(setEmail({ email: newLogin }));
				setIsOpen(false);
				setIsSuccess(true);

				console.log("email is changed");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError("Некорректный логин");

				console.log(errorCode, errorMessage);
			});
	};

	const setDataOnChange = (event, setData) => {
		setData(event.target.value);
		if (error) setError(null);
	};

	const resetData = () => {
		setNewLogin(null);
		setNewPassword(null);
		setNewPasswordRepeat(null);
		setError(null);
	};

	return (
		<CSSTransition
			in={isOpen}
			timeout={300}
			nodeRef={modalRef}
			classNames={{
				enter: s["alert-enter"],
				enterActive: s["alert-enter-active"],
				exit: s["alert-exit"],
				exitActive: s["alert-exit-active"],
			}}
			unmountOnExit
		>
			<div
				className={s.wrapper}
				onClick={() => {
					setIsOpen(!isOpen);
					resetData();
				}}
				ref={modalRef}
			>
				<div className={s.modal} onClick={(e) => e.stopPropagation()}>
					{type === "login" ? (
						<div className={s.container}>
							<AuthPopup
								style={{
									top: "-20%",
									left: "12%",
									opacity: error ? 1 : 0,
								}}
								errorText={error}
								isVisiblePopup={error ? true : false}
							/>
							<Logo />
							<h1 className={s.title}>{title}</h1>

							<Input
								placeholderText="Логин"
								name="email"
								type="email"
								onChange={(event) =>
									setDataOnChange(event, setNewLogin)
								}
							/>

							<div className={s.container__margin}>
								<Button
									buttonText="Сохранить"
									onClick={handleEmailChange}
								/>
							</div>
						</div>
					) : (
						<div className={s.container}>
							<AuthPopup
								style={{
									top: "-15%",
									left: "12%",
									opacity: error ? 1 : 0,
								}}
								errorText={error}
								isVisiblePopup={error ? true : false}
							/>
							<Logo />
							<h1 className={s.title}>{title}</h1>

							<Input
								placeholderText=" Пароль"
								type="password"
								onChange={(event) =>
									setDataOnChange(event, setNewPassword)
								}
							/>
							<Input
								placeholderText="Повторите пароль"
								type="password"
								onChange={(event) =>
									setDataOnChange(event, setNewPasswordRepeat)
								}
							/>
							<div className={s.container__margin}>
								<Button
									buttonText="Сохранить"
									onClick={handlePasswordChange}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</CSSTransition>
	);
};
