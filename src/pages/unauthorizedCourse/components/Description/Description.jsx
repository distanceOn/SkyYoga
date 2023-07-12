import s from './Description.module.scss';


export const Description = () => {
	return (
		<section className='description'>
			<p className={s.text}>
				Благодаря комплексному воздействию упражнений происходит
				проработка всех групп мышц, тренировка суставов, улучшается
				циркуляция крови. Кроме того, упражнения дарят отличное
				настроение, заряжают бодростью и помогают противостоять
				стрессам.
			</p>
		</section>
	);
};
