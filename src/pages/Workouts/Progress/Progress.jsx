import s from "./ProgressBar.module.scss";
import ProgressBar from "@ramonak/react-progress-bar";
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
								completed={data[id] ? data[id] : ""}
								className={`${s.wrapper} ${s[uniqueClass]}`}
								barContainerClassName={s.container}
								bgColor={colors[i]}
								height="100%"
								// completedClassName={`${s.barCompleted} ${s[uniqueClass]}`}
								labelClassName={s.label}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};