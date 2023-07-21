import { useDispatch, useSelector } from 'react-redux';
import {
	useGetUsersQuery,
	useAddNewUserMutation,
	useGetUserByIdQuery,
	useSetUserProgressMutation,
} from '../../redux/services/usersApi';
import { setUserId } from '../../redux/slices/user';
import { selectUserId } from '../../redux/selectors';

export const BtnExample = () => {
	//примерно это будет происходить при регистрации!
	const dispatch = useDispatch();

	const user = {
		userId: 'userIdFromAuth',
		data: {
			login: 'username',
			courses: {
				bodyflex: {
					courseNameRu: 'Бодифлекс', //нужно bf1 bf2 и тд добавить в поле workouts
					workouts: {
						bf1: {
							name: 'Техника дыхания',
							exercises: {
								bf1e1: 100,
								bf1e2: 70,
								bf1e3: 0,
							},
						},
						bf2: {
							name: 'Тренировка мышц бедер',
							exercises: {
								bf2e1: 0,
								bf2e2: 0,
								bf2e3: 0,
							},
						},
						bf3: {
							name: 'Тренировка мышц ягодиц',
							exercises: {
								bf3e1: 0,
								bf3e2: 0,
								bf3e3: 0,
							},
						},
					},
				},
				stretching: {
					courseNameRu: 'Стретчинг',
					str1: {
						name: 'Основы стретчинга',
						exercises: {
							str1e1: 100,
							str1e2: 70,
							str1e3: 0,
						},
					},
					str2: {
						name: 'Разогрев мышц',
						exercises: {
							str2e1: 0,
							str2e2: 0,
							str2e3: 0,
						},
					},
					str3: {
						name: 'Разогрев мышц 2.0',
						exercises: {
							str3e1: 0,
							str3e2: 0,
							str3e3: 0,
						},
					},
				},
			},
		},
	};

	const [addNewUser] = useAddNewUserMutation();

	const submitUser = async () => {
		await addNewUser(user);
	};
	//так должно быть
	// const userId = useSelector(selectUserId);

	//пока заглушка в виде существующего name в бд
	const userId = 'userIdFromAuth';
	const { isSuccess, data } = useGetUserByIdQuery(userId);

	//пример объекта, который нужно отправлять в запрос на обновление прогресса

	const newProgress = {
		userId: userId,
		courseName: 'bodyflex', //либо любой другой из существующих курсов в бд
		workoutId: 'bf2', //айди занятия

		progress: { bf2e1: 10 }, //новое значение ЧИСЛОМ в ПРОЦЕНТАХ
	};
	const [setUserProgress] = useSetUserProgressMutation();

	const setProgress = async () => {
		await setUserProgress(newProgress)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {});
	};

	return (
		<div>
			<button onClick={submitUser}>создать пользователя в бд</button>

			<button
				onClick={() => {
					isSuccess && console.log(data);
				}}
			>
				получить пользователя по id
			</button>
			<button onClick={setProgress}>
				Поменять прогресс в тренировке
			</button>
		</div>
	);
};
