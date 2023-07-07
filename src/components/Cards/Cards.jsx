import Card from "./Card/Card";
import s from "./Cards.module.scss";

const Cards = (props) => {
  const cardNames =
    props.page === "main"
      ? ["yoga", "stratching", "dance", "step", "bodyflex"]
      : ["yoga", "stratching", "bodyflex"];

  return (
    <div className={s.cards}>
      {cardNames.map((name) => (
        <Card
          page={props.page === "profile" ? "profile" : "main"}
          card={name}
        />
      ))}
    </div>
  );
};

export default Cards;
