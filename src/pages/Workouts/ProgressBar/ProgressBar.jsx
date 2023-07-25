/* eslint-disable */
import { useEffect, useState } from "react";
import s from "./ProgressBar.module.scss";

export const ProgressBar = ({ completed, color, wrapperClass }) => {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		setIsRunning(true);
		if (filled < completed && isRunning) {
			setTimeout(() => setFilled((prev) => (prev += 5)), 50);
		} else if (filled > completed && isRunning) {
			setTimeout(() => setFilled((prev) => (prev -= 5)), 50);
		}
	}, [filled, isRunning, completed]);
	return (
		<div className={`${s.wrapper} ${s[wrapperClass]}`}>
			<div
				style={{
					height: "100%",
					width: `${filled}%`,
					backgroundColor: `${color}`,
					transition: "width 0.5s",
					borderRadius: "22px",
				}}
			></div>
			<span className={s.label}>{completed}%</span>
		</div>
	);
};
