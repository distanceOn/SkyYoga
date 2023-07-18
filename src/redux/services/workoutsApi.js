import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutsApi = createApi({
	reducerPath: "workoutsApi",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://skyfitness-9edcd-default-rtdb.europe-west1.firebasedatabase.app/workouts",
	}),
	endpoints: (build) => ({
		getWorkoutById: build.query({
			query: (id) => `${id}.json`,
		}),
	}),
});

export const { useGetWorkoutByIdQuery } = workoutsApi;
