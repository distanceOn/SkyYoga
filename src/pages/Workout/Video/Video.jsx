/* eslint-disable indent */
import s from "./Video.module.scss";
import image from "../../../assets/imgs/playBtn.svg";

export const Video = ({ src, name, courseName }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <h2 className={s.title__text}>{courseName.ru}</h2>
      </div>
      <div className={s.selections}>
        <h2 className={s.li}>{name} </h2>
      </div>
      <div className={s.video__container}>
        <video className={s.video} src={src}></video>

        <img className={s.play__button} width="156" src={image} alt="play" />
      </div>
    </div>
  );
};
