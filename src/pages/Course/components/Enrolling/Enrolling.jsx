import { useSelector } from "react-redux";
import Button from "../../../../components/Button/Button";
import {
	selectIsAuthenticated,
	selectUserId,
} from "../../../../redux/selectors";
import {
	useAddNewCourseMutation,
	useGetUserByIdQuery,
} from "../../../../redux/services/usersApi";
import { useGetWorkoutByIdQuery } from "../../../../redux/services/workoutsApi";
import s from "./Enrolling.module.scss";

export const Enrolling = ({ courseName, courseNameRu, workout }) => {
	const [addNewCourse] = useAddNewCourseMutation();

	const isAuth = useSelector(selectIsAuthenticated);
	const userId = useSelector(selectUserId);

	const workouts = {};

	workout.map((workoutId) => {
		const { data, isSuccess } = useGetWorkoutByIdQuery(workoutId);

		if (isSuccess && data) {
			const { name, exercises } = data;

			const exercisesId = {};

			for (const iterator of exercises) {
				exercisesId[iterator._id] = 0;
			}
			workouts[workoutId] = { name: name, exercises: exercisesId };
		}
	});

	const course = {
		userId: userId,
		courseName: courseName,
		data: {
			courseNameRu: courseNameRu,
			workouts: workouts,
		},
	};

	const { data: usersCourses, isLoading } = useGetUserByIdQuery(userId);
	if (isLoading) return;

	const addCourse = async (data) => {
		await addNewCourse(data)
			.then(() => {
				alert("Курс добавлен!");
			})
			.catch((error) => {
				console.log("error " + error);
			});
	};
	return (
		<section className={s.enrolling}>
			<p className={s.text}>
				Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
				с выбором направления и тренера, с которым тренировки принесут
				здоровье и радость!
			</p>
			<Button
				onClick={() => {
					if (!isAuth) return alert("Нужна авторизация!");
					!usersCourses ||
					!Object.keys(usersCourses.courses).some(
						(e) => e === courseName
					)
						? addCourse(course)
						: alert("Этот курс уже добавлен!");
				}}
				buttonText="Записаться на тренировку"
			/>
		</section>
	);
};
