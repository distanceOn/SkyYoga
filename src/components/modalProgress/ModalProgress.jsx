import s from './ModalProgress.module.scss';

export const ModalProgress = () => {
	const questions = [
		'Сколько раз вы сделали наклоны вперед?',
		'Сколько раз вы сделали наклоны вперед?',
		'Сколько раз вы сделали наклоны вперед?',
		'Сколько раз вы сделали наклоны вперед?',
	];

	return (
		<form className={s.modal}>
			<h2 className={s.heading}>Мой прогресс</h2>
			{questions.map((question) => {
				return (
					<div className={s.inputs}>
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
		</form>
	);
};
