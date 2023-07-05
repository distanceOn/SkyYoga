import s from './Description.module.scss';

export const Description = () => {
	//заглушка
	const description = [
		'Давно хотели попробовать йогу, но не решались начать.',
		'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
		'Ищете активность, полезную для тела и души.',
	];

	return (
		<section className="description">
			<h2 className={s.heading}>Подойдет для вас, если:</h2>
			<ul className={s.ul}>
				{description.map((item, i) => {
					const number = i + 1;
					return (
						<li className={s.li}>
							<span className={s.number}>{number}</span>
							<span>{item}</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
