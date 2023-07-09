import s from './UnauthorizedCourse.module.scss';

import { Title } from './components/Title/Title';
import { Description } from './components/Description/Description';
import { Directions } from './components/Directions/Directions';
import { Summary } from './components/Summary/Summary';
import { Enrolling } from './components/Enrolling/Enrolling';
import Header from './components/Header/Header';
import { useParams } from 'react-router-dom';

const UnauthorizedCourse = () => {
	//все данные будут с бэка
	const params = useParams();
	const name = params.name;

	//тут будет запрос за данными на бэк по name или id (нужно решить)
	//потом эти данные пойдут во все компоненты

	if (name !== 'yoga') {
		return <h1>Здесь будет что-то кроме йоги</h1>;
	}

	return (
		<div className={s.container}>
			<Header />
			<Title />
			<Description />
			<Directions />
			<Summary />
			<Enrolling />
		</div>
	);
};

export default UnauthorizedCourse;
