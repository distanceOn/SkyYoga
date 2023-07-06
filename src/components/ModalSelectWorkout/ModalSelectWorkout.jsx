import s from './ModalSelectWorkout.module.scss';

export const ModalSelectWorkout = () => {
	//заглушка
	const workouts = [
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
		{
			name: 'Растягиваем мышцы бедра',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
			completed: true,
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
			completed: true,
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
			completed: false,
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
		{
			name: 'Утренняя практика',
			course: 'Йога на каждый день',
			day: '1 день ',
			author: 'Алексей Казубский',
		},
	];

	return (
		<div className={s.modal}>
			<div className={s.select__workout}>
				<h2 className={s.heading}>Выберите тренировку</h2>
				<ul className={s.ul}>
					{workouts.map((item, i) => {
						const itemClass = item.completed
							? `${s.item} ${s['item-completed']}`
							: s.item;

						const number = i + 1;

						return (
							<li key={number} className={s.li}>
								<a href="/" className={itemClass}>
									<h3 className={s.item__name}>
										{item.name}
									</h3>
									<p className={s.item__text}>
										{item.course} / {item.day}
									</p>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
