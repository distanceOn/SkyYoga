import Card from "./Card/Card";
import s from "./Cards.module.scss";

const Cards = () => {
  const cardNames = ["yoga", "stratching", "dance", "step", "bodyflex"];

  return (
    <div className={s.cards}>
      {cardNames.map((name) => (
        <Card card={name} />
      ))}
    </div>
  );
};

export default Cards;
