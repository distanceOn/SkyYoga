import yoga from '../../../assets/imgs/card_yoga.png';
import stratching from '../../../assets/imgs/card__stratching.png';
import step from '../../../assets/imgs/card__step.png';
import dance from '../../../assets/imgs/card__dance.png';
import bodyflex from '../../../assets/imgs/card__bodyflex.png';
import { ModalSelectWorkout } from '../../ModalSelectWorkout/ModalSelectWorkout';
import s from './Card.module.scss';

import { useState } from 'react';

const Card = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const getImg = () => {
		switch (props.card) {
			case 'yoga':
				return {
					src: yoga,
					alt: 'Йога',
				};
			case 'stratching':
				return {
					src: stratching,
					alt: 'Стретчинг',
				};
			case 'step':
				return {
					src: step,
					alt: 'Степ-аэробика',
				};
			case 'dance':
				return {
					src: dance,
					alt: 'Танцевальный фитнес',
				};
			case 'bodyflex':
				return {
					src: bodyflex,
					alt: 'Бодифлекс',
				};

			default:
				break;
		}
	};

	const { src, alt } = getImg();
	return (
		<div>
			<img
				onClick={() => {
					console.log(isModalOpen);
					setIsModalOpen(!isModalOpen);
				}}
				className={`${s.card} ${
					props.page === 'profile' ? s.card__profile : ''
				}`}
				src={src}
				alt={alt}
			/>
			{isModalOpen && (
				<ModalSelectWorkout
					isOpen={isModalOpen}
					setIsOpen={setIsModalOpen}
				/>
			)}
		</div>
	);
};

export default Card;
