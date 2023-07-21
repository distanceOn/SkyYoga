import Header from '../../components/Header/Header';
import Info from './Info/Info';
import MyCourses from './MyCourses/MyCourses';
import s from './Profile.module.scss';
import { useGetUserByIdQuery } from '../../redux/services/usersApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses } from '../../redux/slices/user';
import { selectUserId } from '../../redux/selectors';

const Profile = () => {
	const userId = useSelector(selectUserId);

	const dispatch = useDispatch();
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
