import s from './Workout.module.scss';

export const Workout = ({ number, item }) => {
	const itemClass = item.completed
		? `${s.item} ${s['item-completed']}`
		: s.item;

	return (
		<li key={number} className={s.li}>
			<a href="/" className={itemClass}>
				<h3 className={s.item__name}>{item.name}</h3>
				<p className={s.item__text}>
					{item.course} / {item.day}
				</p>
			</a>
		</li>
	);
};
