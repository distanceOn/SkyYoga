import s from './Description.module.scss';

export const Description = ({ content }) => {
	return (
		<section className={s.description}>
			{typeof content === 'object' ? (
				content.map((item, i) => {
					return typeof item !== 'object' ? (
						<p className={s.text} key={i}>
							{item}
						</p>
					) : (
						<ul className={s.ul}>
							<h2 className={s.heading}>{item.heading}</h2>
							{item.content.map((item, i) => {
								return (
									<li className={s.li} key={i}>
										{item}
									</li>
								);
							})}
						</ul>
					);
				})
			) : (
				<p className={s.text}>{content}</p>
			)}
		</section>
	);
};
