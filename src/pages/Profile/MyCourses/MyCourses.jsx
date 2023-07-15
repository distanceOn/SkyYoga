import Cards from '../../../components/Cards/Cards';
import s from './MyCourses.module.scss';
import { useSelector } from 'react-redux';
import { selectUserCourses } from '../../../redux/selectors';

const MyCourses = () => {
	const courses = useSelector(selectUserCourses);

	if (!courses) return console.log('Загрузка');

	const coursesName = Object.keys(courses);

	return (
		<div className={s.courses}>
			<h2 className={s.courses__h2}>Мои курсы</h2>
			<Cards coursesName={coursesName} page="profile" />
		</div>
	);
};

export default MyCourses;
