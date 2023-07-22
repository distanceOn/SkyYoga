import s from "./Input.module.scss";
import { useState } from "react";

export const Input = ({
	type,
	placeholderText,
	onChange,
	uniqueClass,
	onComponentRef,
}) => {
	// Внутреннее состояние компонента
	const [inputValue, setInputValue] = useState("");

	// Колбэк, который вызывается при изменении значения инпута
	const handleChange = (e) => {
		onChange(e);
		if (e.target.value) {
			const value = e.target.value;
			setInputValue(value);

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
				value={inputValue}
			/>
		</div>
	);
};
