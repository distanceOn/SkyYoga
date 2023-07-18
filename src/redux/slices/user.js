import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
	username: null,
	id: null,
	access: null,
	refresh: null,
	courses: null,
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
	},
});

export default userSlice.reducer;
