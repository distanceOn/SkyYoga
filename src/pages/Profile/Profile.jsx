import Header from '../../components/Header/Header';
import Info from './Info/Info';
import MyCourses from './MyCourses/MyCourses';
import s from './Profile.module.scss';
import { useGetUserByIdQuery } from '../../redux/services/usersApi';
import { useDispatch } from 'react-redux';
import { setCourses } from '../../redux/slices/user';

const Profile = () => {
	//так должно быть
	// const userId = useSelector(selectUserName);

	const dispatch = useDispatch();
	//пока заглушка в виде существующего name в бд
	const userId = 'userIdFromAuth';
	const { isSuccess, data } = useGetUserByIdQuery(userId);

	isSuccess && dispatch(setCourses(data));

	return (
		<div className={s.profile}>
			<Header />
			<Info />
			<MyCourses />
		</div>
	);
};

export default Profile;
