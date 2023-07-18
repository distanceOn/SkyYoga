import Card from "./Card/Card";
import s from "./Cards.module.scss";

const Cards = (props) => {
	const cardNames =
		props.page === "main"
			? ["yoga", "stretching", "dance_fitness", "step_aerobics", "bodyflex"]
			: ["yoga", "stretching", "bodyflex"];

	return (
		<div className={s.cards}>
			{cardNames.map((name, index) => (
				<Card
					key={index}
					page={props.page === "profile" ? "profile" : "main"}
					card={name}
				/>
			))}
		</div>
	);
};

export default Cards;
