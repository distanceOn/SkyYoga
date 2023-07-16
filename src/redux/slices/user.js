import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
	username: null,
	id: null, //после регистрации
	access: null,
	refresh: null,
	courses: null,
	name: null, //c бд
	exercises: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLogout: () => initialState,
		setLogin: (state, { payload }) => {
			return {
				...state,
				username: payload?.username,
				id: payload.id,
				isAuthenticated: true,
			};
		},
		setRefresh: (state, { payload }) => ({
			...state,
			refresh: payload.refresh,
		}),
		setAccess: (state, { payload }) => ({
			...state,
			access: payload.access,
		}),
		setName: (state, { payload }) => ({
			...state,
			name: payload.name,
		}),
		setCourses: (state, { payload }) => ({
			...state,
			courses: payload.courses,
		}),
		setExercises: (state, { payload }) => ({
			...state,
			exercises: payload.exercises,
		}),
	},
});
export const {
	setLogout,
	setLogin,
	setAccess,
	setRefresh,
	setName,
	setExercises,
	setCourses,
} = userSlice.actions;

export default userSlice.reducer;
