import s from "./Video.module.scss";

export const Video = ({ src, name, courseName }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<h2 className={s.title__text}>{courseName}</h2>
			</div>
			<div className={s.selections}>
				<h2 className={s.li}>{name} </h2>
			</div>
			<div className={s.video__container}>
				<iframe
					className={s.video}
					id="ytplayer"
					type="text/html"
					src={`http://www.youtube.com/embed/${src}`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
					frameBorder="0"
				/>
			</div>
		</div>
	);
};
