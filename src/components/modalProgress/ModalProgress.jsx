import s from "./ModalProgress.module.scss";
import { CSSTransition } from "react-transition-group";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentWorkout, selectUserId } from "../../redux/selectors";
import { useSetUserProgressMutation } from "../../redux/services/usersApi";

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

	const setProgress = (key, value, obj) => {
		obj[key] = value;
		return obj;
	};

	const onChange = (event, exerciseId, maxAmount) => {
		event.target.value = compareAmounts(+event.target.value, maxAmount);
		setProgress(
			exerciseId,
			calcPercent(+event.target.value, maxAmount),
			progress
		);
	};

	const calcPercent = (currentAmount, maxAmount) =>
		(currentAmount * 100) / maxAmount;

	const compareAmounts = (currentAmount, maxAmount) => {
		if (currentAmount < 0) {
			return 1;
		} else if (currentAmount > maxAmount) {
			return maxAmount;
		} else {
			return currentAmount;
		}
	};

	const [setUserProgress] = useSetUserProgressMutation();

	const setAllProgress = () => {
		if (!Object.keys(progress).length) return console.log("Прогресс не заполнен");
		
		setProgress("courseName", courseName, info);
		setProgress("workoutId", workoutId, info);
		setProgress("userId", userId, info);
		setProgress("progress", progress, info);

		submitProgress();

		setIsOpen(false);
	};

	const submitProgress = async () => {
		await setUserProgress(info)
			.then((result) => {
				console.log(result);
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
												maxAmount
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
