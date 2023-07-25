import s from "./Input.module.scss";

export const Input = ({ type, placeholderText, onChange, uniqueClass, max, min }) => {

	return (
		<div className={s.input__form}>
			<input
				type={type}
				placeholder={placeholderText}
				onChange={onChange}
				className={uniqueClass ? uniqueClass : s.input}
				max={max}
				min={min}
			/>
		</div>
	);
};
