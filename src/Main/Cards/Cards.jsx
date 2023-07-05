import Card from "./Card/Card";
import s from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={s.cards}>
      <Card card="yoga" /> <Card card="stratching" /> <Card card="dance" />
      <Card card="step" />
      <Card card="bodyflex" />
    </div>
  );
};

export default Cards;
