import { Exercises } from './Exercises/Exercises';
import { Progress } from './Progress/Progress';

import { Video } from './Video/Video';

import s from './Workout.module.scss';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

export const Workout = () => {
	//все данные будут с бэка
	const params = useParams();
	const id = +params.id;

	//тут будет запрос за данными на бэк по name или id (нужно решить)
	//потом эти данные пойдут во все компоненты

	if (id !== 2) {
		return <h1>Здесь будет что-то кроме йоги</h1>;
	}

	return (
		<div className={s.main}>
			<Header />
			<Video />
			<div className={s.workout}>
				<Exercises />
				<Progress />
			</div>
		</div>
	);
};
