import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
import UnauthorizedCourse from "../pages/unauthorizedCourse/UnauthorizedCourse";
import { AuthorizedCourse } from "../pages/authorizedCourse/AuthorizedCourse";
import ProtectedRoute from "./ProtectedRoute";
import { Auth } from "../pages/Auth/Auth";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			{/* Приблизительные названия роутов. Когда будут готовы все страницы, изменить! */}

			<Route path="/login" element={<Auth loginPage="true" />} />
			<Route path="/registration" element={<Auth />} />

			<Route path="/course/:name" element={<UnauthorizedCourse />} />

			<Route element={<ProtectedRoute />}>
				<Route path="/profile" element={<Profile />} />
				<Route path="/workout/:id" element={<AuthorizedCourse />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
