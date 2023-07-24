import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./Auth.module.scss";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState, useEffect } from "react";
import { useAddNewUserMutation } from "../../redux/services/usersApi";
import { userData } from "./userData/userData";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slices/user";

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
				console.log(userData);
				localStorage.setItem("userID", user.uid);
				navigate("/profile");
			})
			.catch((error) => {
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
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	const showContent = () => {
		if (props.loginPage) {
			return (
				<div className={s.wrapper}>
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
										onChange={(e) => setEmail(e.target.value)}
									/>
									<Input
										placeholderText="Пароль"
										id="password"
										name="password"
										type="password"
										onChange={(e) => setPassword(e.target.value)}
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
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className={s.wrapper}>
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
										onChange={(e) => setEmail(e.target.value)}
									/>
									<Input
										placeholderText="Пароль"
										id="password"
										name="password"
										type="password"
										onChange={(e) => setPassword(e.target.value)}
									/>
									<Input placeholderText="Повторите пароль" type="password" />
								</div>

								<div className={s.login__margin}>
									<Button buttonText="Зарегистрироваться" onClick={onLogin} />
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	return showContent();
};
