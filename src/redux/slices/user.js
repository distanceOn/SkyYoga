import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
	username: null,
	userId: null, //после регистрации и авторизации
	access: null,
	refresh: null,
	courses: null,
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
		setUserId: (state, { payload }) => ({
			...state,
			name: payload.userId,
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
	setUserId,
	setExercises,
	setCourses,
} = userSlice.actions;

export default userSlice.reducer;
