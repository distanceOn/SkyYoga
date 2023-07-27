import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://skyfitness-9edcd-default-rtdb.europe-west1.firebasedatabase.app/",
	}),
	tagTypes: ["Progress", "Status", "Course"],
	endpoints: (build) => ({
		getUserById: build.query({
			query: (userId) => `users/${userId}.json`,
			providesTags: ["Status", "Course"],
		}),
		addNewUser: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}.json`,
				method: "PUT",
				body: body.data,
			}),
		}),
		getUserProgress: build.query({
			query: (body) =>
				`users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}/exercises.json`,
			providesTags: ["Progress"],
		}),
		setUserProgress: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}/exercises.json`,
				method: "PATCH",
				body: body.progress,
			}),
			invalidatesTags: ["Progress"],
		}),
		setUserWorkoutCompleted: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}.json`,
				method: "PATCH",
				body: body.completed,
			}),
			invalidatesTags: ["Status"],
		}),
		addNewCourse: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}/courses/${body.courseName}.json`,
				method: "PUT",
				body: body.data,
			}),
			invalidatesTags: ["Course"],
		}),
	}),
});

export const {
	useGetUserByIdQuery,
	useAddNewUserMutation,
	useSetUserProgressMutation,
	useSetUserWorkoutCompletedMutation,
	useGetUserProgressQuery,
	useAddNewCourseMutation,
} = usersApi;
