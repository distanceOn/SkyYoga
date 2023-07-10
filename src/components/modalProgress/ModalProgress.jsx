import s from './ModalProgress.module.scss';
import { CSSTransition } from 'react-transition-group';

export const ModalProgress = ({ isOpen, setIsOpen }) => {
	const questions = [
		'Сколько раз вы сделали наклоны вперед?',
		'Сколько раз вы сделали наклоны вперед?',
		'Сколько раз вы сделали наклоны вперед?',
		'Сколько раз вы сделали наклоны вперед?',
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
					<h2 className={s.heading}>Мой прогресс</h2>
					{questions.map((question, i) => {
						return (
							<div key={i} className={s.inputs}>
								<label className={s.label}>
									{question}
									<input
										className={s.input}
										placeholder="Введите значение"
									></input>
								</label>
							</div>
						);
					})}
					<button className={s.btn}>Отправить</button>
				</div>
			</div>
		</CSSTransition>
	);
};
