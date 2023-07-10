import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Profile from '../pages/Profile/Profile';
import UnauthorizedCourse from '../pages/unauthorizedCourse/UnauthorizedCourse';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			{/* Приблизительные названия роутов. Когда будут готовы все страницы, изменить! */}

			{/* <Route path="/login" element={<Login />} /> */}
			{/* <Route path="/registration" element={<SiqnUp />} /> */}
			<Route path="/course/:name" element={<UnauthorizedCourse />} />

			<Route element={<ProtectedRoute />}>
				<Route path="/profile" element={<Profile />} />
				{/* <Route path="/course" element={<AuthorizedCourse />} /> */}
			</Route>
		</Routes>
	);
};

export default AppRoutes;