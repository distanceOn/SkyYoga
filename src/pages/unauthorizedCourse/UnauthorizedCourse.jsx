import s from './UnauthorizedCourse.module.scss';

import { Title } from './components/Title/Title';
import { Advantages } from './components/Advantages/Advantages';
import { Directions } from './components/Directions/Directions';
import { Description } from './components/Description/Description';
import { Enrolling } from './components/Enrolling/Enrolling';
import Header from './components/Header/Header';
import { useParams } from 'react-router-dom';
import { useGetCourseByNameQuery } from '../../redux/services/coursesApi';

const UnauthorizedCourse = () => {
	//все данные будут с бэка
	const params = useParams();
	const courseName = params.name;

	const { data, isLoading } = useGetCourseByNameQuery(courseName);
	if (isLoading) return <h1>Loading...</h1>;
	console.log(data);

	//тут будет запрос за данными на бэк по name или id (нужно решить)
	//потом эти данные пойдут во все компоненты

	if (courseName !== 'yoga') {
		return <h1>Здесь будет что-то кроме йоги</h1>;
	}

	return (
		<div className={s.container}>
			<Header />
			<Title />
			<Advantages />
			<Directions />
			<Description />
			<Enrolling />
		</div>
	);
};

export default UnauthorizedCourse;
