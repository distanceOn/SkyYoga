import yoga from '../../../assets/imgs/card_yoga.png';
import stratching from '../../../assets/imgs/card__stratching.png';
import step from '../../../assets/imgs/card__step.png';
import dance from '../../../assets/imgs/card__dance.png';
import bodyflex from '../../../assets/imgs/card__bodyflex.png';
import { ModalSelectWorkout } from '../../ModalSelectWorkout/ModalSelectWorkout';
import s from './Card.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
	let isProfile = false;
	const navigate = useNavigate();

	if (props.page === 'profile') {
		isProfile = true;
	}
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
		<div
			onClick={() => {
				isProfile ? setIsModalOpen(!isModalOpen) : navigate(`/course/${props.card}`);
			}}
		>
			<img
				className={`${s.card} ${isProfile ? s.card__profile : ''}`}
				src={src}
				alt={alt}
			/>

			{isProfile && (
				<ModalSelectWorkout
					isOpen={isModalOpen}
					setIsOpen={setIsModalOpen}
				/>
			)}
		</div>
	);
};

export default Card;
