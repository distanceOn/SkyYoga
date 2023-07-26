import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	userId: null, //после регистрации и авторизации
	courses: null,
	currentWorkout: null,
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
			};
		},
		setUserInfo: (state, { payload }) => ({
			...state,
			courses: payload.courses,
			login: payload.login,
		}),
		setCurrentWorkout: (state, { payload }) => ({
			...state,
			currentWorkout: payload.currentWorkout,
		}),
	},
});
export const {
	setLogout,
	setLogin,
	setUserInfo,
	setCurrentWorkout,
} = userSlice.actions;

export default userSlice.reducer;
