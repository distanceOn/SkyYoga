import s from './ModalSubmittedProgress.module.scss';
import { CSSTransition } from 'react-transition-group';

export const ModalSubmittedProgress = ({ isOpen, setIsOpen }) => {
	return (
		<CSSTransition
			in={isOpen}
			timeout={500}
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
					<h2 className={s.heading}>Ваш прогресс засчитан!</h2>
				</div>
			</div>
		</CSSTransition>
	);
};
