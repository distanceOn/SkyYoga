import s from "./Info.module.scss";
import Button from "../../../components/Button/Button";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../../redux/selectors";
import { ModalNewAuth } from "../../../components/ModalNewAuth/ModalNewAuth";
import { useState } from "react";

const Info = () => {
	const [isModalNewAuth, setIsModalNewAuth] = useState(false);
	const [modalNewAuthType, setModalNewAuthType] = useState(null);

	const email = useSelector(selectUserEmail);
	if (!email) return;

	const openModalNewAuth = (typeModal) => {
		setIsModalNewAuth(true);
		setModalNewAuthType(typeModal);
	};

	return (
		<div className={s.info}>
			<h2 className={s.info__h2}>Мой профиль</h2>
			<div className={s.info__dataContainer}>
				<p className={s.info__data}>Логин: {email}</p>
				<p className={s.info__data}>Пароль: ********* </p>
			</div>
			<div className={s.info__btns}>
				<Button
					onClick={() => openModalNewAuth("login")}
					buttonText="Редактировать логин"
				/>
				<Button
					onClick={() => openModalNewAuth("password")}
					buttonText="Редактировать пароль"
				/>
			</div>
			<ModalNewAuth
				type={modalNewAuthType}
				isOpen={isModalNewAuth}
				setIsOpen={setIsModalNewAuth}
			/>
		</div>
	);
};

export default Info;
