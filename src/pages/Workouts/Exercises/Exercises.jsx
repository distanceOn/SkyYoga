import s from "./Exercises.module.scss";
import { useState } from "react";
import { ModalProgress } from "../../../components/ModalProgress/ModalProgress";
import { ModalSubmittedProgress } from "../../../components/ModalSubmittedProgress/ModalSubmittedProgress";
import Button from "../../../components/Button/Button";

export const Exercises = ({ exercises, courseName }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const exerciseNames = exercises.map((ex) => ex.name);

	return (
		<section className={s.container}>
			<h2 className={s.heading}>Упражнения</h2>
			<ul className={s.ul}>
				{exerciseNames.map((name, i) => {
					return (
						<li key={i} className={s.li}>
							{name}
						</li>
					);
				})}
			</ul>
			<Button
				onClick={() => setIsModalOpen(!isModalOpen)}
				buttonText="Заполнить свой прогресс"
			></Button>

			<ModalProgress
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				setIsSubmitted={setIsSubmitted}
				exercises={exercises}
				courseName={courseName}
			/>
			<ModalSubmittedProgress
				isOpen={isSubmitted}
				setIsOpen={setIsSubmitted}
			/>
		</section>
	);
};
