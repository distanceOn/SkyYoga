import yoga from "../../../imgs/card_yoga.png";
import stratching from "../../../imgs/card__stratching.png";
import step from "../../../imgs/card__step.png";
import dance from "../../../imgs/card__dance.png";
import bodyflex from "../../../imgs/card__bodyflex.png";
import "./Card.scss";

const Card = (props) => {
  const getImg = () => {
    switch (props.card) {
      case "yoga":
        return {
          src: yoga,
          alt: "Йога",
        };
      case "stratching":
        return {
          src: stratching,
          alt: "Стретчинг",
        };
      case "step":
        return {
          src: step,
          alt: "Степ-аэробика",
        };
      case "dance":
        return {
          src: dance,
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
    <div>
      <img className="card" src={src} alt={alt} />
    </div>
  );
};

export default Card;
