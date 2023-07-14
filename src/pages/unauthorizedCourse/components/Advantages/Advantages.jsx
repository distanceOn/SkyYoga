import s from './Advantages.module.scss';

export const Advantages = ({ content }) => {
	//заглушка

	return (
		<section className="advantages">
			<h2 className={s.heading}>Подойдет для вас, если:</h2>
			<ul className={s.ul}>
				{content.map((item, i) => {
					const number = i + 1;
					return (
						<li key={i} className={s.li}>
							<span className={s.number}>{number}</span>
							<span>{item}</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
