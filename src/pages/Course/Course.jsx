import s from "./Course.module.scss";

import { Title } from "./components/Title/Title";
import { Advantages } from "./components/Advantages/Advantages";
import { Directions } from "./components/Directions/Directions";
import { Description } from "./components/Description/Description";
import { Enrolling } from "./components/Enrolling/Enrolling";
import { useParams } from "react-router-dom";
import { useGetCourseByNameQuery } from "../../redux/services/coursesApi";
import Header from "../../components/Header/Header";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slices/user";
import Footer from "../../components/Footer/Footer";

const Course = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const storageId = localStorage.getItem("userID");
		const storageEmail = localStorage.getItem("userEmail");
		if (!storageId || !storageEmail) return;
		dispatch(setLogin({ userId: storageId, email: storageEmail }));
	}, [dispatch]);

	const params = useParams();
	const courseName = params.name;

	const { data, isLoading } = useGetCourseByNameQuery(courseName);
	//пока некрасиво
	if (isLoading) return <h1>Loading...</h1>;

	const { name: title, advantages, directions, description } = data;
	return (
		<div className={s.container}>
			<Header />
			<Title content={title} />
			<Advantages content={advantages} />
			<Directions content={directions} />
			<Description content={description} />
			<Enrolling />
			<Footer />
		</div>
	);
};

export default Course;
