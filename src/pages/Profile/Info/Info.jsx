import s from "./Info.module.scss";
import Button from "../../../components/Button/Button";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../../redux/selectors";

const Info = () => {
	const email = useSelector(selectUserEmail);
	if (!email) return;

	return (
		<div className={s.info}>
			<h2 className={s.info__h2}>Мой профиль</h2>
			<div className={s.info__dataContainer}>
				<p className={s.info__data}>Логин: {email}</p>
				<p className={s.info__data}>Пароль: ********* </p>
			</div>
			<div className={s.info__btns}>
				<Button buttonText="Редактировать логин" />
				<Button buttonText="Редактировать пароль" />
			</div>
		</div>
	);
};

export default Info;
