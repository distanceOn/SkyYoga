import s from "./ProgressBar.module.scss";
import ProgressBar from "@ramonak/react-progress-bar";

export const Progress = ({ exercises }) => {
	return (
		<section className={s.progress__container}>
			<h2 className={s.progress__heading}>Мой прогресс по тренировке:</h2>

			<div className={s.progress__workouts}>
				{exercises.map((item, i) => {
					const uniqueClass = "barCompleted" + i;

					return (
						<div key={i} className={s.progress__workouts_name}>
							<h3 className={s.progress__workouts_title}>
								{item.name.split("(")[0]}
							</h3>
							<ProgressBar
								completed={45}
								className={s.wrapper}
								barContainerClassName={s.container}
								completedClassName={`${s.barCompleted} ${s[uniqueClass]}`}
								labelClassName={s.label}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};
