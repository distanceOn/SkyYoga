import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	userId: null, //после регистрации и авторизации
	courses: null,
	currentWorkout: null,
	email: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLogout: () => initialState,
		setLogin: (state, { payload }) => {
			return {
				...state,
				userId: payload.userId,
				isAuthenticated: true,
				email: payload.email,
			};
		},
		setUserInfo: (state, { payload }) => ({
			...state,
			courses: payload.courses,
		}),
		setCurrentWorkout: (state, { payload }) => ({
			...state,
			currentWorkout: payload.currentWorkout,
		}),
		setEmail: (state, { payload }) => ({
			...state,
			email: payload.email,
		}),
	},
});
export const {
	setLogout,
	setLogin,
	setUserInfo,
	setCurrentWorkout,
	setEmail
} = userSlice.actions;

export default userSlice.reducer;
