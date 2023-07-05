import s from './UnauthorizedСourse.module.scss';

export const UnauthorizedСourse = () => {
	//все данные будут с бэка из пропса
	const description = [
		'Давно хотели попробовать йогу, но не решались начать.',
		'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
		'Ищете активность, полезную для тела и души.',
	];
	const directions = [
		'Йога для новичков',
		'Йога для новичков',
		'Йога для новичков',
		'Йога для новичков',
		'Йога для новичков',
		'Йога для новичков',
	];
	return (
		<div className={s.container}>
			<div className={s.title}>
				<h1 className={s.title__text}>Йога</h1>
			</div>
			<section className={s.description}>
				<h2 className={s.description__heading}>
					Подойдет для вас, если:
				</h2>
				<ul className={s.description__ul}>
					{description.map((item, i) => {
						const number = i + 1;
						return (
							<li className={s.description__li}>
								<span className={s.description__number}>
									{number}
								</span>
								<span>{item}</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section className={s.directions}>
				<h2 className={s.directions__heading}>Направления:</h2>

				<ul className={s.directions__ul}>
					{directions.map((item, i) => {
						return (
							<li className={s.directions__li}>
								<span>{item}</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section className={s.summary}>
				<p className={s.summary__text}>
					Благодаря комплексному воздействию упражнений происходит
					проработка всех групп мышц, тренировка суставов, улучшается
					циркуляция крови. Кроме того, упражнения дарят отличное
					настроение, заряжают бодростью и помогают противостоять
					стрессам.
				</p>
			</section>
			<section className={s.enrolling}>
				<p className={s.enrolling__text}>
					Оставьте заявку на пробное занятие, мы свяжемся с вами,
					поможем с выбором направления и тренера, с которым
					тренировки принесут здоровье и радость!
				</p>
				<button className={s.enrolling__btn}>
					Записаться на тренировку
				</button>
			</section>
		</div>
	);
};
