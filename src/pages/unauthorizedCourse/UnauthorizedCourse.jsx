import s from "./UnauthorizedCourse.module.scss";

import { Title } from "./components/Title/Title";
import { Advantages } from "./components/Advantages/Advantages";
import { Directions } from "./components/Directions/Directions";
import { Description } from "./components/Description/Description";
import { Enrolling } from "./components/Enrolling/Enrolling";
import { useParams } from "react-router-dom";
import { useGetCourseByNameQuery } from "../../redux/services/coursesApi";
import Header from "../../components/Header/Header";

const UnauthorizedCourse = () => {
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
		</div>
	);
};

export default UnauthorizedCourse;
