import s from './App.module.scss';
import Main from './pages/Main/Main';
// import { UnauthorizedCourse } from './pages/unauthorizedCourse';
import { ModalSelectWorkout } from './components/ModalSelectWorkout/ModalSelectWorkout';

import { ModalProgress } from './components/modalProgress/ModalProgress';

import Profile from './pages/Profile/Profile';
import AppRoutes from './routes';

function App() {
	return (
		<div className={s.app}>
			{/* <Main /> */}
			{/* <UnauthorizedCourse /> */}
			{/* <ModalSelectWorkout /> */}

			{/* <ModalProgress /> */}

			{/* <Profile /> */}
			<AppRoutes />
		</div>
	);
}

export default App;
