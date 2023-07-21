export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserID = (state) => state.user.id;
//нужно поговорить о логике в целом
export const selectUserCourses = (state) => state.user.courses;
