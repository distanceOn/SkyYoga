import s from "./Workout.module.scss";
import { NavLink } from "react-router-dom";

export const Workout = ({ number, item }) => {
	//заглушка, данные будет из пропса/бэка
	const workout_id = 2;
	const itemClass = item.completed ? `${s.item} ${s["item-completed"]}` : s.item;

	return (
		<li key={number} className={s.li}>
			<NavLink to={`/workout/${workout_id}`} className={itemClass}>
				<h3 className={s.item__name}>{item.name}</h3>
				<p className={s.item__text}>
					{item.course} / {item.day}
				</p>
			</NavLink>
		</li>
	);
};
