import s from "./Input.module.scss";

export const Input = ({
	type,
	placeholderText,
	onChange,
	uniqueClass,
	onComponentRef,
}) => {
	// Колбэк, который вызывается при изменении значения инпута
	const handleChange = (e) => {
		onChange(e);
		if (e.target.value) {
			const value = e.target.value;

			// Вызываем колбэк, чтобы передать информацию о компоненте родительскому компоненту
			onComponentRef({ value });
		}
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
