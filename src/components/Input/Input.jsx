import s from "./Input.module.scss";

export const Input = ({ type, placeholderText, onChange, uniqueClass }) => {
	const handleChange = (e) => {
		onChange(e);
	};
	return (
		<div className={s.input__form}>
			<input
				type={type}
				placeholder={placeholderText}
				onChange={handleChange}
				className={uniqueClass ? uniqueClass : s.input}
			/>
		</div>
	);
};
