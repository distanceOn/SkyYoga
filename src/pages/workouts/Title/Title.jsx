import s from "./title.module.scss";

export const Title = ({ content }) => {
	return (
		<div className={s.title}>
			<h1 className={s.title__text}>{content}</h1>
		</div>
	);
};
