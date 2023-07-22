import s from "./AuthPopup.module.scss";

export const AuthPopup = ({ style, errorText, isVisiblePopup }) => {
	const popupClasses = isVisiblePopup ? s.show : s.hide;
	return (
		<div className={s.popup} style={style}>
			<div className={`${s.popup__content} ${popupClasses}`}>{errorText}</div>
		</div>
	);
};
