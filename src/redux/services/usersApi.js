import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://skyfitness-9edcd-default-rtdb.europe-west1.firebasedatabase.app/",
	}),
	endpoints: (build) => ({
		getUsers: build.query({
			query: () => "users.json",
		}),
		getUserById: build.query({
			query: (userId) => `users/${userId}.json`,
		}),
		addNewUser: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}.json`,
				method: "PUT",
				body: body.data,
			}),
		}),
		setUserProgress: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}/exercises.json`,
				method: "PATCH",
				body: body.progress,
			}),
		}),
		setUserWorkoutCompleted: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}/courses/${body.courseName}/${body.workoutId}.json`,
				method: "PATCH",
				body: body.completed,
			}),
		}),
		getUserProgress: build.query({
			query: (body) => `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}/exercises.json`,
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserByIdQuery,
	useAddNewUserMutation,
	useSetUserProgressMutation,
	useSetUserWorkoutCompletedMutation,
	useGetUserProgressQuery
} = usersApi;
