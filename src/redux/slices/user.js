import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	login: null,
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
				userId: payload.userId,
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
			userId: payload.userId,
		}),
		setCourses: (state, { payload }) => ({
			...state,
			courses: payload.courses,
		}),
		setExercises: (state, { payload }) => ({
			...state,
			exercises: payload.exercises,
		}),
		setUserInfo: (state, { payload }) => ({
			...state,
			courses: payload.courses,
			login: payload.login,
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
	setUserInfo,
} = userSlice.actions;

export default userSlice.reducer;
export const { setLogin } = userSlice.actions;
