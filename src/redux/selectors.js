export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserID = (state) => state.user.id;
export const selectUserName = (state) => state.user.name;
export const selectUserExercises = (state) => state.user.exercises;

//нужно поговорить о логике в целом
export const selectUserCourses = (state) => state.user.courses;
