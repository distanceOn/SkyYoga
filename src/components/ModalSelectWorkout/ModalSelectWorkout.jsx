import s from "./ModalSelectWorkout.module.scss";
import { CSSTransition } from "react-transition-group";
import { Workout } from "./Workout/Workout";
import { useSelector } from "react-redux";
import { useRef } from "react";

export const ModalSelectWorkout = ({ isOpen, setIsOpen, course }) => {
	const userCourse = useSelector((state) => state.user.courses[course]);
	if (!userCourse) return console.log("Загрузка");
	const { workouts, courseNameRu } = userCourse;

	const modalRef = useRef();

	return (
		<CSSTransition
			in={isOpen}
			timeout={300}
			nodeRef={modalRef}
			classNames={{
				enter: s["alert-enter"],
				enterActive: s["alert-enter-active"],
				exit: s["alert-exit"],
				exitActive: s["alert-exit-active"],
			}}
			unmountOnExit
		>
			<div
				className={s.wrapper}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				ref={modalRef}
			>
				<div className={s.modal} onClick={(e) => e.stopPropagation()}>
					<h2 className={s.heading}>Выберите тренировку</h2>
					<ul className={s.ul}>
						{Object.entries(workouts).map((item, i) => {
							const number = i + 1;
							const workoutId = item[0];
							const workoutInfo = item[1];
							return (
								<Workout
									courseName={courseNameRu}
									key={i}
									item={workoutInfo}
									workoutId={workoutId}
									workoutName={workoutInfo.name}
									number={number}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</CSSTransition>
	);
};
