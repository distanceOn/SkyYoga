import Card from "./Card/Card";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      <Card card="yoga" /> <Card card="stratching" /> <Card card="dance" />
      <Card card="step" />
      <Card card="bodyflex" />
    </div>
  );
};

export default Cards;
