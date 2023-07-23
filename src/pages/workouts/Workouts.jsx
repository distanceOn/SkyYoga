import { Exercises } from "./Exercises/Exercises";
import { Progress } from "./Progress/Progress";

import { Video } from "./Video/Video";

import s from "./Workouts.module.scss";

import Header from "../../components/Header/Header";
import { useGetWorkoutByIdQuery } from "../../redux/services/workoutsApi";
import { useParams } from "react-router-dom";

export const Workouts = () => {
	//все данные будут с бэка

	const params = useParams();
	const workoutID = params.id;
	const { data, isLoading } = useGetWorkoutByIdQuery(workoutID);

	if (isLoading) return <h1>Loading...</h1>;
	const { id: name, exercises } = data;

	return (
		<div className={s.main}>
			<Header />
			<Video content={name} />
			<div className={s.workout}>
				<Exercises content={exercises} />
				<Progress content={exercises} />
			</div>
		</div>
	);
};
