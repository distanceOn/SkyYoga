import s from './App.module.scss';
import Main from './pages/Main/Main';
// import { UnauthorizedCourse } from './pages/unauthorizedCourse';
import { ModalSelectWorkout } from './components/ModalSelectWorkout/ModalSelectWorkout';

function App() {
	return (
		<div className={s.app}>
			<Main />
			{/* <UnauthorizedCourse /> */}
			<ModalSelectWorkout />
		</div>
	);
}

export default App;
