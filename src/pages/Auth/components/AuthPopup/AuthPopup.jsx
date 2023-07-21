import s from "./AuthPopup.module.scss";

export const AuthPopup = (props) => {
	return (
		<div className={s.popup} style={props.style}>
			<div className={s.popup__content}>Такого пользователя не существует!</div>
		</div>
	);
};
