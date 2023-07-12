import s from './Advantages.module.scss';

export const Advantages = () => {
	//заглушка
	const advantages = [
		'Давно хотели попробовать йогу, но не решались начать.',
		'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
		'Ищете активность, полезную для тела и души.',
	];

	return (
		<section className="advantages">
			<h2 className={s.heading}>Подойдет для вас, если:</h2>
			<ul className={s.ul}>
				{advantages.map((item, i) => {
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
