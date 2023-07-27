export const userData = (uid) => {
	return {
		userId: uid,
		data: {
			courses: {
				bodyflex: {
					courseNameRu: "Бодифлекс", //нужно bf1 bf2 и тд добавить в поле workouts
					workouts: {
						bf1: {
							name: "Техника дыхания",
							exercises: {
								bf1e1: 100,
								bf1e2: 70,
								bf1e3: 0,
							},
						},
						bf2: {
							name: "Тренировка мышц бедер",
							exercises: {
								bf2e1: 0,
								bf2e2: 0,
								bf2e3: 0,
							},
						},
						bf3: {
							name: "Тренировка мышц ягодиц",
							exercises: {
								bf3e1: 0,
								bf3e2: 0,
								bf3e3: 0,
							},
						},
					},
				},
				stretching: {
					courseNameRu: "Стретчинг",
					workouts: {
						str1: {
							name: "Основы стретчинга",
							exercises: {
								str1e1: 100,
								str1e2: 70,
								str1e3: 0,
								str1e4: 0,
							},
						},
						str2: {
							name: "Разогрев мышц",
							exercises: {
								str2e1: 0,
								str2e2: 0,
								str2e3: 0,
							},
						},
						str3: {
							name: "Разогрев мышц 2.0",
							exercises: {
								str3e1: 0,
								str3e2: 0,
								str3e3: 0,
							},
						},
					},
				},
			},
		},
	};
};
