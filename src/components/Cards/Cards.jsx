import Card from './Card/Card';
import s from './Cards.module.scss';

const Cards = ({ page, coursesName }) => {
	return (
		<div className={s.cards}>
			{coursesName.map((name) => (
				<Card
					page={page === 'profile' ? 'profile' : 'main'}
					card={name}
				/>
			))}
		</div>
	);
};

export default Cards;
