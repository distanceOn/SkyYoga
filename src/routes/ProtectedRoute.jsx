import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = '/' }) => {
	const isAuthenticated = true;

	if (!isAuthenticated) {
		return <Navigate to={redirectPath} replace={true} />;
	}

	return <Outlet />;
};

export default ProtectedRoute;