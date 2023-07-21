import s from './Directions.module.scss';

export const Directions = ({ content }) => {
	return (
		<section className="directions">
			<h2 className={s.heading}>Направления:</h2>

			<ul className={s.ul}>
				{content.map((item, i) => {
					return (
						<li key={i} className={s.li}>
							<span>{item}</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
