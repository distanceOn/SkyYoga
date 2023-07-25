import yoga from "../../../assets/imgs/card_yoga.png";
import stretching from "../../../assets/imgs/card__stretching.png";
import step_aerobics from "../../../assets/imgs/card__step_aerobics.png";
import dance_fitness from "../../../assets/imgs/card__dance_fitness.png";
import bodyflex from "../../../assets/imgs/card__bodyflex.png";
import { ModalSelectWorkout } from "../../ModalSelectWorkout/ModalSelectWorkout";
import s from "./Card.module.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ card, page }) => {
	let isProfile = false;
	const navigate = useNavigate();

	if (page === "profile") {
		isProfile = true;
	}
	const [isModalOpen, setIsModalOpen] = useState(false);

	const getImg = () => {
		switch (card) {
		case "yoga":
			return {
				src: yoga,
				alt: "Йога",
			};
		case "stretching":
			return {
				src: stretching,
				alt: "Стретчинг",
			};
		case "step_aerobics":
			return {
				src: step_aerobics,
				alt: "Степ-аэробика",
			};
		case "dance_fitness":
			return {
				src: dance_fitness,
				alt: "Танцевальный фитнес",
			};
		case "bodyflex":
			return {
				src: bodyflex,
				alt: "Бодифлекс",
			};

		default:
			break;
		}
	};

	const { src, alt } = getImg();
	return (
		<div
			onClick={() => {
				isProfile
					? setIsModalOpen(!isModalOpen)
					: navigate(`/course/${card}`);
			}}
		>
			<img
				className={`${s.card} ${isProfile ? s.card__profile : ""}`}
				src={src}
				alt={alt}
			/>

			{isProfile && (
				<ModalSelectWorkout
					course={card}
					isOpen={isModalOpen}
					setIsOpen={setIsModalOpen}
				/>
			)}
		</div>
	);
};

export default Card;
