import s from './ModalSubmittedProgress.module.scss';

export const ModalSubmittedProgress = () => {
	return (
		<div className={s.modal}>
			<div className={s.content}>
				<h2 className={s.heading}>Ваш прогресс засчитан!</h2>
			</div>
		</div>
	);
};
