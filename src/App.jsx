import s from './App.module.scss';
import Main from './pages/Main/Main';
// import { UnauthorizedCourse } from './pages/unauthorizedCourse';
import { ModalSelectWorkout } from './components/ModalSelectWorkout/ModalSelectWorkout';
import { ModalProgress } from './components/modalProgress/ModalProgress';

function App() {
	return (
		<div className={s.app}>
			<Main />
			{/* <UnauthorizedCourse /> */}
			{/* <ModalSelectWorkout /> */}
			<ModalProgress />
		</div>
	);
}

export default App;
