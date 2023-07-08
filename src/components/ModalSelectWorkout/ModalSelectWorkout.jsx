import s from './ModalSelectWorkout.module.scss';
import { CSSTransition } from 'react-transition-group';
import { Workout } from './Workout/Workout';

export const ModalSelectWorkout = ({ isOpen, setIsOpen }) => {
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
		<CSSTransition
			in={isOpen}
			timeout={300}
			classNames={{
				enter: s['alert-enter'],
				enterActive: s['alert-enter-active'],
				exit: s['alert-exit'],
				exitActive: s['alert-exit-active'],
			}}
			unmountOnExit
		>
			<div
				className={s.wrapper}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<div className={s.modal} onClick={(e) => e.stopPropagation()}>
					<h2 className={s.heading}>Выберите тренировку</h2>
					<ul className={s.ul}>
						{workouts.map((item, i) => {
							const number = i + 1;

							return <Workout item={item} number={number} />;
						})}
					</ul>
				</div>
			</div>
		</CSSTransition>
	);
};
