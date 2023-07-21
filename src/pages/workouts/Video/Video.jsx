import s from "./Video.module.scss";
import image from "../../../assets/imgs/playBtn.svg";

export const Video = ({ content }) => {
  const selections = [" Красота и здоровье", "Йога на каждый день", " 2 день"];
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <h1 className={s.title__text}>{content}</h1>
      </div>
      <ul className={s.selections}>
        {selections.map((item, i) => {
          return (
            <li key={i} className={s.li}>
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <div className={s.video__container}>
        <video className={s.video} src="#"></video>

        <img className={s.play__button} width="156" src={image} alt="play" />
      </div>
    </div>
  );
};
