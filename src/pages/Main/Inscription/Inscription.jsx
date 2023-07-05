import s from "./Inscription.module.scss";
import Union from "../../../assets/imgs/Union.svg";
const Inscription = () => {
  return (
    <div className={s.inscription}>
      <div className={s.titles}>
        <div className={s.titles__mini}>Онлайн-тренировки для занятий дома</div>
        <div className={s.titles__big}>
          Начните заниматься спортом и улучшите качество жизни
        </div>
      </div>
      <div className={s.sticker}>
        <img src={Union} alt="sticker" className={s.sticker__union} />
        <p className={s.sticker__text}>Измени своё тело за полгода</p>
      </div>
    </div>
  );
};

export default Inscription;
