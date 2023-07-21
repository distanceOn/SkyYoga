
import Header from '../../components/Header/Header';
import s from './Main.module.scss';
import Inscription from './Inscription/Inscription';
import Cards from '../../components/Cards/Cards';
import Footer from './Footer/Footer';
import { useGetCoursesQuery } from '../../redux/services/coursesApi';

const Main = () => {
	const { data, isLoading } = useGetCoursesQuery();

	if (isLoading) return console.log('Загрузка');
	const coursesName = Object.keys(data);

	return (
		<div className={s.main}>
			<div className={s.container}>
				<Header />
				<Inscription />
				<Cards coursesName={coursesName} page="main" />
				<Footer />
			</div>
		</div>
	);

};

export default Main;
