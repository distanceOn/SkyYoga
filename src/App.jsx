import s from './App.module.scss';
import Main from './pages/Main/Main';
// import { UnauthorizedCourse } from './pages/unauthorizedCourse';
import { ModalSelectWorkout } from './components/ModalSelectWorkout/ModalSelectWorkout';
import Profile from './pages/Profile/Profile';

function App() {
	return (
		<div className={s.app}>
			{/* <Main /> */}
			{/* <UnauthorizedCourse /> */}
			{/* <ModalSelectWorkout /> */}
		<Profile />
		</div>
	);
}

export default App;
