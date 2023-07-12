import { configureStore } from '@reduxjs/toolkit';
import { coursesApi } from './services/coursesApi';
import userReducer from './slices/user';

export const store = configureStore({
	reducer: {
		user: userReducer,
		[coursesApi.reducerPath]: coursesApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(coursesApi.middleware),
});
