/* eslint-disable indent */
import { Exercises } from "./Exercises/Exercises";
import { Progress } from "./Progress/Progress";

import { Video } from "./Video/Video";

import s from "./Workout.module.scss";

import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useGetWorkoutByIdQuery } from "../../redux/services/workoutsApi";

export const Workout = () => {
  const workoutId = useSelector((state) => state.user.currentWorkout);
  !workoutId && console.log("Загрузка...");
  const { data, isLoading } = useGetWorkoutByIdQuery(workoutId);
  if (isLoading) return console.log("Загрузка...");
  const { src, courseName, exercises, name } = data;

  return (
    <div className={s.main}>
      <Header />
      <Video src={src} name={name} courseName={courseName} />
      <div className={s.workout}>
        <Exercises exercises={exercises} />
        <Progress exercises={exercises} />
      </div>
    </div>
  );
};
