import s from "./Video.module.scss";
import image from "../../../assets/imgs/playBtn.svg";

export const Video = ({ src, name, course }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<h1 className={s.title__text}>{course}</h1>
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