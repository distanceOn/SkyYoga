import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import {
	useGetUsersQuery,
	useAddNewUserMutation,
	useGetUserByNameQuery,
	useSetUserProgressMutation,
} from '../../redux/services/usersApi';
import { setName } from '../../redux/slices/user';

export const BtnExample = () => {
	//примерно это будет происходить при регистрации!
	const dispatch = useDispatch();

	const user = {
		userId3: {
			bodyflex: {
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
			stretching: {
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
	};

	const [addNewUser] = useAddNewUserMutation();

	//надо подумать над реализацией диспатча в стейт без then

	const submitUser = async () => {
		await addNewUser(user)
			.then((result) => {
				console.log(result);
				dispatch(setName({ name: result.data.name }));
			})
			.catch((err) => {});
	};
	//так должно быть
	// const userName = useSelector(selectUserName);

	//пока заглушка в виде существующего name в бд
	const userName = '-N_LT8s_GpZKPbvY-J_o';
	const { isSuccess, data } = useGetUserByNameQuery(userName);

	//пример объекта, который нужно отправлять в запрос на обновление прогресса

	const newProgress = {
		name: userName,
		id: 'userId3', //это айди после аутентификации, он будет из стейта
		courseName: 'bodyflex', //либо любо1 другой из существующих курсов в бд
		workoutId: 'bf2', //айди занятия

		progress: { bf2e1: 1 }, //новое значение ЧИСЛОМ в ПРОЦЕНТАХ
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
			<button onClick={submitUser}>
				создать пользователя в бд и сохранить его name в state
			</button>

			<button
				onClick={() => {
					isSuccess && console.log(data);
				}}
			>
				получить пользователя по name ( после отправки)
			</button>
			<button onClick={setProgress}>
				Поменять прогресс в тренировке
			</button>
		</div>
	);
};
