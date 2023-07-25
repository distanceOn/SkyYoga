import s from "./ModalProgress.module.scss";
import { CSSTransition } from "react-transition-group";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentWorkout, selectUserId } from "../../redux/selectors";
import {
	useSetUserProgressMutation,
	useSetUserWorkoutCompletedMutation,
} from "../../redux/services/usersApi";
import { onChange } from "./onChange";
import { setProgressToObj } from "./setProgressToObj";

export const ModalProgress = ({
	isOpen,
	setIsOpen,
	setIsSubmitted,
	exercises,
	courseName,
}) => {
	const modalRef = useRef();
	const progress = {};
	const info = {};

	const workoutId = useSelector(selectCurrentWorkout);
	const userId = useSelector(selectUserId);
	!userId && console.log("Loading...");

	const [setUserProgress] = useSetUserProgressMutation();
	const [setUserWorkoutCompleted] = useSetUserWorkoutCompletedMutation();

	const setAllProgress = () => {
		if (!Object.keys(progress).length)
			return console.log("Прогресс не заполнен");

		setProgressToObj("courseName", courseName, info);
		setProgressToObj("workoutId", workoutId, info);
		setProgressToObj("userId", userId, info);
		setProgressToObj("progress", progress, info);

		submitProgress(info);

		setIsOpen(false);
	};

	const submitWorkoutStatus = async (completed) => {
		await setUserWorkoutCompleted({
			userId,
			courseName,
			workoutId,
			completed,
		})
			.then(() => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const submitProgress = async (data) => {
		await setUserProgress(data)
			.then(() => {
				if (Object.values(data.progress).every((e) => e === 100)) {
					console.log("Completed");
					submitWorkoutStatus({ completed: true });
				}
				setIsSubmitted(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
					<h2 className={s.heading}>Мой прогресс</h2>
					<div className={s.inputs}>
						{exercises.map((exercise, i) => {
							const maxAmount = exercise.amount;
							return (
								<label key={i} className={s.label}>
									{`Сколько раз вы сделали ${exercise.name
										.split("(")[0]
										.toLowerCase()}?`}

									<Input
										type={"number"}
										uniqueClass={s.input}
										placeholder="Введите значение"
										max={maxAmount}
										min={0}
										placeholderText={maxAmount}
										onChange={(event) => {
											onChange(
												event,
												exercise["_id"],
												maxAmount,
												progress
											);
										}}
									/>
								</label>
							);
						})}
					</div>

					<Button onClick={setAllProgress} buttonText="Отправить" />
				</div>
			</div>
		</CSSTransition>
	);
};
