import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./services/coursesApi";
import { usersApi } from "./services/usersApi";
import { workoutsApi } from "./services/workoutsApi";
import userReducer from "./slices/user";

export const store = configureStore({
	reducer: {
		user: userReducer,
		[coursesApi.reducerPath]: coursesApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[workoutsApi.reducerPath]: workoutsApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			coursesApi.middleware,
			usersApi.middleware,
			workoutsApi.middleware,
		]),
});
