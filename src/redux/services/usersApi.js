import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl:
			'https://skyfitness-9edcd-default-rtdb.europe-west1.firebasedatabase.app/',
	}),
	endpoints: (build) => ({
		getUsers: build.query({
			query: () => `users.json`,
		}),
		getUserByName: build.query({
			query: (name) => `users/${name}.json`,
		}),
		addNewUser: build.mutation({
			query: (body) => ({
				url: 'users.json',
				method: 'POST',
				body,
			}),
		}),
		setUserProgress: build.mutation({
			query: (body) => ({
				url: `users/${body.name}/${body.id}/${body.courseName}/${body.workoutId}/exercises.json`,
				method: 'PATCH',
				body: body.progress,
			}),
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserByNameQuery,
	useAddNewUserMutation,
	useSetUserProgressMutation,
} = usersApi;
