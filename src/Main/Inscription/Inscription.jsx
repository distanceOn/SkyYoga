import "./Inscription.scss";
import Union from "../../imgs/Union.svg";
const Inscription = () => {
  return (
    <div className="inscription">
      <div className="titles">
        <div className="titles__mini">Онлайн-тренировки для занятий дома</div>
        <div className="titles__big">
          Начните заниматься спортом и улучшите качество жизни
        </div>
      </div>
      <div className="sticker">
        <img src={Union} alt="sticker" className="sticker__union" />
        <p className="sticker__text">Измени своё тело за полгода</p>
      </div>
    </div>
  );
};

export default Inscription;
