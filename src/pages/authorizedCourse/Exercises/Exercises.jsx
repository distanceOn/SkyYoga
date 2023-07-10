import s from './Exercises.module.scss';
import { useState } from 'react';
import { ModalProgress } from '../../../components/modalProgress/ModalProgress';
import { ModalSubmittedProgress } from '../../../components/ModalSubmittedProgress/ModalSubmittedProgress';
import Button from '../../../components/Button/Button';

export const Exercises = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const exercisesTypes = [
		'Наклон вперед (10 повторений)',
		'Наклон назад (10 повторений)',
		'Поднятие ног, согнутых в коленях (5 повторений)',
	];
	return (
		<section className={s.container}>
			<h2 className={s.heading}>Упражнения</h2>
			<ul className={s.ul}>
				{exercisesTypes.map((item, i) => {
					return (
						<li key={i} className={s.li}>
							{item}
						</li>
					);
				})}
			</ul>
			<button
				onClick={() => setIsModalOpen(!isModalOpen)}
				className={s.button}
			>
				Заполнить свой прогресс
			</button>

			<ModalProgress
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				// isSubmitted={isSubmitted}
				setIsSubmitted={setIsSubmitted}
			/>
			<ModalSubmittedProgress
				isOpen={isSubmitted}
				setIsOpen={setIsSubmitted}
			/>
		</section>
	);
};
