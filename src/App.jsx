import s from './App.module.scss';
import Main from './pages/Main/Main';
// import { UnauthorizedCourse } from './pages/unauthorizedCourse';
import { ModalSelectWorkout } from './components/ModalSelectWorkout/ModalSelectWorkout';
import { ModalSubmittedProgress } from './components/ModalSubmittedProgress/ModalSubmittedProgress';

function App() {
	return (
		<div className={s.app}>
			<Main />
			{/* <UnauthorizedCourse /> */}
			{/* <ModalSelectWorkout /> */}
			< ModalSubmittedProgress />
		</div>
	);
}

export default App;
