/* eslint-disable indent */
import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./Auth.module.scss";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState, useEffect, useRef } from "react";
import { useAddNewUserMutation } from "../../redux/services/usersApi";
import { userData } from "./userData/userData";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slices/user";
import { AuthPopup } from "./components/AuthPopup/AuthPopup";

export const Auth = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const [addNewUser] = useAddNewUserMutation();

	const createUser = async (uid, email) => {
		await addNewUser(userData(uid, email));
	};

	useEffect(() => {
		const storageId = localStorage.getItem("userID");
		if (!storageId) return;
		dispatch(setLogin({ userId: storageId }));
		navigate("/profile");
	}, [dispatch, navigate]);

	// отслеживание состояния ошибки для попап
	const [isError, setIsError] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		await signInWithEmailAndPassword(auth, email, password)
			.then((userData) => {
				const user = userData.user;
				// console.log(user);
				dispatch(
					setLogin({
						userId: user.uid,
					})
				);
				localStorage.setItem("userID", user.uid);
				navigate("/profile");
			})
			.catch((error) => {
				// устанавливаем isError когда ошибка
				setIsError(true);
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	}

	const handleRegistrationButtonClick = () => {
		navigate("/registration");
	};

	const onLogin = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userData) => {
				const user = userData.user;
				console.log(user);
				createUser(user.uid, email);
				navigate("/login");
			})
			.catch((error) => {
				// устанавливаем isError когда ошибка
				setIsError(true);
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};
	// отслеживаем true ли error
	const observeToError = () => {
		if (isError) {
			setIsError(false);
		}
	};

	// ссылки на элементы инпута
	const targetPopup = useRef();
	const targetPassword = useRef();
	const targetRepeat = useRef();

	// отслеживаем на каком источнике в зависимости от ошибки onchange
	const observeToSource = (targetError) => {
		switch (targetError) {
			case targetPopup:
				console.log("ето логин");
				observeToError();
				break;
			case targetPassword:
				console.log("ето пароль");
				observeToError();
				break;
			case targetRepeat:
				console.log("ето повтор пароля");
				observeToError();
				break;
		}
	};

	// логика для установки позиционирования popup относительно элемента
	const [popupPosition, setPopupPosition] = useState({
		top: "-15%",
		left: "10%",
	});

	useEffect(() => {
		const targetElement = targetPopup.current;
		console.log(isError);

		if (targetElement && isError) {
			const targetRect = targetElement.getBoundingClientRect();
			const popupElement = targetElement.parentElement.querySelector(`.${s.popup}`);
			const popupRect = popupElement.getBoundingClientRect();

			// Рассчитываем позицию попапа относительно элемента
			const top = targetRect.top - popupRect.height;
			const left = targetRect.left + targetRect.width;

			// Устанавливаем позицию попапа
			setPopupPosition({ top, left });
		}
	}, [isError]);

	const showContent = () => {
		if (props.loginPage) {
			return (
				<div className={s.container}>
					<div className={s.modal}>
						<div className={s.login}>
							<Logo />
							<div className={s.login__margin_top}>
								<Input
									placeholderText="Логин"
									id="email-address"
									name="email"
									type="email"
									onChange={(e) => {
										setEmail(e.target.value);
										observeToSource(targetPopup);
									}}
									ref={targetPopup}
								/>
								<Input
									placeholderText="Пароль"
									id="password"
									name="password"
									type="password"
									onChange={(e) => {
										setPassword(e.target.value);
										observeToSource(targetPassword);
									}}
									ref={targetPassword}
								/>
							</div>

							<div className={s.login__margin}>
								<Button buttonText="Войти" type="submit" onClick={onSubmit} />
							</div>
							<button
								className={s.btn__register}
								type="submit"
								onClick={handleRegistrationButtonClick}
							>
								Зарегистрироваться
							</button>
							<AuthPopup
								style={{
									top: popupPosition.top,
									left: popupPosition.left,
									opacity: isError ? 1 : 0,
								}}
							/>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className={s.container}>
					<div className={s.modal}>
						<div className={s.login}>
							<Logo />
							<div className={s.login__margin_top}>
								<Input
									placeholderText="Логин"
									id="email-address"
									name="email"
									type="email"
									onChange={(e) => {
										setEmail(e.target.value);
										observeToSource(targetPopup);
									}}
									ref={targetPopup}
								/>
								<Input
									placeholderText="Пароль"
									id="password"
									name="password"
									type="password"
									onChange={(e) => {
										setPassword(e.target.value);
										observeToSource(targetPassword);
									}}
									ref={targetPassword}
								/>
								<Input
									placeholderText="Повторите пароль"
									type="password"
									onChange={() => observeToSource(targetRepeat)}
									ref={targetRepeat}
								/>
							</div>

							<div className={s.login__margin}>
								<Button buttonText="Зарегистрироваться" onClick={onLogin} />
							</div>
							<AuthPopup style={{ top: popupPosition.top, left: popupPosition.left }} />
						</div>
					</div>
				</div>
			);
		}
	};

	return <div className="wrapper">{showContent()} </div>;
};
