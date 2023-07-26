import Header from "../../components/Header/Header";
import Info from "./Info/Info";
import MyCourses from "./MyCourses/MyCourses";
import s from "./Profile.module.scss";
import { useGetUserByIdQuery } from "../../redux/services/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../redux/slices/user";
import { selectUserId } from "../../redux/selectors";
import { useEffect } from "react";

const Profile = () => {
	const dispatch = useDispatch();

	const userId = useSelector(selectUserId);
	const { isSuccess, data } = useGetUserByIdQuery(userId);
	useEffect(() => {
		isSuccess && dispatch(setUserInfo(data));
	}, [isSuccess]);

	return (
		<div className={s.profile}>
			<Header />
			<Info />
			<MyCourses />
		</div>
	);
};

export default Profile;
