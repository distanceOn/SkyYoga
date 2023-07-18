import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./services/coursesApi";
import { workoutsApi } from "./services/workoutsApi";
import userReducer from "./slices/user";

export const store = configureStore({
	reducer: {
		user: userReducer,
		[coursesApi.reducerPath]: coursesApi.reducer,
		[workoutsApi.reducerPath]: workoutsApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([coursesApi.middleware, workoutsApi.middleware]),
});
