/* eslint-disable */
import s from "./ProgressBar.module.scss";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useSelector } from "react-redux";
import { selectCurrentWorkout, selectUserId } from "../../../redux/selectors";
import { useGetUserProgressQuery } from "../../../redux/services/usersApi";

export const Progress = ({ exercises, courseName }) => {
	const userId = useSelector(selectUserId);
	const workoutId = useSelector(selectCurrentWorkout);
	const { data, isLoading } = useGetUserProgressQuery({
		userId,
		workoutId,
		courseName,
	});

	const colors = [
		"#565eef",
		"#FF6D00",
		"#9A48F1",
		"#565eef",
		"#FF6D00",
		"#9A48F1",
	];

	if (isLoading) return console.log("Загрузка...");

	return (
		<section className={s.progress__container}>
			<h2 className={s.progress__heading}>Мой прогресс по тренировке:</h2>

			<div className={s.progress__workouts}>
				{exercises.map((item, i) => {
					const uniqueClass = "wrapper" + i;
					const id = item["_id"];

					return (
						<div key={i} className={s.progress__workouts_name}>
							<h3 className={s.progress__workouts_title}>
								{item.name.split("(")[0]}
							</h3>

							<ProgressBar
								wrapperClass={uniqueClass}
								color={colors[i]}
								completed={data[id]}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};
