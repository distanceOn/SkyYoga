import Header from "../../components/Header/Header";
import s from "./Main.module.scss";
import Inscription from "./Inscription/Inscription";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import { useGetCoursesQuery } from "../../redux/services/coursesApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slices/user";

const Main = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const storageId = localStorage.getItem("userID");
		const storageEmail = localStorage.getItem("userEmail");
		if (!storageId || !storageEmail) return;
		dispatch(setLogin({ userId: storageId, email: storageEmail }));
	}, [dispatch]);

	const { data, isLoading } = useGetCoursesQuery();

	if (isLoading) return console.log("Загрузка");
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
