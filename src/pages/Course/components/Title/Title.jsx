import s from "./Title.module.scss";

export const Title = ({ content, uniqueClass }) => {
	return (
		<div className={`${s.title} ${s[uniqueClass]}`}>
			<h1 className={s.title__text}>{content}</h1>
		</div>
	);
};
