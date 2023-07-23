export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserId = (state) => state.user.userId;
export const selectUserExercises = (state) => state.user.exercises;

//нужно поговорить о логике в целом
export const selectUserCourses = (state) => state.user.courses;
