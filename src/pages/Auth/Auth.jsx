/* eslint-disable indent */
import s from "./Auth.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slices/user";
import { AuthLogin } from "./components/AuthLogin/AuthLogin";
import { AuthRegistration } from "./components/AuthRegistration/AuthRegistration";
import { auth } from "../../firebase/firebase";

export const Auth = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [repeatPassword, setRepeatPassword] = useState(null);

	useEffect(() => {
		const storageId = localStorage.getItem("userID");
		if (!storageId) return;
		dispatch(setLogin({ userId: storageId }));
		navigate("/profile");
	}, [dispatch, navigate]);

	// отслеживание состояния ошибки для попап
	const [isError, setIsError] = useState(false);

	// отслеживание, какого типа ошибка
	const [errorState, setErrorState] = useState(null);

	// состояние видимости попап для анимации
	const [isVisiblePopup, setIsVisiblePopup] = useState(null);

	// скрываем попап
	const observeToError = () => {
		if (isError) {
			setIsVisiblePopup(false);
			setIsError(false);
		}
	};

	// ссылки на элементы инпута
	const targetPopup = useRef();
	const targetPassword = useRef();
	const targetRepeat = useRef();

	// отслеживаем источник ошибки
	const [errorSource, setErrorSource] = useState(null);

	useEffect(() => {
		if (errorState !== null) {
			switch (errorState) {
				case "auth/user-not-found":
					setErrorSource(targetPopup);
					setErrorText("Такого пользователя не существует!");

					break;
				case "auth/wrong-password":
					setErrorSource(targetPassword);
					setErrorText("Неверный пароль!");

					break;
				case "passwords-mismatch":
					setErrorSource(targetRepeat);
					setErrorText("Пароли не совпадают!");
					break;
				case "auth/too-many-requests":
					setErrorSource(targetPopup);
					setErrorText("Слишком много запросов!");
					break;
				case "auth/invalid-email":
					setErrorSource(targetPopup);
					setErrorText("Некорректный e-mail!");
					break;
				case "auth/weak-password":
					setErrorSource(targetPopup);
					setErrorText("Cлишком легкий пароль!");
					break;
				case "auth/missing-password":
					setErrorSource(targetPassword);
					setErrorText("Введите пароль!");
					break;
				default:
					break;
			}
		}
	}, [errorState]);

	// устанавливаем текст ошибки
	const [errorText, setErrorText] = useState(null);

	// логика для установки позиционирования popup относительно элемента
	const [popupPosition, setPopupPosition] = useState({
		top: "-15%",
		left: "10%",
	});

	useEffect(() => {
		const targetElement = targetPopup.current;

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

	// сбрасываем ошибку при переходе на другую страницу
	const location = useLocation();
	useEffect(() => {
		if (isError === true) {
			setIsError(false);
		}
	}, [location]);

	return (
		<div className="wrapper">
			{props.loginPage ? (
				<AuthLogin
					navigate={navigate}
					dispatch={dispatch}
					setLogin={setLogin}
					setIsError={setIsError}
					setIsVisiblePopup={setIsVisiblePopup}
					setErrorState={setErrorState}
					setEmail={setEmail}
					errorSource={errorSource}
					targetPopup={targetPopup}
					setPassword={setPassword}
					targetPassword={targetPassword}
					observeToError={observeToError}
					popupPosition={popupPosition}
					errorText={errorText}
					isError={isError}
					isVisiblePopup={isVisiblePopup}
					email={email}
					password={password}
				/>
			) : (
				<AuthRegistration
					password={password}
					repeatPassword={repeatPassword}
					setIsError={setIsError}
					setErrorState={setErrorState}
					auth={auth}
					email={email}
					navigate={navigate}
					setIsVisiblePopup={setIsVisiblePopup}
					setEmail={setEmail}
					errorSource={errorSource}
					observeToError={observeToError}
					targetPopup={targetPopup}
					targetPassword={targetPassword}
					setPassword={setPassword}
					setRepeatPassword={setRepeatPassword}
					targetRepeat={targetRepeat}
					popupPosition={popupPosition}
					isError={isError}
					errorText={errorText}
					isVisiblePopup={isVisiblePopup}
				/>
			)}
		</div>
	);
};
