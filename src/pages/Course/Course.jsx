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
		if (!storageId) return;
		dispatch(setLogin({ userId: storageId }));
	}, [dispatch]);

	const params = useParams();
	const courseName = params.name;

	const { data, isLoading } = useGetCourseByNameQuery(courseName);

	if (isLoading) return console.log("Loading...");

	const { name: title, advantages, directions, description, workout } = data;
	return (
		<div className={s.container}>
			<Header />
			<Title content={title} />
			<Advantages content={advantages} />
			<Directions content={directions} />
			<Description content={description} />
			<Enrolling courseName={courseName} courseNameRu={title} workout={workout}/>
			<Footer />
		</div>
	);
};

export default Course;
