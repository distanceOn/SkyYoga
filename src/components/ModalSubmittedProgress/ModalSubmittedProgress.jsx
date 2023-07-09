import s from './ModalSubmittedProgress.module.scss';

export const ModalSubmittedProgress = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.modal}>
				<h2 className={s.heading}>Ваш прогресс засчитан!</h2>
			</div>
		</div>
	);
};
