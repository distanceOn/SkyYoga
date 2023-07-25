import s from "./Workout.module.scss";
import { useDispatch } from "react-redux";
import { setCurrentWorkout } from "../../../redux/slices/user";
import { useNavigate } from "react-router-dom";

export const Workout = ({
	number,
	item,
	courseName,
	workoutName,
	workoutId,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChooseWorkout = () => {
		dispatch(setCurrentWorkout({ currentWorkout: workoutId }));
		navigate("/workout");
	};

	const itemClass = item.completed
		? `${s.item} ${s["item-completed"]}`
		: s.item;

	return (
		<li key={number} className={itemClass} onClick={handleChooseWorkout}>
			<h3 className={s.item__name}>{workoutName}</h3>
			<p className={s.item__text}>{courseName}</p>
		</li>
	);
};
